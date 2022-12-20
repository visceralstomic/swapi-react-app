
import { call, fork, put, takeEvery } from "redux-saga/effects";
import { FILMS_ROUTE, FILM_DETAIL_ROUTE } from "../../components/AppRouter";
import filmService from "../../services/filmService";
import peopleService from "../../services/peopleService";
import planetsService from "../../services/planetsService";
import specieService from "../../services/specieService";
import starshipService from "../../services/starshipService";
import vehicleService from "../../services/vehicleService";

import { FilmAddInfoType} from "../../types/filmType";
import { PeopleType } from "../../types/peopleType";
import { PlanetType } from "../../types/planetType";
import { sagaFilmDetailType, sagaFilmType, SagaWorkerDetailPayload, 
    SagaWorkerPayload } from "../../types/sagaType";
import { SpecieType } from "../../types/speciesTypes";
import { StarshipType } from "../../types/starshipType";
import { VehicleType } from "../../types/vehicleType";
import genFactory from "../../utils/genFactory";
import getItemList from "../../utils/getItemList";
import { fetchFilmDetail, fetchFilmDetailFailure, 
    fetchFilmDetailSuccess } from "../store/reducers/filmDetailReducer";
import { fetchFilms, fetchFilmsFailure, fetchFilmsSuccess } from "../store/reducers/filmReducer";



function* fetchFilmsWorker({payload}: SagaWorkerPayload) {
    const {search, page} = payload;

    try {
        const data: sagaFilmType = yield call(filmService.getAllFilms, page, search);
        yield put(fetchFilmsSuccess(data))
    } catch (e: any) {
        yield put(fetchFilmsFailure(e.message));
    }
}


function* fetchFilmsDetailWorker({payload}: SagaWorkerDetailPayload) {
    const {id} = payload;
    try {
        const data: sagaFilmDetailType = yield call(filmService.getFilmDetail, id);
        const peopleList: PeopleType[] = yield call(getItemList, data.characters, peopleService.getPeopleDetail);
        const planetsList: PlanetType[] = yield call(getItemList, data.planets, planetsService.getPlanetDetail);
        const starshipsList: StarshipType[] = yield call(getItemList, data.starships, starshipService.getStarshipDetail);
        const vehiclesList: VehicleType[] = yield call(getItemList, data.vehicles, vehicleService.getVehicleDetail);
        const speciesList: SpecieType[] = yield call(getItemList, data.species, specieService.getSpecieDetail);

        const additional_info: FilmAddInfoType = {
            characters: peopleList,
            planets: planetsList,
            starships: starshipsList,
            vehicles: vehiclesList,
            species: speciesList
        }

        yield put(fetchFilmDetailSuccess({...data, additional_info}));
    } catch (e: any) {
        yield put(fetchFilmDetailFailure(e.message))
    }
}



export default function* fetchFilmWatcher() {
    yield fork(genFactory(FILMS_ROUTE, FILM_DETAIL_ROUTE, state => state.films, fetchFilms, fetchFilmDetail));
    yield takeEvery(fetchFilms.type, fetchFilmsWorker);
    yield takeEvery(fetchFilmDetail.type, fetchFilmsDetailWorker);
}