/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../store/slice";

export const Users = () => {

    const name = useSelector((state: any) => state.user.name);
    const dispatch = useDispatch();

    const handleSetName = () => {
        const newName = prompt("Enter your name: ");
        dispatch(setName(newName));
    };

    return (
        <div>
            <h1>User: {name}</h1>
            <div>
                <button onClick={handleSetName}>Set Name: </button>
            </div>
        </div>
    )
}