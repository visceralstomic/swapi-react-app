import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PeopleDetailState, PeopleType } from "../../../types/peopleType";


const initialState: PeopleDetailState = {
    loading: false,
    error: null,
    data: null
}

const peopleDetailSlice = createSlice({
    name: "peopleDetail",
    initialState,
    reducers: {
        fetchPeopleDetail: (state, action: PayloadAction<{id: number | string}>) => {
            state.loading = true;
        },
        fetchPeopleDetailSuccess: (state, action: PayloadAction<PeopleType>) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        },
        fetchPeopleDetailFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const {
    fetchPeopleDetail, fetchPeopleDetailFailure, 
    fetchPeopleDetailSuccess
    } = peopleDetailSlice.actions;

export default peopleDetailSlice.reducer;