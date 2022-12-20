import { locationChangeAction } from "redux-first-history/build/es6/actions";
import { SagaReturnType } from "redux-saga/effects";
import filmService from "../services/filmService";
import peopleService from "../services/peopleService";
import planetsService from "../services/planetsService";
import specieService from "../services/specieService";
import starshipService from "../services/starshipService";
import vehicleService from "../services/vehicleService";
import { fetchPaylodType } from "./common";


export type routerActionType = SagaReturnType<typeof locationChangeAction>;
export type SagaWorkerPayload = {type: string, payload: fetchPaylodType};
export type SagaWorkerDetailPayload = {type: string, payload: {id: number | string}};


export type sagaPlanetFetchType = SagaReturnType<typeof planetsService.getAllPlanets>;
export type sagaPlanetDetailFetchType = SagaReturnType<typeof planetsService.getPlanetDetail>;


export type sagaPeopleType = SagaReturnType<typeof peopleService.getAllPeople>;
export type sagaPeopleDetailType = SagaReturnType<typeof peopleService.getPeopleDetail>;


export type sagaFilmType = SagaReturnType<typeof filmService.getAllFilms>;
export type sagaFilmDetailType = SagaReturnType<typeof filmService.getFilmDetail>;

export type sagaStarshipType = SagaReturnType<typeof starshipService.getAllStarships>;
export type sagaStarshipDetail = SagaReturnType<typeof starshipService.getStarshipDetail>;

export type sagaVehiclesType = SagaReturnType<typeof vehicleService.getAllVehicles>;
export type sagaVehicleDetailType = SagaReturnType<typeof vehicleService.getVehicleDetail>;


export type sagaSpecieType = SagaReturnType<typeof specieService.getAllSpecies>;
export type sagaSpecieDetailType = SagaReturnType<typeof specieService.getSpecieDetail>;