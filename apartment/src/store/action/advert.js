import axios from 'axios';
import { GET_ADVERTS, ADD_ADVERT, SEARCH_SUCCESS, START_LOADING, GET_ADVERT_BY_ID } from './types'


export const getAdvert = () => dispatch => {

    dispatch({ type: START_LOADING });

    axios.get('/api/adverts/')
        .then(res => dispatch({ type: GET_ADVERTS, payload: res.data }))
};

export const getAdvertById = (id) => dispatch => {
    dispatch({ type: START_LOADING });

    axios.get(`/api/adverts/${id}`)
        .then(res => dispatch({
            type: GET_ADVERT_BY_ID,
            payload: res.data
        }));
}

export const addAdvert = (advert) => dispatch => {

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const body = JSON.stringify(advert);

    axios.post('/api/adverts/', body, config)
        .then(res => dispatch({
            type: ADD_ADVERT,
            payload: res.data
        }));
}

export const search = (advert) => dispatch => {

    const { location, price, room, floor, square } = advert;

    axios.get(`/api/adverts/search`, {
        params: {
            location,
            price,
            room,
            floor,
            square
        }
    })
        .then(res => dispatch({
            type: SEARCH_SUCCESS,
            payload: res.data
        }));
}