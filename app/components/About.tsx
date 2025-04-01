import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="pb-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://i.seadn.io/gcs/files/d695e4d79cf7205a0a0535721644f79e.jpg?auto=format&dpr=1&w=1920"
              alt="About Sang Saka"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Sang Saka</h2>
            <p className="text-gray-200 text-lg">
              Sang Saka is a groundbreaking NFT collection that celebrates the rich cultural heritage
              and artistic excellence of our community. Each piece in the collection tells a unique
              story and represents a piece of our collective history.
            </p>
            <p className="text-gray-200 text-lg">
              Our collection features meticulously crafted digital art that combines traditional
              elements with modern design, creating a bridge between the past and the future.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-white">Unique Artwork</h3>
                <p className="text-gray-200">Each NFT is a one-of-a-kind masterpiece</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-white">Cultural Heritage</h3>
                <p className="text-gray-200">Preserving traditions through digital art</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 