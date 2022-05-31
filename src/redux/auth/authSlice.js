import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: '',
}

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
    extraReducers: () => {

    }
})

// Action creators are generated for each case reducer function
export const { 
    reset,

} = authSlice.actions


export default authSlice.reducer