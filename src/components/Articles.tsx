import React from 'react'
import { useMyContext } from '../context/Context';

export const Articles = () => {
    const { user } = useMyContext();
    console.log(user);
    return (
        <div>
            <h1>Articulaciones hahaha</h1>
            <p>
                Hola soy {user?.name} {user?.lastName}
            </p>
            <p>
                mi celu es {user?.phone}
            </p>

        </div>
    )
}
