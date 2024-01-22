import { configureStore } from "@reduxjs/toolkit";
import { forecastReducer } from "./forecastSlice";
import { weatherReducer } from "./weatherSlice";


const store =  configureStore ({
    reducer:{
        weather: weatherReducer, 
        forecast: forecastReducer,
    }
});

export default store
