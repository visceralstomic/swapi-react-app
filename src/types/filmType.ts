import { DetailStateType, fetchSuccessPayloadType, StateType } from "./common"
import { SpecieType } from "./speciesTypes";
import { StarshipType } from "./starshipType";
import { VehicleType } from "./vehicleType";
import {PeopleType} from "./peopleType";
import { PlanetType } from "./planetType";


export interface FilmAddInfoType {
    species: SpecieType[],
    starships: StarshipType[],
    vehicles: VehicleType[],
    characters: PeopleType[],
    planets: PlanetType[]
} 


export interface FilmType {
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    release_date: string,
    species: string[],
    starships: string[], 
    vehicles: string[],
    characters: string[],
    planets: string[]
    url: string,
    additional_info: FilmAddInfoType
}


export type FilmStateType = StateType<FilmType>;
export type FilmDetailState = DetailStateType<FilmType>;
export type fetchFilmSuccessPayload = fetchSuccessPayloadType<FilmType>;