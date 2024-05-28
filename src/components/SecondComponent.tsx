import React, { useState } from 'react'

export const SecondComponent = () => {
    const [name, setName] = useState("Diego BELLO");
    const [isNameChanged, setIsNameChanged] = useState(false);

    const changeName = () => {
        if (isNameChanged) {
            setName("Diego BELLO");
        } else {
            setName("Cualquier randoms");
        }
        setIsNameChanged(!isNameChanged);
    }

    return (
        <div>
            <h3>Componente: SecondComponent</h3>
            <p>{name}</p>
            <div>
                <button className='button-large' onClick={changeName}>Cambiar nombre</button>
            </div>
        </div>
    )
}