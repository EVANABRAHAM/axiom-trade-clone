import { Token } from "./features/token-table/tokenSlice";

const TOKENS: Partial<Token>[] = [
    { symbol: "BTC", name: "Bitcoin" },
    { symbol: "ETH", name: "Ethereum" },
    { symbol: "SOL", name: "Solana" },
    { symbol: "XRP", name: "Ripple" },
    { symbol: "ADA", name: "Cardano" },
    { symbol: "AVAX", name: "Avalanche" },
    { symbol: "DOGE", name: "Dogecoin" },
    { symbol: "DOT", name: "Polkadot" },
    { symbol: "LINK", name: "Chainlink" },
    { symbol: "MATIC", name: "Polygon" },
    { symbol: "UNI", name: "Uniswap" },
    { symbol: "ATOM", name: "Cosmos" },
    { symbol: "LTC", name: "Litecoin" },
    { symbol: "NEAR", name: "Near Protocol" },
    { symbol: "ALGO", name: "Algorand" },
    { symbol: "ICP", name: "Internet Computer" },
    { symbol: "FIL", name: "Filecoin" },
    { symbol: "APT", name: "Aptos" },
    { symbol: "ARB", name: "Arbitrum" },
    { symbol: "OP", name: "Optimism" },
];

export const generateMockTokens = (count: number = 20): Token[] => {
    return Array.from({ length: count }).map((_, i) => {
        const base = TOKENS[i % TOKENS.length];
        const price = Math.random() * 1000 + 1;
        const isNew = Math.random() > 0.8;
        const isMigrated = Math.random() > 0.7;

        return {
            id: `token-${i}`,
            symbol: base.symbol || `TKN${i}`,
            name: base.name || `Token ${i}`,
            price,
            change24h: (Math.random() * 20) - 10, // -10% to +10%
            volume24h: Math.floor(Math.random() * 10000000),
            marketCap: Math.floor(Math.random() * 1000000000),
            liquidity: Math.floor(Math.random() * 500000),
            isNew,
            isMigrated,
            launchDate: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
        };
    });
};
