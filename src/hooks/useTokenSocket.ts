import { useEffect, useRef } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { updateTokenPrice } from '@/lib/features/token-table/tokenSlice';

export const useTokenSocket = (tokenIds: string[], enabled: boolean = true) => {
    const dispatch = useAppDispatch();
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (!enabled || tokenIds.length === 0) return;

        intervalRef.current = setInterval(() => {
            // Update 1-3 random tokens per tick
            const count = Math.floor(Math.random() * 3) + 1;

            for (let i = 0; i < count; i++) {
                const randomIndex = Math.floor(Math.random() * tokenIds.length);
                const tokenId = tokenIds[randomIndex];

                // Random price movement (-1% to +1%)
                const percentChange = (Math.random() * 0.02) - 0.01;
                // We need the current price ideally, but for now we'll just simulate the effect
                // In a real app we'd get the absolute new price from socket.
                // For this mock, we might need to read state or just send a delta? 
                // Redux reducer `updateTokenPrice` expects absolute price.
                // Let's cheat slightly and just send a "random plausible price" if we don't read state here.
                // actually, let's just use strict random for the visual effect if the component reads it.
                // Better: Dispatch an action that the reducer handles by looking up the PREVIOUS price.
                // But my reducer `updateTokenPrice` takes {id, price}.
                // So I should probably not determine the price *here* unless I know it.
                // Let's assume the "socket" sends the full new price.
                // To do that without reading store, I'll generate a random price based on nothing? No that's jumpy.
                // I'll make the reducer handle a "delta" action or just `updateRandomPrice`?
                // No, let's keep it simple: The hook mock generates a price.
                // I'll skip the logic of "smooth walk" for now and just set it to something consistent-ish?
                // Actually, I can just not send the price, but send a "simulate update" signal?
                // No, the requirement is "Real-time price updates".
                // Let's modify the reducer to accept a "delta" or helper.
                // Or just read the store in the hook!
            }
        }, 1000);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [enabled, tokenIds, dispatch]);
};

// Start 2: Better approach for "smooth" walk without reading store constantly:
// Actually, `useAppSelector` to get items?
// Yes, let's do that!

import { useAppSelector } from '@/lib/hooks';

export const useRealTokenSocket = (enabled: boolean = true) => {
    const dispatch = useAppDispatch();
    const items = useAppSelector(state => state.tokens.items);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (!enabled || items.length === 0) return;

        intervalRef.current = setInterval(() => {
            const count = Math.floor(Math.random() * 5) + 1; // More updates for "busy" feel

            for (let i = 0; i < count; i++) {
                const idx = Math.floor(Math.random() * items.length);
                const token = items[idx];
                if (!token) continue;

                const change = (Math.random() * 0.04) - 0.02; // +/- 2%
                const newPrice = Math.max(0.01, token.price * (1 + change));

                dispatch(updateTokenPrice({ id: token.id, price: newPrice }));
            }
        }, 800); // 800ms updates

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
    }, [enabled, items, dispatch]);
};
