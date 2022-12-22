import { screen, render, fireEvent } from "@testing-library/react";
import axiosInstance from "../services/axiosInstance";
import MockAdapter from "axios-mock-adapter";
import PeoplePage from "../pages/PeoplePage";
import { peopleData } from "./data";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import store, { history } from "../redux/store/store";
import {HistoryRouter as Router } from "redux-first-history/rr6";

describe('tests', () => {


let mock = new MockAdapter(axiosInstance);

const searchQuery = "Skywalker";
beforeAll(() => {
    mock.onGet(
        "/people",
        { params: {search: searchQuery, page: 1}}
        ).reply(200, {results: [peopleData[0]], count: 2});
    mock.onGet(
            "/people",
            { params: {search: "searchQuery", page: 1}}
            ).reply(200, {results: [], count: 2});
    mock.onGet("/people").reply(200, {results: peopleData, count: 2});

})

beforeEach(async () => {
    history.push("/people")
    await act(async () => {
        render(
            <Provider store={store}>
                <Router history={history}>
                    <PeoplePage />
                </Router>
                    
            </Provider>
        )
    })
})


test('render PeoplePage', async  () => {
 
    expect(screen.getByText(new RegExp(peopleData[0].name))).toBeDefined();
    expect(mock.history.get[0].url).toEqual('/people')

})



test('peoplePage search item', async () => {
    const search = screen.getByLabelText(/Search/i);

    await act(() => {
        fireEvent.change(search, {target: {value: searchQuery} })
    })

    expect(screen.getByText(new RegExp(peopleData[0].name))).toBeDefined();
    expect(screen.queryByText(new RegExp(peopleData[1].name))).toBeNull();
    expect(screen.queryByText(/No matches detected/i)).toBeNull();
})


test('peoplePage search not found', async () => {

    const search = screen.getByLabelText(/Search/i);
    await act(() => {
        fireEvent.change(search, {target: {value: "searchQuery"} })
    })

    expect(screen.getByText(/No matches detected/i)).toBeDefined();
})
})