import { FilmType } from "../types/filmType";
import axiosInstance from "./axiosInstance"


const getAllFilms = (page: number, search: string) => {
    return axiosInstance.get("/films", {
        params: {page, search}
    }).then(resp => {
        const {results, count} = resp.data;
        return {results, count}
    })  
}

const getFilmDetail = (id: number | string): Promise<FilmType> => {
    return axiosInstance.get(`/films/${id}`).then(resp => resp.data)
}

export default {
    getAllFilms,
    getFilmDetail
}