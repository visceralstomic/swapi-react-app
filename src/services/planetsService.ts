import { PlanetType } from "../types/planetType";
import axios_instance from "./axiosInstance";


const getAllPlanets = (page: number, search: string) => {
    return axios_instance.get("/planets", {
        params: {page, search}
    }).then(resp => {
        const {count, results} = resp.data;
        return {count, results}
    })
}


const getPlanetDetail = (id: number | string): Promise<PlanetType> => {
    return axios_instance.get(`/planets/${id}`).then(resp => resp.data);
}


export default {
    getAllPlanets,
    getPlanetDetail
}