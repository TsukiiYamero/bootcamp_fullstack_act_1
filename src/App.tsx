
import { useState } from 'react';
import './App.css'
import { Persons } from './components/Persons'


function App() {
  const [persons, setPersons] = useState([{
    id: 1,
    name: "Diego",
    role: "Developer",
    img: 'https://bootdey.com/img/Content/avatar/avatar6.png'
  }, {
    id: 2,
    name: "Shizuka",
    role: "Backend Developer",
    img: 'https://bootdey.com/img/Content/avatar/avatar4.png'
  }, {
    id: 3,
    name: "Kafka",
    role: "UI/UX Designer",
    img: 'https://bootdey.com/img/Content/avatar/avatar4.png'
  }, {
    id: 4,
    name: "Acheron",
    role: "Project Manager",
    img: 'https://bootdey.com/img/Content/avatar/avatar1.png'
  }]);


  return (
    <div className='App'>
      <div className='container'>
        <Persons persons={persons} setPersons={setPersons} ></Persons>

      </div>
    </div>
  )
}

export default App
