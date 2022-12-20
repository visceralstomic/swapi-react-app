import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPaylodType } from "../../../types/common";
import { fetchPlanetSuccessPayload, PlanetState } from "../../../types/planetType";

const initialState: PlanetState = {
    loading: false,
    error: null,
    data: [],
    search: "",
    count: 0,
    page: 1
}


const planetsSlice = createSlice({
    name: "planets",
    initialState,
    reducers: {
        fetchPlanets: (state, action: PayloadAction<fetchPaylodType>) => {
            state.loading = true;
            state.page = action.payload.page;
            state.search = action.payload.search;
        },
        fetchPlanetsSuccess: (state, action: PayloadAction<fetchPlanetSuccessPayload>) => {
            state.loading = false;
            state.data = action.payload.results;
            state.count = action.payload.count;
            state.error = null;
        },
        fetchPlanetsFail: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const {fetchPlanets, fetchPlanetsFail, fetchPlanetsSuccess} = planetsSlice.actions;
export default planetsSlice.reducer;