import { call, fork, put, takeEvery } from "redux-saga/effects";
import { SPECIES_ROUTE, SPECIE_DETAIL_ROUTE } from "../../components/AppRouter";
import filmService from "../../services/filmService";
import peopleService from "../../services/peopleService";
import specieService from "../../services/specieService";
import { FilmType } from "../../types/filmType";
import { PeopleType } from "../../types/peopleType";
import { sagaSpecieDetailType, sagaSpecieType, SagaWorkerDetailPayload, SagaWorkerPayload } from "../../types/sagaType";
import { AddSpecieInfoType } from "../../types/speciesTypes";
import genFactory from "../../utils/genFactory";
import getItemList from "../../utils/getItemList";
import { fetchSpecieDetail, fetchSpecieDetailSuccess } from "../store/reducers/specieDetailReducer";
import { fetchSpecies, fetchSpeciesFailure, fetchSpeciesSuccess } from "../store/reducers/speciesReducer";


function* speicesSagaWorker({payload}: SagaWorkerPayload) {
    const {page, search} = payload;

    try {
        const data: sagaSpecieType = yield call(specieService.getAllSpecies, page, search);
        yield put(fetchSpeciesSuccess(data));
    } catch (e: any) {
        yield put(fetchSpeciesFailure(e.message));
    }
}


function* specieDetailSagaWorker({payload}: SagaWorkerDetailPayload) {
    const {id} = payload;

    try {
        const data: sagaSpecieDetailType = yield call(specieService.getSpecieDetail, id);
        const films: FilmType[] = yield call(getItemList, data.films, filmService.getFilmDetail);
        const people: PeopleType[] = yield call(getItemList, data.people, peopleService.getPeopleDetail);
        const additional_info: AddSpecieInfoType = {films, people};

        yield put(fetchSpecieDetailSuccess({...data, additional_info}));
    } catch (e: any) {
        yield put(fetchSpeciesFailure(e.message));
    }
}


export default function* speciesSagaWatcher() {
    yield fork(genFactory(SPECIES_ROUTE, SPECIE_DETAIL_ROUTE, state => state.species, 
        fetchSpecies, fetchSpecieDetail));
    yield takeEvery(fetchSpecies.type, speicesSagaWorker);
    yield takeEvery(fetchSpecieDetail.type, specieDetailSagaWorker);
}