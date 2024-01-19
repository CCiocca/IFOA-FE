import { UPDATE_PLACE } from "../actions/actionUpdatePlace";

const initialState = {
    place: {
        name: "",
        local_names: {} ,  
        lat: 0,
        lon: 0,
        country: "",
        state: ""
    },
}

const placeReducer = (state= initialState, action) => {
    switch (action.type) {
        case UPDATE_PLACE : 
            return {
                ...state,
                place: action.payload
            }
        
        default : 
            return state;

}}

export default placeReducer