import { Network, Alchemy } from "alchemy-sdk";

const settings = {
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "3Z3lUuT2QOPj6SnLw5Aw_410L44nEwBS",
  network: Network.ETH_MAINNET,
};

// Create a new Alchemy instance
const alchemy = new Alchemy(settings);

export interface NFTAsset {
  id: number;
  tokenId: string;
  imageUrl: string;
  name: string;
  description: string;
  permalink: string;
  collection: {
    name: string;
    description: string;
    imageUrl: string;
    externalUrl: string;
    stats: {
      totalSupply: number;
      numOwners: number;
      floorPrice: number;
      totalVolume: number;
    };
  };
}

export async function getCollectionAssets() {
  try {
    // Get NFTs for the contract address
    const nfts = await alchemy.nft.getNftsForContract(
      "0xf5fbaf0195a78f2d2861c0be78d3a65acfcb16e3", // Replace with actual contract address
      {
        pageSize: 50,
        omitMetadata: false,
      }
    );

    return nfts.nfts.map((nft: any) => ({
      id: parseInt(nft.tokenId),
      tokenId: nft.tokenId,
      imageUrl: nft.media[0]?.gateway || nft.media[0]?.raw || "",
      name: nft.title || `#${nft.tokenId}`,
      description: nft.description || "",
      permalink: `https://opensea.io/assets/ethereum/${nft.contract.address}/${nft.tokenId}`,
      collection: {
        name: nft.contract.name || "",
        description: nft.contract.description || "",
        imageUrl: nft.contract.openSea?.imageUrl || "",
        externalUrl: nft.contract.openSea?.externalUrl || "",
        stats: {
          totalSupply: nft.contract.totalSupply || 0,
          numOwners: nft.contract.numOwners || 0,
          floorPrice: nft.contract.openSea?.floorPrice || 0,
          totalVolume: nft.contract.openSea?.totalVolume || 0,
        },
      },
    }));
  } catch (error) {
    console.error("Error fetching collection data:", error);
    return [];
  }
}

export async function getCollectionStats() {
  try {
    // Get contract metadata
    const contractMetadata = await alchemy.nft.getContractMetadata(
      "0xf5fbaf0195a78f2d2861c0be78d3a65acfcb16e3" // Using the same contract address as getCollectionAssets
    );

    return {
      total_supply: contractMetadata.totalSupply || 530,
      floor_price: contractMetadata.openSea?.floorPrice || 0,
    };
  } catch (error) {
    console.error("Error fetching collection stats:", error);
    return null;
  }
} 