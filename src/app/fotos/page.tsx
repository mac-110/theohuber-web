import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fotogalerie | Theo Huber AG",
  description: "Bilder unserer Projekte in Winterthur und Umgebung.",
};

const images = [
  "20130828_141040-600h.jpg",
  "20130903_133854-5bb80019-600h.jpg",
  "IMG002-600h.jpg",
  "IMG_2238-600h.jpg",
  "P1010083-600h.jpg",
  "P1010321-600h.jpg",
  "P1010500-600h.jpg",
  "P1010500-b82ae7e0-600h.jpg",
  "P1010506-600h.jpg",
  "P1010507-6c048382-600h.jpg",
  "P1010509-df9880de-600h.jpg",
  "P1010514-600h.jpg",
  "P1010515-600h.jpg",
  "P1010520-13b3504e-600h.jpg",
  "P1010522-600h.jpg",
  "P1040172-600h.jpg",
  "P1040217-600h.jpg",
  "P1060641-600h.jpg",
  "P1070586-600h.jpg",
  "P2292984-600h.jpg",
  "Schriftzug-f69fdf8a-600h.jpg"
];

export default function GalleryPage() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Fotogalerie</h1>
      <p className="text-xl text-center text-gray-600 mb-12">
        Einblicke in unsere aktuellen und vergangenen Projekte.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group cursor-pointer">
            <Image
              src={`/images/gallery/${img}`}
              alt={`Projektbild ${idx + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
