/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useState } from "react";
import { useMyContext } from "../context/Context";
import { Client } from "../types";

export const Login = () => {
    const { setUser } = useMyContext();

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\s+/g, '').toLowerCase();
        setUsername(value);
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
        setName(value);
    };

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        setPhone(value);
    };

    const saveData = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const identified_user: Client = {
            name: username,
            lastName: name,
            phone: phone,
            id: '1',
            city: 'Medellin'
        };
        setUser(identified_user);
    };


    return (
        <div>
            <h1 className='text-center'>Login</h1>
            <form className='login' onSubmit={saveData}>
                <input
                    type="text"
                    name='username'
                    placeholder='username'
                    value={username}
                    onChange={handleUsernameChange}
                />
                <input
                    type="text"
                    name='names'
                    placeholder='Name and LasName'
                    value={name}
                    onChange={handleNameChange}
                />
                <input
                    type="text"
                    name='phone'
                    placeholder='Phone'
                    value={phone}
                    onChange={handlePhoneChange}
                />
                <input type='submit' value='Enviar' />
            </form>
        </div>
    )
}
