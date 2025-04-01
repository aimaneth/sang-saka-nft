import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Sang Saka NFT Collection',
  description: 'Explore the exclusive Sang Saka NFT collection on OpenSea',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-secondary text-white">
        <Navbar />
        {children}
      </body>
    </html>
  )
} 