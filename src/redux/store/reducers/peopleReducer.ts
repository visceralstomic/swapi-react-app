import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPaylodType } from "../../../types/common";
import { fetchSuccessPayload, PeopleState } from "../../../types/peopleType";



const initialState: PeopleState = {
    loading: false,
    error: null,
    data: [],
    count: 0,
    page: 1,
    search: ''
} 




const PeopleSlice = createSlice({
    name: "people",
    initialState,
    reducers: {
        fetchPeople: (state, action: PayloadAction<fetchPaylodType>) => {
            state.loading = true;
            state.page = action.payload.page;
            state.search = action.payload.search;
        },
        fetchPeopleSuccess: (state, action: PayloadAction<fetchSuccessPayload>) => {
            state.loading = false;
            state.data = action.payload.results;
            state.count = action.payload.count;
            state.error = null;
        },
        fetchPeopleFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        }
    } 
});





export const {fetchPeople, fetchPeopleSuccess, fetchPeopleFailure} = PeopleSlice.actions;  
export default PeopleSlice.reducer;
