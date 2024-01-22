import { createSlice } from "@reduxjs/toolkit";


export const forecastSlice = createSlice({
    name: 'forecast',
    initialState: {
        cod: "",
        message: 0,
        cnt: 0,
        list: [],
        city:{}
    },
    reducers: {
        setResultsForecast: (state, action) =>{
            return { ...state, ...action.payload }
        },
    },
})

export const { setResultsForecast } = forecastSlice.actions;

export const forecastReducer = forecastSlice.reducer