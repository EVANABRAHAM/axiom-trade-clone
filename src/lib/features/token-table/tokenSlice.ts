import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Token {
    id: string;
    symbol: string;
    name: string;
    price: number;
    change24h: number;
    volume24h: number;
    marketCap: number;
    liquidity: number;
    isNew: boolean;
    isMigrated: boolean;
    launchDate: string;
}

interface TokenState {
    items: Token[];
    sortKey: keyof Token | null;
    sortDirection: 'asc' | 'desc';
    searchQuery: string;
    filter: 'all' | 'new' | 'migrated';
}

const initialState: TokenState = {
    items: [],
    sortKey: null,
    sortDirection: 'desc',
    searchQuery: '',
    filter: 'all',
};

const tokenSlice = createSlice({
    name: 'tokens',
    initialState,
    reducers: {
        setTokens: (state, action: PayloadAction<Token[]>) => {
            state.items = action.payload;
        },
        updateTokenPrice: (state, action: PayloadAction<{ id: string; price: number }>) => {
            const token = state.items.find(t => t.id === action.payload.id);
            if (token) {
                token.price = action.payload.price;
            }
        },
        setSort: (state, action: PayloadAction<keyof Token>) => {
            if (state.sortKey === action.payload) {
                state.sortDirection = state.sortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                state.sortKey = action.payload;
                state.sortDirection = 'desc';
            }
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        setFilter: (state, action: PayloadAction<TokenState['filter']>) => {
            state.filter = action.payload;
        }
    },
});

export const { setTokens, updateTokenPrice, setSort, setSearchQuery, setFilter } = tokenSlice.actions;
export default tokenSlice.reducer;
