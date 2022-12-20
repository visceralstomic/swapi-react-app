import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPaylodType } from "../../../types/common";
import { fetchStarshipSuccessPayload, StarshipStateType } from "../../../types/starshipType";


const initialState: StarshipStateType = {
    loading: false,
    error: null,
    data: [],
    page: 1,
    search: '',
    count: 0
}


const starshipsSlice = createSlice({
    name: "starships",
    initialState,
    reducers: {
        fetchStarships: (state, action: PayloadAction<fetchPaylodType>) => {
            state.loading = true;
            state.page = action.payload.page;
            state.search = action.payload.search;
        },
        fetchStarshipsSuccess: (state, action: PayloadAction<fetchStarshipSuccessPayload>) => {
            state.loading = false;
            state.data = action.payload.results;
            state.count = action.payload.count;
            state.error = null;
        },
        fetchStarshipsFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})


export const {fetchStarships, fetchStarshipsFailure, fetchStarshipsSuccess} = starshipsSlice.actions; 
export default starshipsSlice.reducer;