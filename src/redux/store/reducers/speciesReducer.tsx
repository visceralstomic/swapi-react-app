import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPaylodType } from "../../../types/common";
import { fetchSpeciesSuccessPayload, SpeciesStateType } from "../../../types/speciesTypes";


const initialState: SpeciesStateType = {
    loading: false,
    error: null,
    data: [],
    page: 1,
    search: '',
    count: 0
}


const speciesSlice = createSlice({
    name: "species",
    initialState,
    reducers: {
        fetchSpecies: (state, action: PayloadAction<fetchPaylodType>) => {
            state.loading = true;
            state.page = action.payload.page;
            state.search = action.payload.search;
        },
        fetchSpeciesSuccess: (state, action: PayloadAction<fetchSpeciesSuccessPayload>) => {
            state.loading = false;
            state.data = action.payload.results;
            state.count = action.payload.count;
            state.error = null;
        },
        fetchSpeciesFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})


export const {fetchSpecies, fetchSpeciesSuccess, fetchSpeciesFailure} = speciesSlice.actions; 
export default speciesSlice.reducer;