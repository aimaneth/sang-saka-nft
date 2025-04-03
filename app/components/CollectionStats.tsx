'use client';

import { useEffect, useState } from 'react';
import { getCollectionStats } from "../utils/opensea";
import { motion } from 'framer-motion';

interface CollectionStats {
  total_supply: number;
  floor_price: number;
}

export default function CollectionStats() {
  const [stats, setStats] = useState<CollectionStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      const stats = await getCollectionStats();
      if (stats) {
        setStats({
          total_supply: Number(stats.total_supply),
          floor_price: Number(stats.floor_price)
        });
      }
      setLoading(false);
    }
    fetchStats();
  }, []);

  if (loading) {
    return (
      <section className="py-16 sm:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 animate-pulse">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-6 sm:p-8 h-32 sm:h-40" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!stats) {
    return null;
  }

  return (
    <section className="py-16 sm:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white"
        >
          Collection Stats
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 text-center transform hover:scale-105 transition-all duration-300 border border-white/10 hover:border-white/20"
          >
            <h3 className="text-sm sm:text-base text-gray-200 mb-2">Total Supply</h3>
            <p className="text-3xl sm:text-4xl font-bold text-white">{stats.total_supply}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 text-center transform hover:scale-105 transition-all duration-300 border border-white/10 hover:border-white/20"
          >
            <h3 className="text-sm sm:text-base text-gray-200 mb-2">Floor Price</h3>
            <p className="text-3xl sm:text-4xl font-bold text-white">
              {stats.floor_price ? `${stats.floor_price} ETH` : 'N/A'}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 