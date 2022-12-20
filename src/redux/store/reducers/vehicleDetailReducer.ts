import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VehicleDetailStateType, VehicleType } from "../../../types/vehicleType";



const initialState: VehicleDetailStateType = {
    loading: false,
    error: null,
    data: null
}


const vehicleDetailSlice = createSlice({
    name: "vehicleDetail",
    initialState,
    reducers: {
        fetchVehicleDetail: (state, action: PayloadAction<{id: number | string}>) => {
            state.loading = true;
        },
        fetchVehicleDetailSuccess: (state, action: PayloadAction<VehicleType>) => {
            state.loading = false;
            state.error = null;
            state.data = action.payload;
        },
        fetchVehicleDetailFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})


export const {fetchVehicleDetail, fetchVehicleDetailFailure, 
    fetchVehicleDetailSuccess} = vehicleDetailSlice.actions;
export default vehicleDetailSlice.reducer;