/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

export const FourthComponent = () => {

    const handleClicked = (e) => {
        alert("Has hecho click al botón!!");
    }

    const handleDoubleClicked = (e) => {
        alert("Has hecho doble click al botón");
    }
    const handleMouseEnter = (e) => {
        console.log("Has entrado a mi caja con el Mouse!! ")
    }

    const handleMouseLeave = (e) => {
        console.log("Has salido de mi caja!! ")
    }

    const handleMouse = (e, action) => {
        alert(`Has ${action} enn  la caja`);
    }

    const handleMouseCl = (e, action) => {
        console.log(`Has ${action} en mi la caja`);
    }

    const insideInput = (e) => {
        console.log("dentro del inpuuuuuuut!!");
    }

    const outsideInput = (e) => {
        console.log("saliste del input!!")
    }

    return (
        <div>
            <h2>Eventos en React</h2>
            <div>
                <button onClick={() => {
                    console.log("Hola, soy un evento Click!!");
                }}>Haz Click!!</button>
            </div>
            <div>
                <button onClick={handleClicked}>Aquí también haz Click!!</button>
            </div>

            <div>
                <button onDoubleClick={handleDoubleClicked}>Haz doble click!!</button>
            </div>

            <hr />
            <div id="box">
                <div id="box1"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <p>Pasa el Mouse por encima!!!</p>
                </div>
                <div id="box2"
                    onMouseEnter={e => handleMouse(e, "entrado a")}
                    onMouseLeave={e => handleMouse(e, "salido de")}
                >
                    <p>Pasa el Mouse por encima!!!</p>
                </div>
                <div id="box3"
                    onMouseEnter={e => handleMouseCl(e, "entrado a")}
                    onMouseLeave={e => handleMouseCl(e, "salido de")}
                >
                    <p>Pasa el Mouse por encima!!!</p>
                </div>
            </div>
            {/* Evento Focus y Blur se usan en el input */}
            <div className='mt-4'>
                <input type="text"
                    onFocus={insideInput}
                    onBlur={outsideInput}
                    placeholder='Escribe tu nombre'
                />
            </div>
        </div>
    )
}
