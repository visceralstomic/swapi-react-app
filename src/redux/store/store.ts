import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootSaga from "../saga/rootSaga";
import peopleReducer from "./reducers/peopleReducer";
import createSagaMiddleware from "redux-saga";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
import peopleDetailReducer from "./reducers/peopleDetailReducer";
import planetReducer from "./reducers/planetReducer";
import planetDetailReducer from "./reducers/planetDetailReducer";
import filmReducer from "./reducers/filmReducer";
import filmDetailReducer from "./reducers/filmDetailReducer";
import starshipReducer from "./reducers/starshipReducer";
import starshipDetailReducer from "./reducers/starshipDetailReducer";
import vehiclesReducer from "./reducers/vehiclesReducer";
import vehicleDetailReducer from "./reducers/vehicleDetailReducer";
import speciesReducer from "./reducers/speciesReducer";
import specieDetailReducer from "./reducers/specieDetailReducer";


const {createReduxHistory, routerMiddleware, routerReducer} = createReduxHistoryContext({
    history: createBrowserHistory()
})

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        people: peopleReducer,
        peopleDetail: peopleDetailReducer,
        planets: planetReducer,
        planetDetail: planetDetailReducer,
        films: filmReducer,
        filmDetail: filmDetailReducer,
        starships: starshipReducer,
        starshipDetail: starshipDetailReducer,
        vehicles: vehiclesReducer,
        vehicleDetail: vehicleDetailReducer,
        species: speciesReducer,
        specieDetail: specieDetailReducer,
        router: routerReducer
    },
    middleware: getDefaultMiddleware => 
            getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware)
})

sagaMiddleware.run(rootSaga);
export type routerType = ReturnType<typeof routerReducer>
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const history = createReduxHistory(store);
export default store;