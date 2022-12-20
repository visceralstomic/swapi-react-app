
import { call, fork, put, takeEvery } from "redux-saga/effects";
import { PLANET_DETAIL_ROUTE, PLANET_ROUTE } from "../../components/AppRouter";
import filmService from "../../services/filmService";
import peopleService from "../../services/peopleService";
import planetsService from "../../services/planetsService";
import { FilmType } from "../../types/filmType";
import { PeopleType } from "../../types/peopleType";
import { PlanetAddInfoType} from "../../types/planetType";
import {  sagaPlanetDetailFetchType, 
    sagaPlanetFetchType, SagaWorkerDetailPayload, SagaWorkerPayload } from "../../types/sagaType";
import genFactory from "../../utils/genFactory";
import getItemList from "../../utils/getItemList";
import { fetchPlanetDetail, fetchPlanetDetailFailure, fetchPlanetDetailSuccess } from "../store/reducers/planetDetailReducer";
import { fetchPlanets, fetchPlanetsFail, fetchPlanetsSuccess } from "../store/reducers/planetReducer";




function* planetSagaWorker({payload}: SagaWorkerPayload) {
    const {search, page} = payload;
    try {
        const data: sagaPlanetFetchType = yield call(planetsService.getAllPlanets, page, search);
        yield put(fetchPlanetsSuccess({...data}));
    } catch (e: any) {
        yield put(fetchPlanetsFail(e.message));
    }
}

function* planetDetailSagaWorker({payload}: SagaWorkerDetailPayload) {
    const {id} = payload;

    try {
        const data: sagaPlanetDetailFetchType = yield call(planetsService.getPlanetDetail, id);
        const filmsList: FilmType[] = yield call(getItemList, data.films, filmService.getFilmDetail);
        const peopleList: PeopleType[] = yield call(getItemList, data.residents, peopleService.getPeopleDetail);
        const additional_info: PlanetAddInfoType = {
            films: filmsList,
            people: peopleList
        } 
        yield put(fetchPlanetDetailSuccess({...data, additional_info}))
    } catch (e: any) {
        yield put(fetchPlanetDetailFailure(e.message))
    }
}


export default function* planetSagaWatcher() {
    yield fork(genFactory(PLANET_ROUTE, PLANET_DETAIL_ROUTE, state => state.planets,
         fetchPlanets, fetchPlanetDetail));
    yield takeEvery(fetchPlanets.type, planetSagaWorker);
    yield takeEvery(fetchPlanetDetail.type, planetDetailSagaWorker);

}