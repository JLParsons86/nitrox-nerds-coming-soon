// src/components/Banner.tsx
export default function Banner() {
    return (
      <div className="relative w-full" style={{ height: '400px', overflow: 'hidden' }}>
        <img
          src="/octopus-banner.jpg"
          alt="Octopus underwater"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%', // 👈 this is the line that controls the "focus"
            display: 'block',
          }}
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Dive into Discovery with Nitrox Nerds
          </h1>
        </div>
      </div>
    );
  }