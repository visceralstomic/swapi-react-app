import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilmDetailState, FilmType } from "../../../types/filmType";



const initialState: FilmDetailState = {
    loading: false,
    error: null,
    data: null
}



const filmDetailSlice = createSlice({
    name: "filmDetail",
    initialState,
    reducers: {
        fetchFilmDetail: (state, action: PayloadAction<{id: number | string}>) => {
            state.loading = true;
        },
        fetchFilmDetailSuccess: (state, action: PayloadAction<FilmType> ) => {
            state.loading = false;
            state.error = null;
            state.data = action.payload;
        },
        fetchFilmDetailFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})


export const {fetchFilmDetail, fetchFilmDetailFailure, fetchFilmDetailSuccess} = filmDetailSlice.actions;
export default filmDetailSlice.reducer;