'use client';

import Image from 'next/image';
import Banner from './components/Banner';
export default function Home() {
  return (
    <>
      <Banner />
      <main
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 24rem)', // adjust for banner height
          flexDirection: 'column',
          fontFamily: 'sans-serif',
        }}
      >
        <h1 style={{ fontSize: '3rem', color: '#00c2cb' }}>🌊 Nitrox Nerds</h1>
        <p style={{ fontSize: '1.25rem', color: '#ccc' }}>
          Dive travel reimagined. Launching soon.
        </p>
        <p style={{ fontSize: '1rem', color: '#888' }}>
          Contact us at: <a href="mailto:info@nitroxnerds.com" style={{ color: '#00c2cb' }}>info@nitroxnerds.com</a>
        </p>
      </main>
    </>
  );
}