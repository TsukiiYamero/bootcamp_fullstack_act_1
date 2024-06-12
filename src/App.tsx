/* eslint-disable @typescript-eslint/no-unused-vars */
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppRouter } from './routes/Routes'
import { Context } from './context/Context'
import { Client } from './types'
import { useEffect, useState } from 'react'

function App() {

  const [user, setUser] = useState<Client>();


  useEffect(() => {
    if (!user) return

    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    const JsonData = localStorage.getItem('user');
    if (!JsonData) return;

    const user = JSON.parse(JsonData);
    console.log(user);
    setUser(user);
  }, []);

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
