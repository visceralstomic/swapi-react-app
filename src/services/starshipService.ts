
import { StarshipType } from "../types/starshipType";
import axiosInstance from "./axiosInstance";



const getAllStarships = (page: number, search: string) => {
    return axiosInstance.get(`/starships`, {
        params: { page, search}
    }).then(resp => {
        const {count, results} = resp.data;
        return {count, results}
    })
}

const getStarshipDetail = (id : number | string): Promise<StarshipType> => {
    return axiosInstance.get(`/starships/${id}`).then(resp => resp.data);

}

export default {
    getAllStarships,
    getStarshipDetail
}