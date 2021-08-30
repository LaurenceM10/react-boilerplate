import { configureStore } from "@reduxjs/toolkit";

// slices
import authSlice from 'features/authentication/slice'

export const store = configureStore({
    reducer: {
        auth: authSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
