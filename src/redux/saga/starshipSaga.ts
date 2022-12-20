import { call, fork, put, takeEvery } from "redux-saga/effects";
import { STARSHIPS_ROUTE, STARSHIP_DETAIL_ROUTE } from "../../components/AppRouter";
import filmService from "../../services/filmService";
import peopleService from "../../services/peopleService";
import starshipService from "../../services/starshipService";
import { FilmType } from "../../types/filmType";
import { PeopleType } from "../../types/peopleType";
import { sagaStarshipDetail, sagaStarshipType, SagaWorkerDetailPayload, SagaWorkerPayload } from "../../types/sagaType";
import { AddStarshipInfoType } from "../../types/starshipType";
import genFactory from "../../utils/genFactory";
import getItemList from "../../utils/getItemList";
import { fetchFilmDetailFailure } from "../store/reducers/filmDetailReducer";
import { fetchStarshipDetail, fetchStarshipDetailSuccess } from "../store/reducers/starshipDetailReducer";
import { fetchStarshipsSuccess, fetchStarshipsFailure, fetchStarships } from "../store/reducers/starshipReducer";



function* fetchStarshipWorker({payload}: SagaWorkerPayload) {
    const {page, search} = payload;

    try {
        const data: sagaStarshipType = yield call(starshipService.getAllStarships, page, search);
        yield put(fetchStarshipsSuccess(data));
    } catch (e: any) {
        yield put(fetchStarshipsFailure(e.message));
    }
}


function* fetchStarshipDetailWorker({payload}: SagaWorkerDetailPayload) {
    const {id} = payload;
    try {
        const data: sagaStarshipDetail = yield call(starshipService.getStarshipDetail, id);
        const filmsList: FilmType[] = yield call(getItemList, data.films, filmService.getFilmDetail);
        const pilotsList: PeopleType[] = yield call(getItemList, data.pilots, peopleService.getPeopleDetail);
        const additional_info: AddStarshipInfoType = {
            films: filmsList,
            pilots: pilotsList
        }

        yield put(fetchStarshipDetailSuccess({...data, additional_info}));

    } catch (e: any) {
        yield put(fetchFilmDetailFailure(e.message))
    }
}


export default function* starshipSagaWatcher() {
    yield fork(genFactory(STARSHIPS_ROUTE, STARSHIP_DETAIL_ROUTE, state => state.starships, 
        fetchStarships, fetchStarshipDetail));
    yield takeEvery(fetchStarships.type, fetchStarshipWorker);
    yield takeEvery(fetchStarshipDetail.type, fetchStarshipDetailWorker);
}