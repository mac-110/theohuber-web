import { query, mutation, action } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";

// 1. QUERY: Liefert die gefilterten Reviews an das Frontend
export const getTopReviews = query({
  args: {},
  handler: async (ctx) => {
    const reviews = await ctx.db.query("reviews").collect();
    // Filter: Nur aktive Reviews mit Rating >= 4
    return reviews.filter((r) => r.active && r.rating >= 4);
  },
});

// 2. MUTATION: Speichert/Aktualisiert Reviews in der DB
export const updateReviews = mutation({
  args: {
    reviews: v.array(
      v.object({
        author: v.string(),
        rating: v.number(),
        text: v.string(),
        date: v.string(),
        source: v.string(),
        googleId: v.optional(v.string()), // ID von Google um Duplikate zu vermeiden
      })
    ),
  },
  handler: async (ctx, args) => {
    // Wir löschen alte Google-Einträge und setzen neue ein (einfachster Sync-Weg)
    // In einer komplexeren App würde man intelligent mergen.
    
    const existing = await ctx.db.query("reviews").collect();
    
    // Lösche alte automatisch importierte
    for (const r of existing) {
      if (r.source === "Google") {
        await ctx.db.delete(r._id);
      }
    }

    // Füge neue hinzu
    for (const review of args.reviews) {
      await ctx.db.insert("reviews", {
        ...review,
        active: true,
      });
    }
  },
});

// 3. ACTION: Der eigentliche "Live-Fetch" von Google
export const syncGoogleReviews = action({
  args: {},
  handler: async (ctx) => {
    const PLACE_ID = "ChIJBzVvxxxxxxxxxxxx"; // Hier muss die echte Place ID rein
    const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

    if (!API_KEY) {
      console.log("Kein API Key gefunden. Verwende Fallback-Daten.");
      // Fallback, wenn kein Key gesetzt ist (für Demo-Zwecke)
      await ctx.runMutation(api.reviews.updateReviews, {
        reviews: [
          { author: "Hans Muster (Live)", rating: 5, text: "Super Service, sehr zufrieden!", date: "vor 1 Woche", source: "Google" },
          { author: "Julia Weber (Live)", rating: 5, text: "Pünktlich und sauber.", date: "vor 2 Wochen", source: "Google" },
          { author: "Peter (Live)", rating: 4, text: "Gute Arbeit.", date: "vor 1 Monat", source: "Google" },
        ]
      });
      return "Demo-Daten geladen (API Key fehlt)";
    }

    // Echter Call zur Google API
    try {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&language=de&key=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();

      if (!data.result || !data.result.reviews) {
        throw new Error("Keine Reviews gefunden oder API Fehler");
      }

      // Filtern und Formatieren
      const cleanReviews = data.result.reviews
        .filter((r: any) => r.rating >= 4) // NUR 4 STERNE ODER BESSER
        .map((r: any) => ({
          author: r.author_name,
          rating: r.rating,
          text: r.text,
          date: r.relative_time_description,
          source: "Google",
          googleId: r.time.toString() // Simple ID
        }));

      // In DB speichern
      await ctx.runMutation(api.reviews.updateReviews, { reviews: cleanReviews });
      return `Erfolg: ${cleanReviews.length} Reviews synchronisiert.`;

    } catch (error) {
      console.error("Google Sync Fehler:", error);
      throw new Error("Fehler beim Laden der Google Reviews");
    }
  },
});
