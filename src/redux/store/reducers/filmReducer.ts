import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPaylodType } from "../../../types/common";
import { fetchFilmSuccessPayload, FilmStateType } from "../../../types/filmType";

const initialState: FilmStateType = {
    loading: false,
    error: null,
    data: [], 
    page: 1,
    search: "",
    count: 0
}


const FilmSlice = createSlice({
    name: "films",
    initialState,
    reducers: {
        fetchFilms: (state, action: PayloadAction<fetchPaylodType>) => {
            state.loading = true;
            state.search = action.payload.search;
            state.page = action.payload.page;
        },
        fetchFilmsSuccess: (state, action: PayloadAction<fetchFilmSuccessPayload>) => {
            state.loading = false;
            state.error = null;
            state.data = action.payload.results;
            state.count = action.payload.count;
        },
        fetchFilmsFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const {fetchFilms, fetchFilmsFailure, fetchFilmsSuccess} = FilmSlice.actions;
export default FilmSlice.reducer;