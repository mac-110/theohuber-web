import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("/images/AdobeStock_70479421-1920w.jpeg")' }}
        >
          <div className="absolute inset-0 bg-black/60" /> {/* Dunkleres Overlay für bessere Lesbarkeit */}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in fade-in zoom-in duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-lg">
            Ihr Gerüstbauer in <span className="text-primary">Winterthur</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-100 drop-shadow-md">
            Wir montieren Gerüste für jeden Zweck. Ob Fassadenarbeit oder Grossumbau – wir finden die richtige Lösung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/kontakt" 
              className="bg-primary text-black px-8 py-3 rounded-md font-bold text-lg hover:bg-yellow-400 transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
            >
              Offerte anfragen <ArrowRight size={20} />
            </Link>
            <Link 
              href="/geruestbau" 
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-white/20 transition-colors shadow-lg"
            >
              Unsere Leistungen
            </Link>
          </div>
        </div>
      </section>

      {/* Teaser Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-primary hover:transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Seit 40 Jahren</h3>
            <p className="text-gray-600 mb-6">
              Erfahrung und Zuverlässigkeit seit 1978. Wir sind Ihr etablierter Partner in der Region.
            </p>
            <Link href="/ueber-uns" className="text-primary font-bold hover:underline inline-flex items-center gap-1">
              Mehr über uns <ArrowRight size={16} />
            </Link>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-primary hover:transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Gerüstbau</h3>
            <p className="text-gray-600 mb-6">
              Fassadengerüste, Dachdeckergerüste, Notdächer und mehr. Wir haben das Passende für Sie.
            </p>
            <Link href="/geruestbau" className="text-primary font-bold hover:underline inline-flex items-center gap-1">
              Zu den Dienstleistungen <ArrowRight size={16} />
            </Link>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-primary hover:transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Galerie</h3>
            <p className="text-gray-600 mb-6">
              Machen Sie sich ein Bild von unserer Arbeit. Unsere Referenzprojekte sprechen für sich.
            </p>
            <Link href="/fotos" className="text-primary font-bold hover:underline inline-flex items-center gap-1">
              Bilder ansehen <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Qualität und Sicherheit am Bau</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Wir sind Ihr Gerüstbauer für grosse und kleine Objekte im Grossraum Winterthur und Zürich. 
          Bis zu 8 Arbeitsgruppen sind täglich im Einsatz. Unsere Kunden schätzen unsere Zuverlässigkeit 
          und Flexibilität. Wir legen grossen Wert auf Qualität und Pünktlichkeit.
        </p>
      </section>

      {/* Highlights / Why Us */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Warum Theo Huber AG?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Über 40 Jahre Erfahrung",
              "Bis zu 8 Teams täglich im Einsatz",
              "100% Deutschsprachige Mitarbeiter",
              "Lehrlingsausbildung",
              "Inhabergeführt",
              "Top Sicherheitsstandards",
              "Flexibel & Zuverlässig",
              "Region Winterthur & Zürich-Ost"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded shadow-sm border border-gray-100">
                <CheckCircle2 className="text-primary flex-shrink-0" />
                <span className="font-medium text-gray-900">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Carousel */}
      <ReviewsCarousel />
    </div>
  );
}
