/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

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


      <h1>Hello World - Diego Bello 👋</h1>
      <TestComp />

      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p> */}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export function TestComp() {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');


  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div>
      <input type="text" onChange={handleOnChange} value={text} />
      <button onClick={() => setText2(text)}>Save</button>

      <p>Texto inptu: {text}</p>
      <p>Texto {text2} </p>

    </div>
  )
}

export default App
