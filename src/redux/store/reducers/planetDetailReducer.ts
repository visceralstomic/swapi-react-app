import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlanetDetailState, PlanetType } from "../../../types/planetType";



const initialState: PlanetDetailState = {
    loading: false,
    data: null,
    error: null
}


const planetDetailSlice = createSlice({
    name: "planetDetail",
    initialState,
    reducers: {
        fetchPlanetDetail: (state, action: PayloadAction<{id: number | string}>) => {
            state.loading = true;
        },
        fetchPlanetDetailSuccess: (state, action: PayloadAction<PlanetType>) => {
            state.data = action.payload;
            state.error = null;
            state.loading = false;
        },
        fetchPlanetDetailFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
})


export const {
    fetchPlanetDetail,
    fetchPlanetDetailSuccess,
    fetchPlanetDetailFailure
} = planetDetailSlice.actions;

export default planetDetailSlice.reducer;