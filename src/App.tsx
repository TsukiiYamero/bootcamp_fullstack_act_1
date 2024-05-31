/* eslint-disable @typescript-eslint/no-unused-vars */
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RandomUser } from './component/RandomUser'
import { Beers } from './component/Beers'

function App() {

  return (
    <div className='continer'>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>


      <h1>Hello World - Diego Bello 👋</h1>

      <div className='continer'>
        <div>
          <Beers />
        </div>

        <div className="">
          <h2>Fetch</h2>
          <RandomUser />
        </div>
      </div>
    </div>
  )
}

export default App
