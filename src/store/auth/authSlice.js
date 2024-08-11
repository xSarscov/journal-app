import { createSlice } from '@reduxjs/toolkit';

export const authStatus = {
    checking: 'checking',
    notAuthenticated: 'not-authenticated',
    authenticated: 'authenticated'
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: authStatus.notAuthenticated,
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = authStatus.authenticated;
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        logout: (state, { payload }) => {
            state.status = authStatus.notAuthenticated;
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = authStatus.checking
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;