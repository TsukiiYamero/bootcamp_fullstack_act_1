/* eslint-disable @typescript-eslint/no-unused-vars */
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppRouter } from './routes/Routes'
import { Context } from './context/Context'

function App() {

  return (
    <>
      {/* <h1>Aprendiendo Context Api 👋</h1> */}
      <Context.Provider value={{
        name: 'Diego',
      }}>
        <AppRouter />
      </Context.Provider>
    </>
  )
}

export default App
