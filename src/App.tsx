/* eslint-disable @typescript-eslint/no-unused-vars */
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppRouter } from './routes/Routes'
import { Context } from './context/Context'
import { Client } from './types'
import { useState } from 'react'

function App() {

  const [user, setUser] = useState<Client>({
    name: "Diego",
    id: "1",
    city: "Medellin",
    phone: "123456789",
    lastName: "Hernandez"
  });


  return (
    <>
      {/* <h1>Aprendiendo Context Api 👋</h1> */}
      <Context.Provider value={{
        user,
        setUser
      }}>
        <AppRouter />
      </Context.Provider>
    </>
  )
}

export default App
