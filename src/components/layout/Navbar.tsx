"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Über uns", href: "/ueber-uns" },
  { name: "Gerüstbau", href: "/geruestbau" },
  { name: "Fotos", href: "/fotos" },
  { name: "Kontakt", href: "/kontakt" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="relative h-10 w-auto">
                 {/* Fallback falls Bild nicht lädt oder als Platzhalter für Text-Logo */}
                 <span className="font-bold text-2xl tracking-tighter">THEO<span className="text-primary">HUBER</span>AG</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a href="tel:+41522337373" className="bg-primary text-black px-4 py-2 rounded-md font-medium flex items-center gap-2 hover:bg-yellow-400 transition-colors shadow-sm">
              <Phone size={18} />
              052 233 73 73
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a href="tel:+41522337373" className="block w-full text-left px-3 py-2 text-base font-medium text-black bg-primary rounded-md mt-4 flex items-center gap-2">
              <Phone size={18} />
              Anrufen: 052 233 73 73
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
