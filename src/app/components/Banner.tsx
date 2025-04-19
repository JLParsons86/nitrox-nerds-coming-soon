// src/components/Banner.tsx
export default function Banner() {
    return (
      <div className="w-full h-64 md:h-96 relative">
        <img
          src="/octopus-banner.jpg"
          alt="Octopus underwater"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Dive into Discovery with Nitrox Nerds
          </h1>
        </div>
      </div>
    );
  }