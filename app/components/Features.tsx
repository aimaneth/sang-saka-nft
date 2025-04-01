import { motion } from 'framer-motion';

const features = [
  {
    title: 'Unique Artwork',
    description: 'Each NFT is a one-of-a-kind piece of digital art',
    icon: '🎨'
  },
  {
    title: 'Verified Collection',
    description: 'Official collection verified on OpenSea',
    icon: '✓'
  },
  {
    title: 'Community Driven',
    description: 'Join our vibrant community of collectors',
    icon: '👥'
  },
  {
    title: 'Exclusive Benefits',
    description: 'Special perks for NFT holders',
    icon: '✨'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Why Choose Sang Saka?</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Discover what makes our NFT collection unique and why collectors choose to be part of our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 