import { configureStore } from "@reduxjs/toolkit";
import { forecastReducer } from "./forecastsSlice";
import { weatherReducer } from "./weatherSlice";


configureStore ({
    reducer:{
        weather: weatherReducer, 
        forecasts: forecastReducer,
    }
})

export default configureStore