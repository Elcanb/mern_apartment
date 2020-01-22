import { GET_ADVERTS, ADD_ADVERT, SEARCH_SUCCESS, START_LOADING, GET_ADVERT_BY_ID } from '../action/types'

const initialState = {
    adverts: [],
    advertById: [],
    searchResult: [],
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_ADVERTS:
            return {
                ...state,
                adverts: action.payload,
                loading: false
            };
        case GET_ADVERT_BY_ID:
            return {
                ...state,
                advertById: action.payload,
                loading: false
            };
        case ADD_ADVERT:
            return {
                ...state,
                adverts: [...state.adverts, action.payload]
            }
        case SEARCH_SUCCESS:
            return {
                ...state,
                searchResult: [...action.payload]
            }
        default:
            return state;
    }
}