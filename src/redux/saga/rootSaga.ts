import {all} from "redux-saga/effects";
import fetchFilmWatcher from "./filmsSaga";
import { fetchPeopleWatcher } from "./peopleSaga";
import planetSagaWatcher from "./planetSaga";
import speciesSagaWatcher from "./speciesSaga";
import starshipSagaWatcher from "./starshipSaga";
import vehicleSagaWatcher from "./vehicleSaga";



export default function* rootSaga() {
    yield all([fetchPeopleWatcher(), planetSagaWatcher(), fetchFilmWatcher(), 
        starshipSagaWatcher(), vehicleSagaWatcher(), speciesSagaWatcher()]);
}