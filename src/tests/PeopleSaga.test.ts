import { expectSaga, testSaga } from "redux-saga-test-plan"
import { fetchPeopleDetailWorker, fetchPeopleRouteWorker, fetchPeopleWorker, getState } from "../redux/saga/peopleSaga"
import peopleReducer, { fetchPeople, fetchPeopleSuccess } from "../redux/store/reducers/peopleReducer";
import peopleService from "../services/peopleService";
import planetsService from "../services/planetsService";
import { filmsTestData, peopleData, planetTestData, speciesTestData, starshipsTestData, vehicleTestData } from "./data";
import { initTestState, sagaFetchDetailWorkerTestPayload, sagaFetchWorkerTestPayload } from "./utils"
import getItemList from "../utils/getItemList";
import filmService from "../services/filmService";
import specieService from "../services/specieService";
import starshipService from "../services/starshipService";
import vehicleService from "../services/vehicleService";
import { fetchPeopleDetail, fetchPeopleDetailSuccess } from "../redux/store/reducers/peopleDetailReducer";
import { locationChangeAction } from "redux-first-history/build/es6/actions";
import { Action, Location } from "history";
import { select } from "redux-saga/effects";





test('test fetchPeopleWorker', () => {
    testSaga(fetchPeopleWorker, sagaFetchWorkerTestPayload)
        .next()
        .call(peopleService.getAllPeople, 1, '')
        .next({
            results: peopleData,
            count: 1
        })
        .put(fetchPeopleSuccess({
            results: peopleData,
            count: 1
        }))
        .next()
        .isDone()
})


test('test fetchPeopleDetailWorker', () => {
    const peopleItem = peopleData[0];
    testSaga(fetchPeopleDetailWorker, sagaFetchDetailWorkerTestPayload)
        .next()
        .call(peopleService.getPeopleDetail, 1)
        .next(peopleItem)
        .call(planetsService.getPlanetDetail, '1')
        .next(planetTestData[0])
        .call(getItemList, peopleItem.films, filmService.getFilmDetail)
        .next(filmsTestData)
        .call(getItemList, peopleItem.species, specieService.getSpecieDetail)
        .next(speciesTestData)
        .call(getItemList, peopleItem.starships, starshipService.getStarshipDetail)
        .next(starshipsTestData)
        .call(getItemList, peopleItem.vehicles, vehicleService.getVehicleDetail)
        .next(vehicleTestData)
        .put(fetchPeopleDetailSuccess({
            ...peopleData[0],
            additional_info: {
                home: planetTestData[0],
                films: filmsTestData,
                species: speciesTestData,
                vehicles: vehicleTestData,
                starships: starshipsTestData
            }
        }))
        .next()
        .isDone()
})




test('test fetchPeopleRouteWorker /people route', () => {
    const locationItem: Location = {
        pathname: "/people",
        state: null,
        key: '1',
        hash: "asgadgs",
        search: ''
    }
    return expectSaga(fetchPeopleRouteWorker)
            .withReducer(peopleReducer)
            .provide([
                [select(getState), initTestState]
            ])
            .put(fetchPeople({search: "", page: 1}))
            .dispatch(locationChangeAction(locationItem, Action.Push))
            .silentRun();
})


test('test fetchPeopleRouteWorker /route/1', () => {
    const locationItem: Location = {
        pathname: "/people/1",
        state: null,
        key: '1',
        hash: "asgadgs",
        search: ''
    }
    return expectSaga(fetchPeopleRouteWorker)
            .withReducer(peopleReducer)
            .put(fetchPeopleDetail({id: '1'}))
            .dispatch(locationChangeAction(locationItem, Action.Push))
            .silentRun()
})