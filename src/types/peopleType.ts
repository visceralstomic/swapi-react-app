import { fetchSuccessPayloadType, DetailStateType, StateType } from "./common";
import { FilmType } from "./filmType";
import { PlanetType } from "./planetType";
import { SpecieType } from "./speciesTypes";
import { StarshipType } from "./starshipType";
import { VehicleType } from "./vehicleType";


export type PeopleAddInfoType = {
    home: PlanetType,
    films: FilmType[],
    vehicles: VehicleType[],
    starships: StarshipType[],
    species: SpecieType[]
}


export interface PeopleType {
    birth_year: string,
    films: string[],
    gender: string,
    height: number,
    hair_color: string,
    homeworld: string,
    name: string,
    skin_color: string,
    species: string[],
    starships: string[],
    url: string,
    vehicles: string[],
    additional_info?: PeopleAddInfoType
}


export type PeopleState = StateType<PeopleType>;
export type PeopleDetailState = DetailStateType<PeopleType>;
export type fetchSuccessPayload = fetchSuccessPayloadType<PeopleType>;

