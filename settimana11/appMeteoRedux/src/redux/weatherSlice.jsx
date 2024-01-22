import { createSlice } from "@reduxjs/toolkit";


export const weatherSlice = createSlice({
    name: 'weather',
    initialState : {
        coord: {},
        weather:[],
        base: "",
        main: {},
        visibility: 0,
        wind:{},
        clouds: {},
        dt: 0,
        sys: {},
        timezone: 0,
        id: 0,
        name: "",
        cod: 0
    
    },
    reducers: {
        setResultsWeather: (state, action) =>{
            return { ...state, ...action.payload };        
        },
    },
})

export const {setResultsWeather} = weatherSlice.actions;

export const weatherReducer = weatherSlice.reducer