

export const initTestState = {
    loading: false,
    error: null,
    data: [],
    count: 0,
    page: 1,
    search: ''
}


export const initDetailTestState = {
    loading: false,
    error: null,
    data: null
}

export const fetchPayloadTestData = {page: 1, search: ""};

export const sagaFetchWorkerTestPayload = {type: "test", payload: fetchPayloadTestData}
export const sagaFetchDetailWorkerTestPayload = {type: 'test', payload: {id: 1 }} 