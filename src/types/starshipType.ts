import { DetailStateType, fetchSuccessPayloadType, StateType } from "./common"
import { FilmType } from "./filmType";
import { PeopleType } from "./peopleType";


export interface AddStarshipInfoType {
    films: FilmType[],
    pilots: PeopleType[]
}


export interface StarshipType {
    name: string,
    model: string,
    starship_class: string,
    manufacturer: string,
    cost_in_credits: string,
    length: string,
    crew: string,
    passengers: string,
    max_atmosphering_speed: string,
    hyperdrive_rating: string,
    MGLT: string
    cargo_capacity: string,
    consumables: string,
    films: string[],
    pilots: string[],
    url: string,
    additional_info?: AddStarshipInfoType
}


export type StarshipStateType = StateType<StarshipType>;
export type StarshipDetailStateType = DetailStateType<StarshipType>;
export type fetchStarshipSuccessPayload = fetchSuccessPayloadType<StarshipType>;