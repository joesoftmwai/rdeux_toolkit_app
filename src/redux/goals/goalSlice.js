import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleFailure } from '../utils';
import goalService from './goalService';

const initialState = {
    goals: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

// add goal
export const addGoal = createAsyncThunk(
    'goals/add',
    async(goal, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await goalService.addGoal(goal, token)
        } catch (error) {
            const message = handleFailure(error);
            return thunkAPI.rejectWithValue(message);
        }
    }
)

// add goal
export const getGoals = createAsyncThunk(
    'goals',
    async(_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await goalService.getGoals(token)
        } catch (error) {
            const message = handleFailure(error);
            return thunkAPI.rejectWithValue(message);
        }
    }
)



export const goalSlice = createSlice({
    name: 'goals',
    initialState,
    reducers: {
        reset: () => initialState // set to initial state because we aint persisting nothing
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                addGoal.pending, (state) => {
                    state.isLoading = true
                }
            )
            .addCase(
                addGoal.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.message = action.payload.message
                    state.goals.push(action.payload.jsonData)
                }
            )
            .addCase(
                addGoal.rejected, (state, action) => {
                    state.isLoading = false
                    state.isError = true
                    state.message = action.payload
                }
            )
            .addCase(
                getGoals.pending, (state) => {
                    state.isLoading = true
                }
            )
            .addCase(
                getGoals.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.goals.push(action.payload.jsonData)
                }
            )
            .addCase(
                getGoals.rejected, (state, action) => {
                    state.isLoading = false
                    state.isError = true
                    state.message = action.payload
                }
            )
    }
})

export const { reset } = goalSlice.actions;
export default goalSlice.reducer