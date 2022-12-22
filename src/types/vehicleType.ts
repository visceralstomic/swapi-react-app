import { DetailStateType, fetchSuccessPayloadType, StateType } from "./common";
import { FilmType } from "./filmType";
import { PeopleType } from "./peopleType";


export interface AddVehicleInfoType {
    films: FilmType[],
    pilots: PeopleType[]
}

export interface VehicleType {
    name: string,
    model: string,
    vehicle_class: string,
    manufacturer: string,
    length: string,
    cost_in_credits: string,
    crew: string,
    passengers: string,
    max_atmosphering_speed: string,
    cargo_capacity: string,
    consumables: string,
    films: string[],
    pilots: string[],
    url: string,
    additional_info?: AddVehicleInfoType
}

export type VehicleStateType = StateType<VehicleType>;
export type VehicleDetailStateType = DetailStateType<VehicleType>;
export type fetchVehicleSuccessPayload = fetchSuccessPayloadType<VehicleType>;