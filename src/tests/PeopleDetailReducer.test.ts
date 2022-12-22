import peopleDetailReducer, { fetchPeopleDetail, fetchPeopleDetailFailure, fetchPeopleDetailSuccess } from "../redux/store/reducers/peopleDetailReducer";
import { PeopleDetailState } from "../types/peopleType";
import { peopleData } from "./data";
import { initDetailTestState } from "./utils";


const fetchDetailSuccessPayloadData = peopleData[0];


test('get initial people detail state', () => {
    expect(peopleDetailReducer(undefined, {type: undefined})).toEqual(initDetailTestState)
})

test('start people detail data fetching', () => {
    const state: PeopleDetailState = initDetailTestState; 
    expect(peopleDetailReducer(state, fetchPeopleDetail({id: 1}))).toEqual(
        {...state, loading: true})
})


test('get people detail data success', () => {
    const state: PeopleDetailState = initDetailTestState;
    expect(peopleDetailReducer(state, fetchPeopleDetailSuccess(fetchDetailSuccessPayloadData))).toEqual(
        {   
            ...state, loading: false, 
            data: fetchDetailSuccessPayloadData 
        }
    )
})


test('get people detail data failure', () => {
    const state: PeopleDetailState = initDetailTestState;
    expect(peopleDetailReducer(state, fetchPeopleDetailFailure('some error'))).toEqual(
        {...state, loading: false, error: 'some error'}
    )
})
