'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-secondary/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Sang Saka Logo"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <span className="text-xl sm:text-2xl font-bold text-primary">Sang Saka</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#featured" className="text-gray-300 hover:text-primary transition-colors">
              Featured
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-primary transition-colors">
              About
            </Link>
            <Link
              href="https://opensea.io/collection/sangsaka-genesis"
              target="_blank"
              className="btn-primary"
            >
              View Collection
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            <Link
              href="#featured"
              className="block text-gray-300 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Featured
            </Link>
            <Link
              href="#about"
              className="block text-gray-300 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="https://opensea.io/collection/sangsaka-genesis"
              target="_blank"
              className="btn-primary block text-center"
              onClick={() => setIsOpen(false)}
            >
              View Collection
            </Link>
          </div>
        </motion.div>
      </div>
    </nav>
  );
} 