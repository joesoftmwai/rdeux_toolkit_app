import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    goals: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

export const goalSlice = createSlice({
    name: goal,
    initialState,
    reducers: {
        reset: () => initialState // set to initial state because we aint persisting nothing
    },
    extraReducers: (builder) => {
        
    }
})

export const { reset } = goalSlice.actions;
export default goalSlice.reducer