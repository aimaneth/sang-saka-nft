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
    <section id="featured" className="py-12 md:py-20 bg-secondary-light">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Featured NFTs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {loading ? (
            // Loading skeleton
            [1, 2, 3].map((index) => (
              <div key={index} className="card animate-pulse">
                <div className="relative aspect-square mb-4 bg-secondary rounded-lg" />
                <div className="h-6 bg-secondary rounded w-3/4 mb-2" />
                <div className="h-4 bg-secondary rounded w-1/2 mb-4" />
                <div className="h-10 bg-secondary rounded" />
              </div>
            ))
          ) : (
            nfts.slice(0, 3).map((nft) => (
              <motion.div
                key={nft.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="card group"
              >
                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={nft.imageUrl}
                    alt={nft.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{nft.name}</h3>
                <p className="text-sm md:text-base text-gray-400 mb-4 line-clamp-2">{nft.description}</p>
                <Link
                  href={nft.permalink}
                  target="_blank"
                  className="btn-primary w-full text-center text-sm md:text-base"
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