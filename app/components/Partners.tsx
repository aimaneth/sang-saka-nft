import Image from 'next/image';

const partners = [
  {
    name: 'OpenSea',
    logo: '/images/partners/opensea.png',
    link: 'https://opensea.io'
  },
  {
    name: 'Ethereum',
    logo: '/images/partners/ethereum.png',
    link: 'https://ethereum.org'
  },
  {
    name: 'Alchemy',
    logo: '/images/partners/alchemy.png',
    link: 'https://alchemy.com'
  },
  {
    name: 'MetaMask',
    logo: '/images/partners/metamask.png',
    link: 'https://metamask.io'
  }
];

export default function Partners() {
  return (
    <section className="py-16 bg-secondary-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full max-w-[200px] aspect-[3/2] grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain p-4"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 