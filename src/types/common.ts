import { FilmStateType, FilmType } from "./filmType";
import { PeopleState, PeopleType } from "./peopleType";
import { PlanetState, PlanetType } from "./planetType";
import { SpeciesStateType, SpecieType } from "./speciesTypes";
import { StarshipStateType, StarshipType } from "./starshipType";
import { VehicleStateType, VehicleType } from "./vehicleType";

export interface StateType<T> {
    loading: boolean,
    error: null | string;
    data: T[],
    count: number,
    page: number,
    search: string    
}


export interface DetailStateType<T> {
    loading: boolean,
    error: null | string,
    data: T | null   
}


export interface FnReturnType {
    changeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void,
    changePage: (page: number) => void,
}


export type fetchPaylodType = {search: string, page: number};
export type fetchSuccessPayloadType<T> = {results: T[], count: number};
export type AllStateTypes = PlanetState | PeopleState | FilmStateType 
    | StarshipStateType | VehicleStateType | SpeciesStateType;
export type AllItemType = PlanetType | PeopleType | FilmType | StarshipType | VehicleType | SpecieType;


export type fetchActionType =  (args: {search: string, page: number}) => {payload: fetchPaylodType, type: string};
export type fetchDetailActionType = (args: {id: number | string}) => {payload: {id: number | string },type: string}