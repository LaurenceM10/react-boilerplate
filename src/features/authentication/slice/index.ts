import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "app/store/store";

interface User {
    userId: string,
    username: string
}

interface AuthState {
    user: User | null,
    accessToken: string | null,
}

const slice = createSlice({
    name: 'auth',
    initialState: { user: null, accessToken: null } as AuthState,
    reducers: {
        setUser: (
            state,
            { payload }: PayloadAction<{ user: User; accessToken: string }>
        ) => {
            state.user = payload.user;
            state.accessToken = payload.accessToken;
        },
        removeUser: (state) => {
            state.user = null;
            state.accessToken = null;
        }
    }
})

export const selectCurrentUser = (state: RootState) => state.auth.user;

export const { setUser, removeUser } = slice.actions;
export default slice.reducer;
