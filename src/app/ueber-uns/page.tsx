import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns | Theo Huber AG",
  description: "Seit 40 Jahren im Gerüstbau. Erfahren Sie mehr über die Geschichte und das Team der Theo Huber AG.",
};

export default function AboutPage() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-12 text-center">Seit 40 Jahren im Gerüstbau</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-primary">Unsere Geschichte</h2>
          <div className="prose prose-lg text-gray-700 dark:text-gray-300">
            <p className="mb-4">
              Die Geschichte der Theo Huber AG begann im Jahr 1978, als das Unternehmen als Einzelfirma vom gelernten Schlosser Theo Huber gegründet wurde.
            </p>
            <p className="mb-4">
              1991 wurde die Einzelfirma in eine AG umgewandelt, um das stetige Wachstum auf eine solide Basis zu stellen.
            </p>
            <p className="mb-4">
              Urs Lippuner, der heutige Inhaber und Geschäftsführer, übernahm die Firma im Jahr 1995. Mit seiner Erfahrung von mehr als 23 Jahren im Gerüstbau führt er das Unternehmen erfolgreich in die Zukunft.
            </p>
            <p>
              Im Jahr 2000 bezog das Unternehmen die neuen, modernen Räumlichkeiten in Winterthur Grüze, um logistisch optimal aufgestellt zu sein.
            </p>
          </div>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl bg-white border border-gray-100 flex items-center justify-center p-8">
           <Image 
             src="/images/logo/Logo_Theo_Huber-1920w.png" 
             alt="Theo Huber AG Logo" 
             width={500}
             height={300}
             className="object-contain max-h-full"
           />
        </div>
      </div>

      <div className="bg-muted p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-6 text-primary">Das Team</h2>
        <div className="prose prose-lg text-gray-700 dark:text-gray-300 max-w-none">
          <p className="mb-4">
            Erfahrene Chefmonteure und Gruppenführer leiten unsere Arbeitsgruppen. Je nach Saison sind zwischen 12 und 20 qualifizierte Gerüstbauer täglich für Sie im Einsatz.
          </p>
          <p className="mb-4">
            Ein besonderer Vorteil für unsere Kunden: <strong>Unsere Mitarbeiter sprechen alle Deutsch.</strong> Dies vereinfacht die Kommunikation auf der Baustelle erheblich und beugt Missverständnissen vor.
          </p>
          <p>
            Auch der Nachwuchs liegt uns am Herzen: Der Lehrauftrag ist uns wichtig, weshalb wir regelmässig Lehrlinge ausbilden und ihnen das Handwerk des Gerüstbaus näherbringen.
          </p>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-xl font-medium mb-6">
          Urs Lippuner von Theo Huber AG in Winterthur freut sich auf Ihren Anruf.
        </p>
        <a href="tel:+41522337373" className="inline-block bg-primary text-black px-8 py-3 rounded-md font-bold text-lg hover:bg-yellow-400 transition-colors shadow-sm">
          Jetzt kontaktieren
        </a>
      </div>
    </div>
  );
}
