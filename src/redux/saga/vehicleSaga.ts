import { call, fork, put, takeEvery } from "redux-saga/effects";
import { VEHICLES_ROUTE, VEHICLE_DETAIL_ROUTE } from "../../components/AppRouter";
import filmService from "../../services/filmService";
import peopleService from "../../services/peopleService";
import vehicleService from "../../services/vehicleService";
import { FilmType } from "../../types/filmType";
import { PeopleType } from "../../types/peopleType";
import { sagaVehicleDetailType, sagaVehiclesType, SagaWorkerDetailPayload, SagaWorkerPayload } from "../../types/sagaType";
import { AddVehicleInfoType } from "../../types/vehicleType";
import genFactory from "../../utils/genFactory";
import getItemList from "../../utils/getItemList";
import { fetchVehicleDetail, fetchVehicleDetailFailure, fetchVehicleDetailSuccess } from "../store/reducers/vehicleDetailReducer";
import { fetchVehicles, fetchVehiclesFailure, fetchVehiclesSuccess } from "../store/reducers/vehiclesReducer";


function* vehicleSagaWorker({payload}: SagaWorkerPayload) {
    const {page, search} = payload;

    try {
        const data: sagaVehiclesType = yield call(vehicleService.getAllVehicles, page, search);
        yield put(fetchVehiclesSuccess(data));
    } catch (e: any) {
        yield put(fetchVehiclesFailure(e.message));
    }
}


function* vehicleDetailSagaWorker({payload}: SagaWorkerDetailPayload) {
    const {id} = payload;

    try {
        const data: sagaVehicleDetailType= yield call(vehicleService.getVehicleDetail, id);
        const films: FilmType[] = yield call(getItemList, data.films, filmService.getFilmDetail);
        const pilots: PeopleType[] = yield call(getItemList, data.pilots, peopleService.getPeopleDetail);
        const additional_info: AddVehicleInfoType = {films, pilots};
        yield put(fetchVehicleDetailSuccess({...data, additional_info}));
    } catch (e: any) {
        yield put(fetchVehicleDetailFailure(e.message));
    }
}


export default function* vehicleSagaWatcher() {
    yield fork(genFactory(VEHICLES_ROUTE, VEHICLE_DETAIL_ROUTE, state => state.vehicles, 
        fetchVehicles, fetchVehicleDetail));
    yield takeEvery(fetchVehicles.type, vehicleSagaWorker);
    yield takeEvery(fetchVehicleDetail.type, vehicleDetailSagaWorker);
}