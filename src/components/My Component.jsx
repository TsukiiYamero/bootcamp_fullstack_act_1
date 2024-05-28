import React from 'react'

const MyComponent = () => {

    const name = 'Diego';
    const reposiorty = 'bootcamp_fullstack';
    const miPersonaje = {
        name: 'Diego',
        age: 26,
        hairColor: 'brown',
        isMarried: false
    }

    return (
        <div>
            <hr />
            <p>Este es mi 155754 Componente</p>
            <h2>Me quiero suic....</h2>
            <ul>
                <li>Componentes</li>
                <li>Eventos</li>
                <li>Estados</li>
                <li>Comunicacion</li>
            </ul>

            <h2>Hola {name}</h2>

            <p>Repositorio: {reposiorty}</p>

            <h2>Personajes</h2>
            <p>
                Nombre: {miPersonaje.name}
                <br />
                Edad: {miPersonaje.age}
                <br />
                Cabello: {miPersonaje.hairColor}
                <br />
                Casado: {miPersonaje.isMarried ? 'Si' : 'No'}
            </p>
        </div>
    )
}

export default MyComponent;