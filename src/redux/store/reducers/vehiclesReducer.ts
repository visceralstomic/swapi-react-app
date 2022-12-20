import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPaylodType } from "../../../types/common";
import { fetchVehicleSuccessPayload, VehicleStateType } from "../../../types/vehicleType";


const initialState: VehicleStateType = {
    loading: false,
    error: null,
    data: [],
    page: 1,
    search: "",
    count: 0
}



const vehiclesSlice = createSlice({
    name: "vehicles",
    initialState,
    reducers: {
        fetchVehicles: (state, action: PayloadAction<fetchPaylodType>) => {
            state.loading = true;
            state.page = action.payload.page;
            state.search = action.payload.search;
        },
        fetchVehiclesSuccess: (state, action: PayloadAction<fetchVehicleSuccessPayload>) => {
            state.loading = false;
            state.error = null;
            state.data = action.payload.results;
            state.count = action.payload.count;
        },
        fetchVehiclesFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})


export const {fetchVehicles, fetchVehiclesFailure, fetchVehiclesSuccess} = vehiclesSlice.actions;
export default vehiclesSlice.reducer;