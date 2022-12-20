import { VehicleType } from "../types/vehicleType";
import axiosInstance from "./axiosInstance";



const getAllVehicles = (page: number, search: string) => {
    return axiosInstance.get(`/vehicles`, {
        params: { page, search}
    }).then(resp => {
        const {count, results} = resp.data;
        return {count, results}
    })
}

const getVehicleDetail = (id : number | string): Promise<VehicleType> => {
    return axiosInstance.get(`/vehicles/${id}`).then(resp => resp.data);

}

export default {
    getAllVehicles,
    getVehicleDetail
}