import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from './authService';
import { handleFailure, emailExists } from '../utils'

const initialState = {
    user: null,
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: '',
}

// Sign up User
export const signup = createAsyncThunk(
    'auth/signup',
    async (user, thunkAPI) => {
        try {
            return await authService.signup(user)
        } catch (error) {
            const message = emailExists(error) ? emailExists(error) : handleFailure(error);
            return thunkAPI.rejectWithValue(message);
        }
    }
)

// Sign in User
export const signin = createAsyncThunk(
    'auth/signin',
    async (user, thunkAPI) => {
        try {
            return await authService.signin(user)
        } catch (error) {
            const message = handleFailure(error);
            return thunkAPI.rejectWithValue(message);
        }
    }
)


// Sign out User
export const signout = createAsyncThunk(
    'auth/signout',
    async (token, thunkAPI) => {
        try {
            return await authService.signout(token)
        } catch (error) {
            const message = handleFailure(error);
            return thunkAPI.rejectWithValue(message);
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isSuccess = false
            state.isError = false
            state.isLoading = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                signup.pending, (state) => {
                    state.isLoading = true
                }
            )
            .addCase(
                signup.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.user = action.payload
                }
            )
            .addCase(
                signup.rejected, (state, action) => {
                    state.isLoading = false
                    state.isError = true
                    state.message = action.payload
                    state.user = null
                }
            )
            .addCase(
                signin.pending, (state) => {
                    state.isLoading = true
                }
            )
            .addCase(
                signin.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.user = action.payload
                }
            )
            .addCase(
                signin.rejected, (state, action) => {
                    state.isLoading = false
                    state.isError = true
                    state.message = action.payload
                    state.user = null
                }
            )
            .addCase(
                signout.pending, (state) => {
                    state.isLoading = true
                }
            )
            .addCase(
                signout.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.user = null;
                }
            )
            .addCase(
                signout.rejected, (state, action) => {
                    state.isLoading = false
                    state.isError = true
                    state.message = action.payload
                }
            )
    }
})

// Action creators are generated for each case reducer function
export const { 
    reset,

} = authSlice.actions


export default authSlice.reducer