'use client';

import { TableHead, TableHeader as UITableHeader, TableRow } from '@/components/ui/table';
import { ArrowDown, ArrowUp, ChevronsUpDown, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Token } from '@/lib/features/token-table/tokenSlice';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setSort } from '@/lib/features/token-table/tokenSlice';

export const TokenTableHeader = () => {
    const dispatch = useAppDispatch();
    const { sortKey, sortDirection } = useAppSelector(state => state.tokens);

    const handleSort = (key: keyof Token) => {
        dispatch(setSort(key));
    };

    const SortIcon = ({ column }: { column: keyof Token }) => {
        if (sortKey !== column) return <ChevronsUpDown className="ml-1 h-3 w-3" />;
        return sortDirection === 'asc' ? <ArrowUp className="ml-1 h-3 w-3" /> : <ArrowDown className="ml-1 h-3 w-3" />;
    };

    return (
        <UITableHeader>
            <TableRow className="hover:bg-transparent border-border/50">
                <TableHead
                    className="cursor-pointer text-xs font-bold uppercase tracking-wider text-muted-foreground w-[200px]"
                    onClick={() => handleSort('name')}
                >
                    <div className="flex items-center">
                        Token
                        <SortIcon column="name" />
                    </div>
                </TableHead>
                <TableHead
                    className="cursor-pointer text-right text-xs font-bold uppercase tracking-wider text-muted-foreground"
                    onClick={() => handleSort('price')}
                >
                    <div className="flex items-center justify-end">
                        Price
                        <SortIcon column="price" />
                    </div>
                </TableHead>
                <TableHead
                    className="cursor-pointer text-right text-xs font-bold uppercase tracking-wider text-muted-foreground"
                    onClick={() => handleSort('change24h')}
                >
                    <div className="flex items-center justify-end">
                        24h
                        <SortIcon column="change24h" />
                    </div>
                </TableHead>
                <TableHead
                    className="cursor-pointer text-right text-xs font-bold uppercase tracking-wider text-muted-foreground hidden md:table-cell"
                    onClick={() => handleSort('volume24h')}
                >
                    <div className="flex items-center justify-end">
                        Volume
                        <SortIcon column="volume24h" />
                    </div>
                </TableHead>
                <TableHead
                    className="cursor-pointer text-right text-xs font-bold uppercase tracking-wider text-muted-foreground hidden lg:table-cell"
                    onClick={() => handleSort('marketCap')}
                >
                    <div className="flex items-center justify-end">
                        Mkt Cap
                        <SortIcon column="marketCap" />
                    </div>
                </TableHead>
                <TableHead
                    className="cursor-pointer text-right text-xs font-bold uppercase tracking-wider text-muted-foreground hidden xl:table-cell"
                    onClick={() => handleSort('liquidity')}
                >
                    <div className="flex items-center justify-end gap-1">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <span className="flex items-center gap-1">Liquidity <Info className="h-3 w-3 text-muted-foreground/50" /></span>
                            </TooltipTrigger>
                            <TooltipContent>Total liquidity in the pool</TooltipContent>
                        </Tooltip>
                        <SortIcon column="liquidity" />
                    </div>
                </TableHead>
            </TableRow>
        </UITableHeader>
    );
};
