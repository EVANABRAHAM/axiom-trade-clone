'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@/lib/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Providers({ children }: { children: React.ReactNode }) {
    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore();
    }

    const queryClientRef = useRef<QueryClient>();
    if (!queryClientRef.current) {
        queryClientRef.current = new QueryClient();
    }

    return (
        <Provider store={storeRef.current}>
            <QueryClientProvider client={queryClientRef.current}>
                {children}
            </QueryClientProvider>
        </Provider>
    );
}
