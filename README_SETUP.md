# Theo Huber AG - Website Setup

## Voraussetzungen
- Node.js installiert (v18+)

## Installation

1. Navigiere in den Projektordner:
   ```bash
   cd theohuber-web
   ```

2. Installiere Abhängigkeiten (falls noch nicht geschehen):
   ```bash
   npm install
   ```

## Backend starten (Convex)

Damit das Kontaktformular funktioniert, muss Convex initialisiert werden.

1. Starte Convex (Login erforderlich):
   ```bash
   npx convex dev
   ```
   Folge den Anweisungen im Terminal. Dies erstellt auch die notwendigen API-Dateien, die aktuell nur als Dummy vorliegen.

## Frontend starten

In einem neuen Terminal-Fenster:

```bash
npm run dev
```

Die Seite ist nun unter [http://localhost:3000](http://localhost:3000) erreichbar.

## Deployment

Das Projekt ist optimiert für Vercel. Einfach das Repository mit Vercel verbinden.
Für Convex im Production-Mode: `npx convex deploy`.
