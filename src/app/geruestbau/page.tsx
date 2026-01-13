import { Check } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gerüstbau Dienstleistungen | Theo Huber AG",
  description: "Gerüste für jede Arbeitsgattung. Fassadengerüste, Industriegerüste, Notdächer und mehr.",
};

const services = [
  "Fassadengerüste",
  "Dachdecker-/Spenglergerüste",
  "Industriegerüste",
  "Innengerüste",
  "Deckengerüste (Flächengerüste)",
  "Rollgerüste",
  "Notdächer",
  "Regenschutzdächer",
  "Schutzgeländer am Dachrand",
  "Treppentürme",
  "Bauvisiere",
  "Hängegerüste"
];

const clients = [
  "Planer", "Bauherren", "Architekten", "Maler", 
  "Spengler", "Dachdecker", "Solaranlagen-Spezialisten", "Öffentliche Hand"
];

export default function ServicesPage() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Gerüste für jede Arbeitsgattung</h1>
      
      <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
        Die Theo Huber AG bietet die Vermietung von Gerüsten für kleine und grosse Arbeiten an. 
        Unsere umfassende Erfahrung hilft uns, für jedes Projekt das richtige Gerüst zu liefern.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
          <div className="bg-secondary p-6">
            <h2 className="text-2xl font-bold text-white">Unsere Leistungen</h2>
          </div>
          <div className="p-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="bg-primary/20 p-1 rounded mt-0.5">
                    <Check size={16} className="text-primary-foreground" />
                  </span>
                  <span className="font-medium text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 h-full">
          <div className="bg-primary p-6">
            <h2 className="text-2xl font-bold text-black">Unsere Auftraggeber</h2>
          </div>
          <div className="p-8">
             <p className="mb-6 text-gray-600">
               Wir arbeiten vertrauensvoll mit verschiedensten Partnern zusammen:
             </p>
             <div className="flex flex-wrap gap-3">
               {clients.map((client, index) => (
                 <span key={index} className="bg-muted px-4 py-2 rounded-full font-medium text-gray-700 border border-gray-200 shadow-sm">
                   {client}
                 </span>
               ))}
             </div>
          </div>
        </div>
      </div>

      <div className="bg-muted p-12 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Haben Sie ein spezielles Projekt?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Egal wie komplex die Anforderungen sind - wir finden eine sichere und effiziente Lösung für Ihr Bauvorhaben.
        </p>
        <a href="/kontakt" className="inline-block bg-primary text-black px-8 py-3 rounded-md font-bold text-lg hover:bg-yellow-400 transition-colors shadow-sm">
          Beratung anfordern
        </a>
      </div>
    </div>
  );
}
