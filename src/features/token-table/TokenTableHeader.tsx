import React from 'react';
import { TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setSort, Token } from '@/lib/features/token-table/tokenSlice';
import { ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const TokenTableHeader = () => {
    const dispatch = useAppDispatch();
    const { sortKey, sortDirection } = useAppSelector(state => state.tokens);

    const handleSort = (key: keyof Token) => {
        dispatch(setSort(key));
    };

    return (
        <TableHeader>
            <TableRow className="hover:bg-transparent border-primaryStroke">
                <TableHead className="w-[300px]">Token</TableHead>
                <TableHead className="text-right">
                    <Button variant="ghost" size="sm" onClick={() => handleSort('price')} className="hover:bg-transparent hover:text-white">
                        Price
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                </TableHead>
                <TableHead className="text-right">
                    <Button variant="ghost" size="sm" onClick={() => handleSort('change24h')} className="hover:bg-transparent hover:text-white">
                        24h %
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                </TableHead>
                <TableHead className="text-right hidden md:table-cell">
                    <Button variant="ghost" size="sm" onClick={() => handleSort('volume24h')} className="hover:bg-transparent hover:text-white">
                        Volume
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                </TableHead>
                <TableHead className="text-right hidden lg:table-cell">
                    <Button variant="ghost" size="sm" onClick={() => handleSort('marketCap')} className="hover:bg-transparent hover:text-white">
                        Market Cap
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                </TableHead>
                <TableHead className="text-right hidden xl:table-cell">
                    <Button variant="ghost" size="sm" onClick={() => handleSort('liquidity')} className="hover:bg-transparent hover:text-white">
                        Liquidity
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                </TableHead>
            </TableRow>
        </TableHeader>
    );
};
