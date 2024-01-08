import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import ButtonComponent from './components/ButtonComponent'
import ImageComponent from './components/ImageComponent'

function App() {
  // const [count, setCount] = useState(0)

  const thisIsButtonText = `Ti riocordi Alf? L'hanno rifatto`

  const imageSourceUrl = "https://www.my-personaltrainer.it/2023/11/10/razze-di-cani-che-soffrono-meno-la-solitudine_900x760.jpeg"
  const imageAlternativeText = "io sono la spilletta di Alf"

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <Button/> */}
        <ButtonComponent buttonText={thisIsButtonText}/>
        <hr />
        <ImageComponent imageSource={imageSourceUrl} imageAlternative={imageAlternativeText}/>
       
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
