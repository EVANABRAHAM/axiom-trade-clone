'use client';

import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { Table, TableBody, TableCaption, TableRow } from '@/components/ui/table';
import { TokenTableHeader } from './TokenTableHeader';
import { TokenRow } from './TokenRow';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setTokens, Token } from '@/lib/features/token-table/tokenSlice';
import { generateMockTokens } from '@/lib/mock-data';
import { useRealTokenSocket } from '@/hooks/useTokenSocket';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Settings, Info, Search } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export const TokenTable = () => {
    const dispatch = useAppDispatch();
    const { items, sortKey, sortDirection, filter, searchQuery } = useAppSelector(state => state.tokens);
    const [activeTab, setActiveTab] = useState<'all' | 'new' | 'migrated'>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedToken, setSelectedToken] = useState<Token | null>(null);
    const [socketEnabled, setSocketEnabled] = useState(true);
    const [loading, setLoading] = useState(true);

    const handleSelectToken = useCallback((token: Token) => {
        setSelectedToken(token);
    }, []);

    // Load initial data
    useEffect(() => {
        // Simulate network delay
        const timer = setTimeout(() => {
            const data = generateMockTokens(50);
            dispatch(setTokens(data));
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, [dispatch]);

    // Enable socket
    useRealTokenSocket(socketEnabled);

    const filteredItems = useMemo(() => {
        let filtered = [...items];

        if (activeTab === 'new') {
            filtered = filtered.filter(t => t.isNew);
        } else if (activeTab === 'migrated') {
            filtered = filtered.filter(t => t.isMigrated);
        }

        if (searchTerm) {
            filtered = filtered.filter(t => t.name.toLowerCase().includes(searchTerm.toLowerCase()) || t.symbol.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        if (sortKey) {
            filtered.sort((a, b) => {
                const aVal = a[sortKey];
                const bVal = b[sortKey];

                if (typeof aVal === 'string' && typeof bVal === 'string') {
                    return sortDirection === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
                }

                if (typeof aVal === 'number' && typeof bVal === 'number') {
                    return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
                }

                return 0;
            });
        }

        return filtered;
    }, [items, sortKey, sortDirection, activeTab, searchTerm]);

    return (
        <Card className="w-full bg-card/50 border-border/50 backdrop-blur-sm">
            <CardHeader className="px-6 py-4 border-b border-border/40">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <Button
                            variant={activeTab === 'all' ? 'secondary' : 'ghost'}
                            onClick={() => setActiveTab('all')}
                            className="h-8 text-xs font-semibold"
                        >
                            All Tokens
                        </Button>
                        <Button
                            variant={activeTab === 'new' ? 'secondary' : 'ghost'}
                            onClick={() => setActiveTab('new')}
                            className="h-8 text-xs font-semibold"
                        >
                            <span className="mr-2 h-2 w-2 rounded-full bg-blue-500" />
                            New Pairs
                        </Button>
                        <Button
                            variant={activeTab === 'migrated' ? 'secondary' : 'ghost'}
                            onClick={() => setActiveTab('migrated')}
                            className="h-8 text-xs font-semibold"
                        >
                            <span className="mr-2 h-2 w-2 rounded-full bg-purple-500" />
                            Final Stretch
                        </Button>
                    </div>

                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <input
                            placeholder="Search tokens..."
                            className="flex h-9 w-full rounded-md border border-input bg-background/50 px-3 py-1 pl-8 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" size="icon" className="h-9 w-9" aria-label="Table Settings">
                                <Settings className="h-4 w-4" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-56">
                            <div className="grid gap-4">
                                <h4 className="font-medium leading-none">Settings</h4>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground" id="live-updates-label">Live Updates</span>
                                    {/* Accessible Toggle Button */}
                                    <button
                                        role="switch"
                                        aria-checked={socketEnabled}
                                        aria-labelledby="live-updates-label"
                                        className={cn(
                                            "w-10 h-6 rounded-full p-1 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                                            socketEnabled ? "bg-primary" : "bg-muted"
                                        )}
                                        onClick={() => setSocketEnabled(!socketEnabled)}
                                    >
                                        <div className={cn("w-4 h-4 rounded-full bg-white shadow-sm transition-transform", socketEnabled ? "translate-x-4" : "translate-x-0")} />
                                    </button>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <Table>
                    <TooltipProvider>
                        <TokenTableHeader />
                    </TooltipProvider>
                    <TableBody>
                        {loading ? (
                            Array.from({ length: 10 }).map((_, i) => (
                                <TableRow key={i} className="h-16">
                                    <td className="p-4"><Skeleton className="h-8 w-32" /></td>
                                    <td className="p-4"><Skeleton className="h-4 w-20 ml-auto" /></td>
                                    <td className="p-4"><Skeleton className="h-4 w-16 ml-auto" /></td>
                                    <td className="hidden md:table-cell p-4"><Skeleton className="h-4 w-24 ml-auto" /></td>
                                    <td className="hidden lg:table-cell p-4"><Skeleton className="h-4 w-24 ml-auto" /></td>
                                    <td className="hidden xl:table-cell p-4"><Skeleton className="h-4 w-24 ml-auto" /></td>
                                </TableRow>
                            ))
                        ) : (
                            filteredItems.map(token => (
                                <TokenRow key={token.id} token={token} onSelect={handleSelectToken} />
                            ))
                        )}
                        {!loading && filteredItems.length === 0 && (
                            <TableRow>
                                <td colSpan={6} className="h-24 text-center text-muted-foreground">
                                    No tokens found.
                                </td>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>

            <Dialog open={!!selectedToken} onOpenChange={(open) => !open && setSelectedToken(null)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            {selectedToken?.name}
                            <span className="text-muted-foreground font-normal">({selectedToken?.symbol})</span>
                        </DialogTitle>
                        <DialogDescription>
                            Detailed statistics and trading information.
                        </DialogDescription>
                    </DialogHeader>
                    {selectedToken && (
                        <div className="grid grid-cols-2 gap-4 py-4">
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">Price</p>
                                <p className="text-2xl font-bold">${selectedToken.price.toFixed(4)}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">24h Change</p>
                                <p className={cn("text-xl font-bold", selectedToken.change24h > 0 ? "text-up" : "text-down")}>
                                    {selectedToken.change24h > 0 ? "+" : ""}{selectedToken.change24h.toFixed(2)}%
                                </p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">Volume (24h)</p>
                                <p className="text-lg font-mono">${selectedToken.volume24h.toLocaleString()}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">Market Cap</p>
                                <p className="text-lg font-mono">${selectedToken.marketCap.toLocaleString()}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">Liquidity</p>
                                <p className="text-lg font-mono">${selectedToken.liquidity.toLocaleString()}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">Launched</p>
                                <p className="text-base">{new Date(selectedToken.launchDate).toLocaleDateString()}</p>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </Card>
    );
};
