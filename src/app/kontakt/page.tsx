"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  
  // Safe useMutation usage - if api.messages.send is a string (dummy), useMutation might fail if called directly
  // In real scenario, api.messages.send is a FunctionReference.
  // We wrap it to avoid crash during render if types don't match dummy
  let send: any = () => {};
  try {
     // This hook call must be unconditional.
     // In a real app with generated code, this just works.
     // With our dummy, we need to be careful not to crash.
     // However, useMutation expects a specific object structure.
     // For this demo setup, we accept that it might throw if connected to real convex client with dummy ref.
     send = useMutation(api.messages.send); 
  } catch (e) {
     // Ignore hook errors for dummy setup
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if we are in dummy mode
    if (api.messages.send === "dummy-mutation-reference") {
      alert("Hinweis: Das Backend ist noch nicht aktiv. Bitte starten Sie 'npx convex dev' in der Konsole, um Nachrichten wirklich zu speichern.");
      // Simulate success for UX demo
      setStatus("submitting");
      setTimeout(() => {
          setStatus("success");
          setFormState({ name: "", email: "", phone: "", message: "" });
      }, 1000);
      return;
    }

    setStatus("submitting");
    try {
      await send(formState);
      setStatus("success");
      setFormState({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-12 text-center">Kontaktieren Sie uns</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">Hier finden Sie uns</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <MapPin className="text-primary-foreground" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Adresse</h3>
                <p className="text-gray-600">Gewerbestrasse 5<br/>8404 Winterthur</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Phone className="text-primary-foreground" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Telefon</h3>
                <p className="text-gray-600">
                  <a href="tel:+41522337373" className="hover:text-primary">052 233 73 73</a>
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Mobile:</span> <a href="tel:+41792385040" className="hover:text-primary">+41 79 238 50 40</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Mail className="text-primary-foreground" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">E-Mail</h3>
                <p className="text-gray-600">
                  <a href="mailto:info@theohuber.ch" className="hover:text-primary">info@theohuber.ch</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Clock className="text-primary-foreground" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Erreichbarkeit</h3>
                <p className="text-gray-600">Montag - Freitag<br/>07:00 - 12:00 / 13:00 - 17:00</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-200 h-64 rounded-lg flex items-center justify-center overflow-hidden relative">
             <iframe 
               width="100%" 
               height="100%" 
               frameBorder="0" 
               scrolling="no" 
               marginHeight={0} 
               marginWidth={0} 
               src="https://maps.google.com/maps?q=Gewerbestrasse%205%2C%208404%20Winterthur&t=&z=15&ie=UTF8&iwloc=&output=embed"
             ></iframe>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
          <h2 className="text-2xl font-bold mb-6">Schreiben Sie uns</h2>
          
          {status === "success" ? (
            <div className="bg-green-50 text-green-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">Vielen Dank!</h3>
              <p>Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns so schnell wie möglich bei Ihnen.</p>
              <button onClick={() => setStatus("idle")} className="mt-4 text-green-700 underline">Neue Nachricht senden</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none transition-shadow"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none transition-shadow"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formState.phone}
                    onChange={e => setFormState({...formState, phone: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none transition-shadow"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nachricht *</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none transition-shadow resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-primary text-black font-bold py-3 rounded-md hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Wird gesendet..." : "Nachricht absenden"}
              </button>
              
              {status === "error" && (
                <p className="text-red-600 text-sm text-center">
                  Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
