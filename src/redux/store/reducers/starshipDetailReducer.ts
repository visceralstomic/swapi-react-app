import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StarshipDetailStateType, StarshipType } from "../../../types/starshipType";


const initialState: StarshipDetailStateType = {
    loading: false,
    error: null,
    data: null
}



const starshipDetailSlice = createSlice({
    name: 'starshipDetail',
    initialState,
    reducers: {
        fetchStarshipDetail: (state, action: PayloadAction<{id: number | string}>) => {
            state.loading = true;
        },
        fetchStarshipDetailSuccess: (state, action: PayloadAction<StarshipType>) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        },
        fetchStarshipDetailFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})


export const {fetchStarshipDetail, fetchStarshipDetailFailure,
    fetchStarshipDetailSuccess} = starshipDetailSlice.actions;

export default starshipDetailSlice.reducer;