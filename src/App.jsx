/* eslint-disable @typescript-eslint/no-unused-vars */
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FourthComponent } from './components/FourthComponent';
import { Child } from './components/Child';
import { SecondComponent } from './components/SecondComponent';
import { ThirdComponent } from './components/ThirdComponent';
import { MyComponent } from './components/MyComponent';
import { useState } from 'react';
const medicalRecord = {
  height: "170",
  bloodGroup: "o+",
  allergies: "None"
}

function App() {
  const [name, setName] = useState("diego");
  const [message, setMessage] = useState("");

  const addMessage = (message) => {
    console.log(message);
    setMessage(message);
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>
            Estructura inicial del proyecto y limpia.
          </p>
          <div>
            <hr />
            <FourthComponent />
            <hr />
          </div>
          <h2>Mensaje del hijo: </h2>
          <p>{message}</p>
          <Child name={name} setName={setName} addMessage={addMessage} />
          <SecondComponent />
          <ThirdComponent
            name="Inés"
            lastName="Oliveros"
            card={medicalRecord}
          />
          <MyComponent />
        </header>


      </div>
    </>
  )
}

export default App
