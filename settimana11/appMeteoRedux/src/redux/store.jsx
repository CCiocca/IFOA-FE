import { configureStore } from "@reduxjs/toolkit";
import { forecastReducer } from "./forecastSlice";
import { weatherReducer } from "./weatherSlice";


configureStore ({
    reducer:{
        weather: weatherReducer, 
        forecasts: forecastReducer,
    }
})

export default configureStore