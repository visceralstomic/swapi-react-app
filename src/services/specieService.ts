import { SpecieType } from "../types/speciesTypes";
import axiosInstance from "./axiosInstance"


const getAllSpecies = (page: number, search: string) => {
    return axiosInstance.get("/species", {
        params: {page, search}
    }).then(resp => {
        const {results, count} = resp.data;
        return {results, count}
    })  
}

const getSpecieDetail = (id: number | string): Promise<SpecieType> => {
    return axiosInstance.get(`/species/${id}`).then(resp => resp.data)
}

export default {
    getAllSpecies,
    getSpecieDetail
}