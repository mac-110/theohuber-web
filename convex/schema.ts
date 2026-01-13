import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  messages: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    message: v.string(),
    status: v.string(),
  }),
  reviews: defineTable({
    author: v.string(),
    rating: v.number(),
    text: v.string(),
    date: v.string(),
    source: v.string(), // z.B. "Google"
    active: v.boolean(), // Zusätzlicher Schalter, um einzelne manuell auszublenden
  }),
});
