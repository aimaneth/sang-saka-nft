import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://i.seadn.io/gcs/files/d695e4d79cf7205a0a0535721644f79e.jpg?auto=format&dpr=1&w=1920"
          alt="Sang Saka Hero Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white">
            Sang Saka
            <span className="text-primary block md:inline"> NFT Collection</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto px-4 text-gray-200">
            Discover the exclusive collection of Sang Saka NFTs, where art meets blockchain technology.
          </p>
          <Link
            href="https://opensea.io/collection/sangsaka-genesis"
            target="_blank"
            className="btn-primary text-base md:text-lg px-6 md:px-8 py-2 md:py-3"
          >
            View on OpenSea
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 