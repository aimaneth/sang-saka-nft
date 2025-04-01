'use client';

import Hero from './components/Hero';
import CollectionStats from './components/CollectionStats';
import NFTGrid from './components/NFTGrid';
import Features from './components/Features';
import Partners from './components/Partners';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import About from './components/About';

export default function Home() {
  return (
    <main>
      <Hero />
      <CollectionStats />
      <About />
      <Features />
      <NFTGrid />
      <Partners />
      <Newsletter />
      <Footer />
    </main>
  );
} 