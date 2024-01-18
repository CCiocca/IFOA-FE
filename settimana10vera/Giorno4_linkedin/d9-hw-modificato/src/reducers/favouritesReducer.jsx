
import { SET_FAVOURITE } from "../actions/favouritesAction"
import { REMOVE_FAVOURITE } from "../actions/favouritesAction"

const initialState = {
    favourites: [],
}

const favouritesReducer = (state= initialState, action) => {
    switch (action.type) {
        case SET_FAVOURITE : 
            return {
                ...state,
                favourites: action.payload
            }
        case REMOVE_FAVOURITE :
            return {
                ...state,
                favourites: action.payload
            }
        default : 
            return state;

}}

export default favouritesReducer