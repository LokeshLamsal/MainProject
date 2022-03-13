import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loggedIn: false,
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.loggedIn = true
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.loggedIn = false
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
