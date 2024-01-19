import { createStore } from "redux";
import placeReducer from "../reducers/reducer";


const store = createStore(placeReducer)

export default store