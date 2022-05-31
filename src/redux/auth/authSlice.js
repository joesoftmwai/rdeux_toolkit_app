import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from './authService';

const initialState = {
    user: null,
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: '',
}

// Sign up User
export const signup = createAsyncThunk(
    `${process.env.REACT_APP_API_BASE_URL}/register`,
    async (user, thunkAPI) => {
        try {
            return await authService.signup(user)
        } catch (error) {
            const message = (
                error.response 
                && error.response.data 
                && error.response.data.errors.email[0]
                && error.response.data.message)
                || (error.message)
                || error.response.data.errors.email[0]
                || (error.toString())
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
    }
})

// Action creators are generated for each case reducer function
export const { 
    reset,

} = authSlice.actions


export default authSlice.reducer