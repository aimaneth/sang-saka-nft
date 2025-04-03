import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getCollectionAssets, NFTAsset } from '../utils/opensea';

export default function NFTGrid() {
  const [nfts, setNfts] = useState<NFTAsset[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNFTs() {
      const data = await getCollectionAssets();
      setNfts(data);
      setLoading(false);
    }
    fetchNFTs();
  }, []);

  return (
    <section id="featured" className="py-12 sm:py-16 md:py-20 bg-secondary-light">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-white"
        >
          Featured NFTs
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {loading ? (
            // Loading skeleton
            [1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card animate-pulse"
              >
                <div className="relative aspect-square mb-4 bg-secondary rounded-2xl" />
                <div className="h-6 bg-secondary rounded-2xl w-3/4 mb-2" />
                <div className="h-4 bg-secondary rounded-2xl w-1/2 mb-4" />
                <div className="h-10 bg-secondary rounded-2xl" />
              </motion.div>
            ))
          ) : (
            nfts.slice(0, 3).map((nft, index) => (
              <motion.div
                key={nft.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="relative aspect-square mb-4 sm:mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={nft.imageUrl}
                    alt={nft.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{nft.name}</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 line-clamp-2">{nft.description}</p>
                <Link
                  href={nft.permalink}
                  target="_blank"
                  className="btn-primary w-full text-center text-sm sm:text-base py-2 sm:py-3 rounded-xl hover:scale-105 transition-transform duration-300"
                >
                  View Details
                </Link>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
} 