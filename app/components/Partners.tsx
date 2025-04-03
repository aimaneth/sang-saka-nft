import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
  {
    name: 'Konfederasi',
    logo: '/images/partners/konfed.png',
    link: 'https://konfed.my'
  },
  {
    name: 'Malaysia Blockchain Week',
    logo: '/images/partners/mybw.png',
    link: 'https://myblockchainweek.com'
  },
];

export default function Partners() {
  return (
    <section className="py-16 sm:py-20 bg-secondary-light">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white"
        >
          Our Partners
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative w-full max-w-[200px] aspect-[3/2] grayscale hover:grayscale-0 transition-all duration-300 bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-white/20"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain p-2 sm:p-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
} 