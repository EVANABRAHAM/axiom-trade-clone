import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './features/token-table/tokenSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            tokens: tokenReducer,
        },
    });
};

// Return types for use in hooks
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
