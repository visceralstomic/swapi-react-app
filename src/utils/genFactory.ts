import { matchPath } from "react-router-dom";
import { LOCATION_CHANGE } from "redux-first-history";
import { put, SagaReturnType, select, take } from "redux-saga/effects";
import { getRoutPath } from "../components/AppRouter";
import { RootState } from "../redux/store/store";
import { AllStateTypes, fetchActionType, fetchDetailActionType } from "../types/common";
import { routerActionType } from "../types/sagaType";

export default function genFactory(
    mainRoute: string, detailRoute: string, stateSelect: (state: RootState) => AllStateTypes,
    fetchMainAction: fetchActionType, fetchDetailAction: fetchDetailActionType
    ){
    return function* (){
        while (true) {
            const routerAction: routerActionType = yield take(LOCATION_CHANGE);
            
            const filmsRoutePath = getRoutPath(mainRoute);


            if (filmsRoutePath) {
                if (matchPath(filmsRoutePath, routerAction.payload.location.pathname)) {
                    
                    const data : SagaReturnType<typeof stateSelect> = yield select(stateSelect);
                    const {search, page} = data;
                    yield put(fetchMainAction({search, page}));
                }
            }
    
            const filmDetailRoutePath = getRoutPath(detailRoute);
    
            if (filmDetailRoutePath) {
                const filmDetailPath = matchPath(filmDetailRoutePath, routerAction.payload.location.pathname);
                if (filmDetailPath) {
                    const {id} = filmDetailPath.params;
                    if (id) {
                        yield put(fetchDetailAction({id}))
                    } 
                    
                }
            }
    
        }
    }
}
