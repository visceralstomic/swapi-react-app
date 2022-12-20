import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SpeciesDetailState, SpecieType } from "../../../types/speciesTypes";


const initialState: SpeciesDetailState = {
    loading: false,
    error: null,
    data: null
}



const specieDetailSlice = createSlice({
    name: 'specieDetail',
    initialState,
    reducers: {
        fetchSpecieDetail: (state, action: PayloadAction<{id: number | string}>) => {
            state.loading = true;
        },
        fetchSpecieDetailSuccess: (state, action: PayloadAction<SpecieType>) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        },
        fetchSpecieDetailFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})


export const {fetchSpecieDetail, fetchSpecieDetailSuccess,
    fetchSpecieDetailFailure} = specieDetailSlice.actions;

export default specieDetailSlice.reducer;