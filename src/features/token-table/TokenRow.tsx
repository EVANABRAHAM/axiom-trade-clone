'use client';

import React, { useEffect, useRef, useState } from 'react';
import { TableRow, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Token } from '@/lib/features/token-table/tokenSlice';
import { cn } from '@/lib/utils';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface TokenRowProps {
    token: Token;
    onSelect?: (token: Token) => void;
}

export const TokenRow = React.memo(({ token, onSelect }: TokenRowProps) => {
    const prevPriceRef = useRef(token.price);
    const [flashState, setFlashState] = useState<'up' | 'down' | null>(null);

    useEffect(() => {
        if (token.price > prevPriceRef.current) {
            setFlashState('up');
        } else if (token.price < prevPriceRef.current) {
            setFlashState('down');
        }
        prevPriceRef.current = token.price;

        const timer = setTimeout(() => {
            setFlashState(null);
        }, 1000); // Animation duration

        return () => clearTimeout(timer);
    }, [token.price]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
    };

    const formatCompact = (val: number) => {
        return new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(val);
    };

    return (
        <TableRow
            className={cn(
                "transition-colors duration-1000 border-border/40 cursor-pointer h-16 hover:bg-muted/30",
                flashState === 'up' && "animate-flash-green",
                flashState === 'down' && "animate-flash-red"
            )}
            onClick={() => onSelect?.(token)}
        >
            <TableCell className="font-medium">
                <div className="flex flex-col">
                    <span className="flex items-center gap-2">
                        {token.name}
                        {token.isNew && <Badge variant="new" className="text-[10px] h-4 px-1">NEW</Badge>}
                    </span>
                    <span className="text-xs text-muted-foreground">{token.symbol}</span>
                </div>
            </TableCell>
            <TableCell className="text-right font-mono text-base">
                {formatCurrency(token.price)}
            </TableCell>
            <TableCell className="text-right">
                <div className={cn(
                    "flex items-center justify-end gap-1 font-medium",
                    token.change24h > 0 ? "text-up" : "text-down"
                )}>
                    {token.change24h > 0 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                    {Math.abs(token.change24h).toFixed(2)}%
                </div>
            </TableCell>
            <TableCell className="text-right text-muted-foreground hidden md:table-cell">
                ${formatCompact(token.volume24h)}
            </TableCell>
            <TableCell className="text-right text-muted-foreground hidden lg:table-cell">
                ${formatCompact(token.marketCap)}
            </TableCell>
            <TableCell className="text-right text-muted-foreground hidden xl:table-cell">
                ${formatCompact(token.liquidity)}
            </TableCell>
        </TableRow>
    );
});

TokenRow.displayName = "TokenRow";
