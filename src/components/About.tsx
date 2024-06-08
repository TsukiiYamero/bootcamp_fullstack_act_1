import React from 'react'
import { useMyContext } from '../context/Context';

export const About = () => {
    const { user } = useMyContext();
    console.log(user);
    return (
        <div>
            <h1>About</h1>
            <p>
                Hola soy {user?.name}
            </p>
        </div>
    )
}
