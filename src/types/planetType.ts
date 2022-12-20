import { DetailStateType, fetchSuccessPayloadType, StateType } from "./common"
import { FilmType } from "./filmType";
import { PeopleType } from "./peopleType";



export type PlanetAddInfoType = {
    films: FilmType[],
    people: PeopleType[]
}


export interface PlanetType {
    name: string,
    diameter: string,
    rotation_period: string,
    orbital_period: string,
    gravity: string,
    population: string,
    climate: string,
    terrain: string,
    surface_water: string,
    residents: string[],
    films: string[],
    url: string,
    additional_info: PlanetAddInfoType
}


export type PlanetState = StateType<PlanetType>;
export type PlanetDetailState = DetailStateType<PlanetType>;
export type fetchPlanetSuccessPayload = fetchSuccessPayloadType<PlanetType>;