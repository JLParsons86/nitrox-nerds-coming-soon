'use client';

export default function Home() {
  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        fontFamily: 'sans-serif',
        backgroundColor: '#0a0a0a',
        color: '#eee',
        textAlign: 'center',
        padding: '1rem',
      }}
    >
      <h1 style={{ fontSize: '3rem', color: '#00c2cb' }}>
        🌊 Nitrox Nerds
      </h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#ccc' }}>
        Dive travel reimagined. Launching soon.
      </p>
      <p style={{ fontSize: '1rem', color: '#888' }}>
        Contact us at:{' '}
        <a
          href="mailto:info@nitroxnerds.com"
          style={{ color: '#00c2cb', textDecoration: 'none' }}
        >
          info@nitroxnerds.com
        </a>
      </p>
    </main>
  );
}
