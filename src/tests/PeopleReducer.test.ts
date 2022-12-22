import peopleReducer, {fetchPeople, fetchPeopleSuccess,
    fetchPeopleFailure} from "../redux/store/reducers/peopleReducer";
import { fetchSuccessPayload, PeopleState } from "../types/peopleType";
import { peopleData } from "./data";
import { fetchPayloadTestData, initTestState } from "./utils";





const fetchSuccessPayloadData: fetchSuccessPayload = {
    results: peopleData,
    count: 2
}

test('get initial people state', () => {
    expect(peopleReducer(undefined, {type: undefined})).toEqual(initTestState)
})

test('start people data fetching', () => {
    const state: PeopleState = initTestState; 
    expect(peopleReducer(state, fetchPeople(fetchPayloadTestData))).toEqual(
        {...state, loading: true, ...fetchPayloadTestData})
})


test('get people data success', () => {
    const state: PeopleState = initTestState;
    expect(peopleReducer(state, fetchPeopleSuccess(fetchSuccessPayloadData))).toEqual(
        {   
            ...state, loading: false, 
            count: fetchSuccessPayloadData.count,
            data: fetchSuccessPayloadData.results 
        }
    )
})


test('get people data failure', () => {
    const state: PeopleState = initTestState;
    expect(peopleReducer(state, fetchPeopleFailure('some error'))).toEqual(
        {...state, loading: false, error: 'some error'}
    )
})