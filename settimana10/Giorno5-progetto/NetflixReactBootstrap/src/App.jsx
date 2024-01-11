// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import CustomHeader from './components/organisms/CustomHeader'
import CustomMain from './components/organisms/CustomMain'
import CustomFooter from './components/organisms/CustomFooter'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <CustomHeader/>
      <CustomMain />
      <CustomFooter/> 
    </>
  )
}

export default App
