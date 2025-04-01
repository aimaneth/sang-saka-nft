'use client';

import { useEffect, useState } from 'react';
import { getCollectionStats } from "../utils/opensea";

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
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 animate-pulse">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white/10 rounded-lg p-8 h-32" />
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
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Collection Stats</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-sm text-gray-200 mb-2">Total Supply</h3>
            <p className="text-4xl font-bold text-white">{stats.total_supply}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-sm text-gray-200 mb-2">Floor Price</h3>
            <p className="text-4xl font-bold text-white">
              {stats.floor_price ? `${stats.floor_price} ETH` : 'N/A'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 