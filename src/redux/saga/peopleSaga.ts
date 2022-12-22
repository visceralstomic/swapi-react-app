
import {call, fork, put,  SagaReturnType,  select,  takeEvery} from "redux-saga/effects";
import {  PEOPLE_DETAIL_ROUTE, PEOPLE_ROUTE } from "../../components/AppRouter";
import filmService from "../../services/filmService";
import peopleService from "../../services/peopleService";
import planetsService from "../../services/planetsService";
import { PeopleAddInfoType, PeopleState } from "../../types/peopleType";
import getIdFromUrl from "../../utils/getIdFromUrl";
import { fetchPeopleDetail, fetchPeopleDetailFailure, 
    fetchPeopleDetailSuccess } from "../store/reducers/peopleDetailReducer";
import { fetchPeople, fetchPeopleFailure, fetchPeopleSuccess } from "../store/reducers/peopleReducer";
import specieService from "../../services/specieService";
import starshipService from "../../services/starshipService";
import vehicleService from "../../services/vehicleService";
import { FilmType } from "../../types/filmType";
import { VehicleType } from "../../types/vehicleType";
import { StarshipType } from "../../types/starshipType";
import { SpecieType } from "../../types/speciesTypes";
import { sagaPeopleDetailType, sagaPeopleType, 
    sagaPlanetDetailFetchType, SagaWorkerDetailPayload, SagaWorkerPayload } from "../../types/sagaType";
import getItemList from "../../utils/getItemList";
import genFactory from "../../utils/genFactory";
import { RootState } from "../store/store";
import { AllStateTypes } from "../../types/common";



export function* fetchPeopleWorker({payload}: SagaWorkerPayload) {
    try {
        const {page, search} = payload;
        const data: sagaPeopleType = yield call(peopleService.getAllPeople, page, search);
        yield put(fetchPeopleSuccess({...data}));
    } catch (e: any) {
        yield put(fetchPeopleFailure(e.message));
    }
}



export function* fetchPeopleDetailWorker({payload}: SagaWorkerDetailPayload) {
    const {id} = payload;

    try {
        const data: sagaPeopleDetailType = yield call(peopleService.getPeopleDetail, id);
        const homeUrl = data.homeworld;
        const homeId = getIdFromUrl(homeUrl);
        const home: sagaPlanetDetailFetchType = yield call(planetsService.getPlanetDetail, homeId);
        const filmList: FilmType[] = yield call(getItemList, data.films, filmService.getFilmDetail);
        const speciesList:  SpecieType[] = yield call(getItemList, data.species, specieService.getSpecieDetail);
        const starshisList:  StarshipType[] = yield call(getItemList, data.starships, starshipService.getStarshipDetail);
        const vehiclesList: VehicleType[] = yield call(getItemList,data.vehicles, vehicleService.getVehicleDetail);
        const additional_info: PeopleAddInfoType = {
            home: home,
            films: filmList,
            species: speciesList,
            starships: starshisList,
            vehicles: vehiclesList
        }

        yield put(fetchPeopleDetailSuccess({...data, additional_info}));
        
    } catch (e: any) {
        console.log(e)
        yield put(fetchPeopleDetailFailure(e.message));
    }



}type selectState = (state: RootState) => AllStateTypes;

export const getState: selectState = state => state.people

export const fetchPeopleRouteWorker = genFactory(PEOPLE_ROUTE,PEOPLE_DETAIL_ROUTE, getState, 
    fetchPeople, fetchPeopleDetail );



export function* fetchPeopleWatcher() {
    yield fork(fetchPeopleRouteWorker);
    yield takeEvery(fetchPeopleDetail.type, fetchPeopleDetailWorker);
    yield takeEvery(fetchPeople.type, fetchPeopleWorker );
}




export function* getPeopleSelectWorker() {
    const data:  SagaReturnType<typeof getState> = yield select(getState);
    console.log(data)
}