export default function ImpressumPage() {
  return (
    <div className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Impressum</h1>
      
      <div className="prose prose-lg text-gray-700">
        <h2 className="text-xl font-bold mt-8 mb-4">Kontaktadresse</h2>
        <p>
          Theo Huber AG<br/>
          Gewerbestrasse 5<br/>
          8404 Winterthur<br/>
          Schweiz
        </p>
        <p>
          E-Mail: <a href="mailto:info@theohuber.ch" className="text-primary hover:underline">info@theohuber.ch</a>
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">Vertretungsberechtigte Personen</h2>
        <p>Urs Lippuner, Inhaber und Geschäftsführer</p>

        <h2 className="text-xl font-bold mt-8 mb-4">Handelsregistereintrag</h2>
        <p>Eingetragener Firmenname: Theo Huber AG</p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">Haftungsausschluss</h2>
        <p>
          Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
          Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
        </p>
      </div>
    </div>
  );
}
