
import { PeopleType } from "../types/peopleType";
import axiosInstance from "./axiosInstance";



const getAllPeople = (page: number, search: string) => {
    return axiosInstance.get(`/people`, {
        params: { page, search}
    }).then(resp => {
        const {count, results} = resp.data;
        return {count, results}
    })
}

const getPeopleDetail = (id : number | string): Promise<PeopleType> => {
    return axiosInstance.get(`/people/${id}`).then(resp => resp.data);

}

export default {
    getAllPeople,
    getPeopleDetail
}