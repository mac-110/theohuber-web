import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-12 pb-8 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Theo Huber AG</h3>
            <p className="text-gray-300 mb-4 max-w-sm">
              Seit über 40 Jahren Ihr Experte für professionellen Gerüstbau in Winterthur und der Region Zürich-Ost.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Gewerbestrasse 5<br/>8404 Winterthur</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <a href="tel:+41522337373" className="hover:text-primary transition-colors">052 233 73 73</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <a href="mailto:info@theohuber.ch" className="hover:text-primary transition-colors">info@theohuber.ch</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Schnellzugriff</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/ueber-uns" className="hover:text-primary transition-colors">Über uns</Link></li>
              <li><Link href="/geruestbau" className="hover:text-primary transition-colors">Dienstleistungen</Link></li>
              <li><Link href="/fotos" className="hover:text-primary transition-colors">Galerie</Link></li>
              <li><Link href="/kontakt" className="hover:text-primary transition-colors">Kontakt</Link></li>
              <li><Link href="/impressum" className="hover:text-primary transition-colors">Impressum</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Theo Huber AG. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
