import React from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import { Token } from '@/lib/features/token-table/tokenSlice';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { formatCompactNumber } from '@/lib/utils';

interface TokenRowProps {
    token: Token;
    onSelect: (token: Token) => void;
}

export const TokenRow = ({ token, onSelect }: TokenRowProps) => {
    return (
        <TableRow
            className="cursor-pointer hover:bg-white/5 border-primaryStroke group transition-colors"
            onClick={() => onSelect(token)}
        >
            <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white
                            ${token.isNew ? 'bg-primaryGreen/20 text-primaryGreen border border-primaryGreen/50' :
                                token.isMigrated ? 'bg-primaryBlue/20 text-primaryBlue border border-primaryBlue/50' :
                                    'bg-zinc-800 border border-zinc-700'}`}
                        >
                            {token.symbol.substring(0, 2)}
                        </div>
                        {token.isNew && <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primaryGreen opacity-75"></span><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primaryGreen"></span></span>}
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-white">{token.symbol}</span>
                            {token.isMigrated && <Badge variant="secondary" className="text-[10px] h-4 px-1 bg-primaryBlue/10 text-primaryBlue border-primaryBlue/20">MIGRATED</Badge>}
                        </div>
                        <div className="text-xs text-textSecondary">{token.name}</div>
                    </div>
                </div>
            </TableCell>
            <TableCell className="text-right font-mono text-white">
                ${token.price.toFixed(6)}
            </TableCell>
            <TableCell className={cn("text-right font-mono font-medium", token.change24h >= 0 ? "text-primaryGreen" : "text-primaryRed")}>
                {token.change24h > 0 ? '+' : ''}{token.change24h.toFixed(2)}%
            </TableCell>

            <TableCell className="text-right hidden md:table-cell text-textSecondary font-mono">
                ${formatCompactNumber(token.volume24h)}
            </TableCell>
            <TableCell className="text-right hidden lg:table-cell text-textSecondary font-mono">
                ${formatCompactNumber(token.marketCap)}
            </TableCell>
            <TableCell className="text-right hidden xl:table-cell text-textSecondary font-mono">
                ${formatCompactNumber(token.liquidity)}
            </TableCell>
        </TableRow>
    );
};
