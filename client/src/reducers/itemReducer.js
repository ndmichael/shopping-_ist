import {
    ADD_ITEM, DELETE_ITEM, GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE,
    ADD_ITEM_REQUEST, ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE,
} from '../actions/types';

const initialState = {
    items: [],
    loading: false,
    error: ''
}



const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_ITEMS_SUCCESS:
            return {
                ...state,
                items: action.payload,
                loading: false,
                error: ''
            }

        case GET_ITEMS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                items: []
            }

        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }

        case ADD_ITEM_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ADD_ITEM_SUCCESS:
            return {
                ...state,
                items: [action.payload, ...state.items],
                loading: false,
                error: ''
            }

        case ADD_ITEM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                items: []
            }


        // case ADD_ITEM:
        //     return {
        //         ...state,
        //         items: [action.payload, ...state.items]
        //     }
        default:
            return state;
    }
}

export default itemReducer;