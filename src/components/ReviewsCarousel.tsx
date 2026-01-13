"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, RefreshCw } from "lucide-react";
import { useQuery, useAction } from "convex/react";
import { api } from "../../convex/_generated/api";

export function ReviewsCarousel() {
  // Lade Reviews aus der Datenbank (live)
  const reviews = useQuery(api.reviews.getTopReviews);
  
  // Action zum manuellen Aktualisieren
  const syncReviews = useAction(api.reviews.syncGoogleReviews);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isSyncing, setIsSyncing] = useState(false);

  // Fallback-Daten für Erstansicht oder wenn DB leer
  const defaultReviews = [
    { author: "Hans Muster", rating: 5, text: "Sehr zuverlässige Firma. Top Qualität.", date: "vor 2 Monaten", source: "Google" },
    { author: "Petra Sommer", rating: 5, text: "Das Gerüst stand sicher und pünktlich.", date: "vor 5 Monaten", source: "Google" },
    { author: "Markus Frei", rating: 4, text: "Freundliches Team, saubere Arbeit.", date: "vor 1 Jahr", source: "Google" }
  ];

  const displayReviews = (reviews && reviews.length > 0) ? reviews : defaultReviews;

  // Auto-Play
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex, displayReviews.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % displayReviews.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + displayReviews.length) % displayReviews.length);
  };

  const handleSync = async () => {
    setIsSyncing(true);
    try {
      await syncReviews();
      alert("Rezensionen aktualisiert!");
    } catch (err) {
      console.error(err);
      alert("Konnte nicht aktualisieren. Prüfen Sie die Logs.");
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <section className="bg-secondary py-24 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2">
            <Quote size={400} />
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Das sagen unsere Kunden
          </h2>
          <div className="flex justify-center items-center gap-2">
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" />
              ))}
            </div>
            <span className="text-gray-400 font-medium">4.8 von 5 Sternen auf Google</span>
          </div>
          
          {/* Admin-Button (versteckt/klein) zum Aktualisieren */}
          <button 
            onClick={handleSync}
            disabled={isSyncing}
            className="absolute right-0 top-0 text-gray-600 hover:text-primary transition-colors p-2"
            title="Rezensionen von Google aktualisieren"
          >
            <RefreshCw size={16} className={isSyncing ? "animate-spin" : ""} />
          </button>
        </div>

        <div className="relative h-[400px] md:h-[300px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                if (Math.abs(offset.x * velocity.x) > 10000) {
                  offset.x < 0 ? nextSlide() : prevSlide();
                }
              }}
              className="absolute w-full max-w-3xl px-4"
            >
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl relative">
                <Quote className="absolute top-6 left-6 text-primary/20" size={48} />
                
                <div className="flex flex-col items-center text-center">
                  <p className="text-xl md:text-2xl text-gray-700 italic mb-8 relative z-10 leading-relaxed">
                    "{displayReviews[currentIndex].text}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-gray-500">
                      {displayReviews[currentIndex].author.charAt(0)}
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900">{displayReviews[currentIndex].author}</div>
                      <div className="text-sm text-gray-500 flex items-center gap-2">
                        {displayReviews[currentIndex].date} via 
                        <span className="flex items-center gap-1 font-medium text-[#4285F4]">
                          <span className="text-[#EA4335]">G</span>
                          <span className="text-[#FBBC05]">o</span>
                          <span className="text-[#4285F4]">o</span>
                          <span className="text-[#34A853]">g</span>
                          <span className="text-[#EA4335]">l</span>
                          <span className="text-[#EA4335]">e</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            className="absolute left-0 md:left-4 z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm hidden md:block"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className="absolute right-0 md:right-4 z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm hidden md:block"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
