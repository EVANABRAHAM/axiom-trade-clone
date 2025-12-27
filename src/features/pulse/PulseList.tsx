import React from 'react';
import {
    Zap,
    SlidersHorizontal,
    EyeOff,
    ChefHat,
    AtSign,
    Flame,
    User,
    Globe,
    Search,
    Users,
    Copy,
    Trophy,
    Crown,
    Camera,
    Ghost,
    Crosshair,
    Box,
    Eye,
    UserCheck,
    PenTool
} from 'lucide-react';

interface TokenData {
    name: string;
    symbol: string;
    time: string;
    mc: string;
    vol: string;
    tx: number;
    price: string;
    img: string;
    address: string;
    status: 'fire' | 'normal';
    views: number;
    holders: number;
    devHeld: number;
    top10: number;
    blueChip?: boolean;
}

const TokenCard = ({ data }: { data: TokenData }) => {
    return (
        <div className="border-b border-primaryStroke/50 flex flex-col w-full justify-start items-center cursor-pointer relative overflow-hidden hover:bg-primaryStroke/50 transition-colors h-[116px] min-h-[116px] group">
            {/* Hover Actions */}
            <button className="absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-textTertiary hover:text-primaryBlueHover w-[24px] h-[24px] flex items-center justify-center rounded-[4px] bg-backgroundTertiary border border-secondaryStroke/50 top-[6px] left-[6px]">
                <EyeOff className="w-[14px] h-[14px]" />
            </button>
            <button className="absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-backgroundTertiary text-textTertiary hover:text-primaryBlueHover w-[24px] h-[24px] flex items-center justify-center rounded-[4px] border border-secondaryStroke/50 top-[32px] left-[6px]">
                <ChefHat className="w-[12px] h-[12px]" />
            </button>
            <button className="absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-backgroundTertiary text-textTertiary hover:text-primaryBlueHover w-[24px] h-[24px] flex items-center justify-center rounded-[4px] border border-secondaryStroke/50 top-[58px] left-[6px]">
                <AtSign className="w-[12px] h-[12px]" />
            </button>

            {/* Quick Buy Button (Hover) */}
            <div className="absolute right-[16px] bottom-[16px] z-20 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-primaryBlue hover:bg-primaryBlueHover text-[#090909] flex flex-row gap-[4px] justify-center items-center rounded-full h-[24px] px-[6px]">
                    <Zap className="w-[16px] h-[16px] fill-current" />
                    <span className="text-[12px] font-bold">0 SOL</span>
                </button>
            </div>

            {/* Card Content */}
            <div className="w-full h-full flex flex-row p-[12px] gap-[12px]">
                {/* Left Image Section */}
                <div className="flex flex-col items-center gap-[4px]">
                    <div className="relative w-[74px] h-[74px] flex justify-center items-center">
                        {/* Ring/Decorations would go here */}
                        <div className="w-[68px] h-[68px] relative rounded-[1px] overflow-hidden">
                            <img src={data.img} alt={data.name} className="w-full h-full object-cover" />
                            <button className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Camera className="text-white w-[24px] h-[24px]" />
                            </button>
                        </div>
                        {/* Corner Icon */}
                        <div className="absolute bottom-[-4px] right-[-4px] w-[16px] h-[16px] bg-background rounded-full flex items-center justify-center">
                            <div className="w-[14px] h-[14px] bg-[#20222A] rounded-full flex items-center justify-center">
                                <img src="https://axiom.trade/images/pump.svg" className="w-[10px] h-[10px]" alt="Pump" />
                            </div>
                        </div>
                    </div>
                    <button className="text-textTertiary text-[12px] font-medium hover:text-primaryBlueHover gap-1 flex items-center max-w-[74px] truncate">
                        {data.address.slice(0, 4)}...{data.address.slice(-4)}
                    </button>
                </div>

                {/* Right Content Section */}
                <div className="flex-1 flex flex-col justify-between overflow-hidden">
                    {/* Top Row: Name and Stats */}
                    <div className="flex flex-col w-full gap-[2px]">
                        {/* Name Row */}
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2 overflow-hidden">
                                <span className="text-textPrimary text-[16px] font-medium truncate">{data.name}</span>
                                <span className="flex items-center gap-1 text-textTertiary text-[14px] hover:text-primaryBlueHover cursor-pointer truncate">
                                    {data.symbol} <Copy className="w-[12px] h-[12px]" />
                                </span>
                            </div>

                            {/* Stats (MC/Vol) */}
                            <div className="flex flex-col items-end gap-[2px]">
                                <div className="flex items-center gap-[4px] text-[12px]">
                                    <span className="text-textTertiary font-medium">MC</span>
                                    <span className="text-[16px] font-medium text-primaryLightBlue">{data.mc}</span>
                                </div>
                                <div className="flex items-center gap-[4px] text-[12px]">
                                    <span className="text-textTertiary font-medium">V</span>
                                    <span className="text-[16px] font-medium text-textPrimary">{data.vol}</span>
                                </div>
                            </div>
                        </div>

                        {/* Time/Links Row */}
                        <div className="flex flex-row justify-between items-center w-full mt-1">
                            <div className="flex items-center gap-3">
                                <span className="text-primaryGreen text-[14px] font-medium">{data.time}</span>
                                {data.status === 'fire' && (
                                    <div className="flex items-center gap-1 px-1 rounded bg-[#E33E5D]/10 border border-[#E33E5D]/50 text-[#E33E5D]">
                                        <Flame className="w-[10px] h-[10px]" />
                                        <span className="text-[10px] font-medium">HOT</span>
                                    </div>
                                )}
                            </div>

                            {/* Socials */}
                            <div className="flex items-center gap-3 text-textSecondary">
                                <User className="w-[14px] h-[14px] hover:text-primaryBlueHover cursor-pointer" />
                                <Globe className="w-[14px] h-[14px] hover:text-primaryBlueHover cursor-pointer" />
                                <Search className="w-[14px] h-[14px] hover:text-primaryBlueHover cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    {/* Middle Metrics Row */}
                    <div className="flex items-center gap-4 text-[12px] text-textTertiary mt-auto">
                        <div className="flex items-center gap-1">
                            <Users className="w-[14px] h-[14px]" />
                            <span className="text-white">{data.holders}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Trophy className="w-[14px] h-[14px]" />
                            <span className="text-white">{data.top10}</span>
                        </div>
                        {data.blueChip && (
                            <div className="flex items-center gap-1">
                                <Crown className="w-[14px] h-[14px] text-primaryYellow" />
                            </div>
                        )}
                        <div className="flex items-center gap-1 ml-auto">
                            <Eye className="w-[14px] h-[14px]" />
                            <span className="text-white">{data.views}</span>
                        </div>
                    </div>

                    {/* Bottom Bar Metrics */}
                    <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1 px-2 h-[20px] rounded-full border border-primaryStroke/50 bg-backgroundSecondary text-[10px] text-primaryGreen">
                            <UserCheck className="w-[12px] h-[12px]" />
                            <span>0%</span>
                        </div>
                        <div className="flex items-center gap-1 px-2 h-[20px] rounded-full border border-primaryStroke/50 bg-backgroundSecondary text-[10px] text-primaryGreen">
                            <ChefHat className="w-[12px] h-[12px]" />
                            <span>0%</span>
                        </div>
                        <div className="flex items-center gap-1 px-2 h-[20px] rounded-full border border-primaryStroke/50 bg-backgroundSecondary text-[10px] text-primaryGreen">
                            <Crosshair className="w-[12px] h-[12px]" />
                            <span>0%</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export function PulseBoard() {
    const baseNewPairs = [
        { name: "snowfall", symbol: "snowfall", time: "4s", mc: "$3.44K", vol: "$6", tx: 2, price: "0.0033", img: "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/FqhcZBFfm3y7YztsdP3eW7BfBrK7EWkH84D3qgkGpump.webp", address: "Fqhc...pump", status: 'fire', views: 7, holders: 1, top10: 0 },
        { name: "FLUFFY", symbol: "Fluffy", time: "8s", mc: "$4.75K", vol: "$2K", tx: 13, price: "0.047", img: "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/AbP4jhtBj4FRRMk3yJjqpVewzKiN3dqfg5zMmpWrSaMS.webp", address: "AbP4...SaMS", status: 'normal', views: 7, holders: 7, top10: 0, blueChip: true },
        { name: "The Rich Whale", symbol: "RichWhale", time: "25s", mc: "$5.72K", vol: "$4K", tx: 78, price: "0.043", img: "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/BhQ7apsuVa4PrNGFNCmJ1VoMWD5o4QQGRfnZqtsQpump.webp", address: "BhQ7...pump", status: 'normal', views: 1, holders: 1, top10: 0 },
    ] as TokenData[];

    const newPairs = [...baseNewPairs, ...baseNewPairs, ...baseNewPairs, ...baseNewPairs, ...baseNewPairs, ...baseNewPairs]; // Duplicate for scrolling

    const baseFinalStretch = [
        { name: "Metal Index 67", symbol: "METAL67", time: "26s", mc: "$1.51K", vol: "$278", tx: 24, price: "0.011", img: "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/FSEKNDbAkkEkkXqDkmQ9wK4PfWZSyVSJNzF8TgJCpump.webp", address: "FSEK...pump", status: 'normal', views: 23, holders: 26, top10: 0 },
        { name: "Ethics", symbol: "Ethics", time: "1d", mc: "$10.3K", vol: "$3K", tx: 230, price: "0.063", img: "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/BfeNrWVgLbU85RTrz4KrmgiKkjYUQMKUBsM65bbFpump.webp", address: "BfeN...pump", status: 'normal', views: 5, holders: 5, top10: 0 },
        { name: "Pi OpenMainnet 2026", symbol: "PI2026", time: "8m", mc: "$304K", vol: "$15K", tx: 338, price: "0.02", img: "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/4ecVfzEiv94LnpGVNnaz1TEWKKBYancjMUjs6XdCtqZo.webp", address: "4ecV...tqZo", status: 'normal', views: 2, holders: 143, top10: 0 },
    ] as TokenData[];

    const finalStretch = [...baseFinalStretch, ...baseFinalStretch, ...baseFinalStretch, ...baseFinalStretch, ...baseFinalStretch, ...baseFinalStretch];

    const baseMigrated = [
        { name: "PiNetwork", symbol: "PiNetwork", time: "33s", mc: "$1.23M", vol: "$25K", tx: 456, price: "0.033", img: "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/JA2vJRD424trSr3ek3QZbKtN32tmxath4LHMWNdJcwL1.webp", address: "JA2v...cwL1", status: 'normal', views: 3, holders: 38, top10: 0 },
        { name: "Weixin_WeChat", symbol: "WeChat", time: "3m", mc: "$60.5K", vol: "$13K", tx: 90, price: "0.021", img: "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/2djbxayLVszszpH9QcH5xgTEYzyqoZNRdHEGUNPLebAu.webp", address: "2djb...ebAu", status: 'normal', views: 3, holders: 68, top10: 0 },
        { name: "Candy", symbol: "Candy", time: "1m", mc: "$725K", vol: "$18K", tx: 116, price: "0.022", img: "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/B8SkUEhbiyxKqGz8p9Pw1mmaCTxUwGPiyRYSWuG6oWQK.webp", address: "B8Sk...oWQK", status: 'normal', views: 1, holders: 68, top10: 0 },
        { name: "Biden", symbol: "Biden", time: "3m", mc: "$109K", vol: "$18K", tx: 236, price: "0.023", img: "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/56tG4uXGG8CxHQVHLWrSMVoVZPp2Uw2hvUALjQeCEqYW.webp", address: "56tG...EqYW", status: 'normal', views: 1, holders: 452, top10: 0 },
        { name: "HEIST", symbol: "HEIST", time: "3m", mc: "$86.3K", vol: "$16K", tx: 42, price: "0.024", img: "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/3YDajcCnKboSJth5kuqAtZPBXR7dTqgn7S3eDzoDAdPU.webp", address: "3YDa...AdPU", status: 'normal', views: 1, holders: 103, top10: 0 },
    ] as TokenData[];

    const migrated = [...baseMigrated, ...baseMigrated, ...baseMigrated, ...baseMigrated, ...baseMigrated];

    return (
        <div className="flex-1 border-primaryStroke bg-backgroundSecondary border-[1px] flex flex-row w-full justify-start items-start rounded-[8px] sm:rounded-[4px] overflow-hidden h-full">
            {/* New Pairs Column */}
            <div className="flex flex-1 h-full bg-backgroundSecondary overflow-hidden border-r border-primaryStroke">
                <div className="flex flex-col h-full w-full">
                    {/* Header */}
                    <div className="sticky top-0 z-30 flex flex-row w-full gap-[12px] min-h-[48px] justify-between items-center px-[12px] border-b border-primaryStroke bg-backgroundSecondary">
                        <span className="text-textPrimary text-[16px] font-medium">New Pairs</span>
                        <div className="flex items-center gap-2">
                            <div className="hidden lg:flex items-center border border-primaryStroke rounded-full h-[28px] pl-1 pr-1 bg-background text-[12px]">
                                <Zap className="w-3 h-3 text-textTertiary mx-1" />
                                <input type="text" placeholder="0.0" className="w-[30px] bg-transparent outline-none text-textPrimary text-center" />
                                <img src="https://cryptologos.cc/logos/solana-sol-logo.png?v=035" className="w-3 h-3 mx-1" alt="SOL" />
                                <div className="flex gap-1 border-l border-primaryStroke pl-1">
                                    <button className="px-1 hover:bg-primaryStroke/50 rounded text-primaryBlue font-medium">P1</button>
                                    <button className="px-1 hover:bg-primaryStroke/50 rounded text-textSecondary font-medium">P2</button>
                                    <button className="px-1 hover:bg-primaryStroke/50 rounded text-textSecondary font-medium">P3</button>
                                </div>
                            </div>
                            <button className="p-1 hover:bg-primaryStroke/30 rounded">
                                <SlidersHorizontal className="w-4 h-4 text-textSecondary" />
                            </button>
                        </div>
                    </div>

                    {/* List */}
                    <div className="flex-1 overflow-y-auto w-full">
                        {newPairs.map((token, i) => (
                            <TokenCard key={i} data={token} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Final Stretch Column */}
            <div className="flex flex-1 h-full bg-backgroundSecondary overflow-hidden border-r border-primaryStroke">
                <div className="flex flex-col h-full w-full">
                    {/* Header */}
                    <div className="sticky top-0 z-30 flex flex-row w-full gap-[12px] min-h-[48px] justify-between items-center px-[12px] border-b border-primaryStroke bg-backgroundSecondary">
                        <span className="text-textPrimary text-[16px] font-medium">Final Stretch</span>
                        <div className="flex items-center gap-2">
                            {/* Controls similar to New Pairs can go here if needed, specifically for Final Stretch */}
                            <div className="hidden lg:flex items-center border border-primaryStroke rounded-full h-[28px] pl-1 pr-1 bg-background text-[12px]">
                                <Zap className="w-3 h-3 text-textTertiary mx-1" />
                                <input type="text" placeholder="0.0" className="w-[30px] bg-transparent outline-none text-textPrimary text-center" />
                                <img src="https://cryptologos.cc/logos/solana-sol-logo.png?v=035" className="w-3 h-3 mx-1" alt="SOL" />
                                <div className="flex gap-1 border-l border-primaryStroke pl-1">
                                    <button className="px-1 hover:bg-primaryStroke/50 rounded text-textSecondary font-medium">P1</button>
                                    <button className="px-1 hover:bg-primaryStroke/50 rounded text-textSecondary font-medium">P2</button>
                                    <button className="px-1 hover:bg-primaryStroke/50 rounded text-primaryBlue font-medium">P3</button>
                                </div>
                            </div>
                            <button className="p-1 hover:bg-primaryStroke/30 rounded">
                                <SlidersHorizontal className="w-4 h-4 text-textSecondary" />
                            </button>
                        </div>
                    </div>

                    {/* List */}
                    <div className="flex-1 overflow-y-auto w-full">
                        {finalStretch.map((token, i) => (
                            <TokenCard key={i} data={token} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Migrated Column */}
            <div className="flex flex-1 h-full bg-backgroundSecondary overflow-hidden">
                <div className="flex flex-col h-full w-full">
                    {/* Header */}
                    <div className="sticky top-0 z-30 flex flex-row w-full gap-[12px] min-h-[48px] justify-between items-center px-[12px] border-b border-primaryStroke bg-backgroundSecondary">
                        <span className="text-textPrimary text-[16px] font-medium flex-1">Migrated</span>
                        <div className="flex items-center gap-2">
                            <div className="hidden lg:flex items-center border border-primaryStroke rounded-full h-[28px] pl-1 pr-1 bg-background text-[12px]">
                                <Zap className="w-3 h-3 text-textTertiary mx-1" />
                                <input type="text" placeholder="0.0" className="w-[30px] bg-transparent outline-none text-textPrimary text-center" />
                                <img src="https://cryptologos.cc/logos/solana-sol-logo.png?v=035" className="w-3 h-3 mx-1" alt="SOL" />
                                <div className="flex gap-1 border-l border-primaryStroke pl-1">
                                    <button className="px-1 hover:bg-primaryStroke/50 rounded text-textSecondary font-medium">P1</button>
                                    <button className="px-1 hover:bg-primaryStroke/50 rounded text-primaryBlue font-medium">P2</button>
                                    <button className="px-1 hover:bg-primaryStroke/50 rounded text-textSecondary font-medium">P3</button>
                                </div>
                            </div>
                            <button className="p-1 hover:bg-primaryStroke/30 rounded">
                                <SlidersHorizontal className="w-4 h-4 text-textSecondary" />
                            </button>
                        </div>
                    </div>

                    {/* List */}
                    <div className="flex-1 overflow-y-auto w-full">
                        {migrated.map((token, i) => (
                            <TokenCard key={i} data={token} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
