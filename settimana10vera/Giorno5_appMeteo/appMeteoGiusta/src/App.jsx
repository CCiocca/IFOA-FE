import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomHeader from './components/organisms/CustomHeader'
import CustomFooter from './components/organisms/CustomFooter'
import DirectMain from './components/organisms/DirectMain'
import WeatherMain from './components/organisms/WeatherMain'
import ForecastMain from './components/organisms/ForecastMain'
import NotFound from './components/organisms/NotFound'
import HomeMain from './components/organisms/HomeMain'


function App() {

  return (
    <>
        <BrowserRouter>
          {/* <CustomHeader/> */}
            <Routes>
              <Route path='/' element={<HomeMain />}/>
              <Route path='/geo/1.0/direct' element={<DirectMain />}/>
              <Route path='/data/2.5/weather' element={<WeatherMain />}/>
              <Route path='/data/2.5/forecast' element={<ForecastMain />}/>
              <Route path='*' element={<NotFound />}/>

            </Routes>
          {/* <CustomFooter/> */}
        </BrowserRouter>
    </>
  )
}

export default App
