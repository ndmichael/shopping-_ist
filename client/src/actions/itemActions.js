import {
    GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE,
    ADD_ITEM_REQUEST, ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE, ADD_ITEM, DELETE_ITEM
} from './types';
import axios from 'axios';


export const getItemsRequest = () => {
    return ({ type: GET_ITEMS_REQUEST })
}

export const getItemsSuccess = (items) => {
    return ({
        type: GET_ITEMS_SUCCESS,
        payload: items
    })
}

export const getItemsFailure = (err) => {
    return ({
        type: GET_ITEMS_FAILURE,
        payload: err
    })
}



export const getItems = () => {
    return (dispatch) => {
        dispatch(getItemsRequest())
        axios.get('/api/items',)
            .then(res => {
                const items = res.data
                dispatch(getItemsSuccess(items))
            })
            .catch(err => {
                dispatch(getItemsFailure(err.message))
            })
    }
}

export const addItemRequest = () => {
    return ({ type: ADD_ITEM_REQUEST })
}

export const addItemSuccess = (item) => {
    return ({
        type: ADD_ITEM_SUCCESS,
        payload: item
    })
}

export const addItemFailure = (err) => {
    return ({
        type: ADD_ITEM_FAILURE,
        payload: err
    })
}

export const addItem = item => {
    return (dispatch) => {
        dispatch(addItemRequest())
        axios.post('/api/items', item)
            .then(res => {
                dispatch(addItemSuccess(res.data))
            })
            .catch(err => {
                dispatch(addItemFailure(err))
            })
    }
}

export const deleteItem = id => dispatch => {
    axios.delete(`/api/items/${id}`)
        .then(dispatch({
            type: DELETE_ITEM,
            payload: id
        }))
        .catch(err => dispatch({
            payload: err
        }))
}

