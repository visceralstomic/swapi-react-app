import { DetailStateType, fetchSuccessPayloadType, StateType } from "./common"
import { FilmType } from "./filmType";
import { PeopleType } from "./peopleType";


export interface AddSpecieInfoType {
    people: PeopleType[],
    films: FilmType[]
}

export interface SpecieType {
    name: string,
    classification: string,
    designation: string, 
    average_height: string,
    average_lifespan: string,
    eye_colors: string,
    hair_colors: string,
    skin_colors: string,
    language: string,
    homeworld: string,
    people: string[],
    films: string[],
    url: string,
    additional_info: AddSpecieInfoType
}


export type SpeciesStateType = StateType<SpecieType>;
export type SpeciesDetailState = DetailStateType<SpecieType>;
export type fetchSpeciesSuccessPayload = fetchSuccessPayloadType<SpecieType>;