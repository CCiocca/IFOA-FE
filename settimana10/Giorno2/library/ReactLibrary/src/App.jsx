import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBarComponent from './components/NavBarComponent';
import Main from './components/Main';
import FooterComponent from './components/FooterComponent';


function App() {

  const [title, setTitle] = useState('Libreria del Centro')
  useEffect(() =>{
    document.title = title
  },[title])

  return (
    <>
      <NavBarComponent/>
      <Main setPageTitle={setTitle}/>
      <FooterComponent />
    </>
  )
}

export default App
