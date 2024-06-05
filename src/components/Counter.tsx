/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/slice';

export const Counter = () => {
    const count = useSelector((state: any) => state?.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Count: {count}</h1>
            <br />
            <button onClick={() => dispatch(increment())}>Sumar</button>
            <button onClick={() => dispatch(decrement())}>Restar</button>
        </div>
    )
}
