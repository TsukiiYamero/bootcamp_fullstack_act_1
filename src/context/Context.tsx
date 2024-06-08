/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext } from "react";
import { Client } from "../types";

export const Context = createContext<{
    user: Client | undefined, setUser: (user: Client) => void
}>(undefined!);

export const useMyContext = () => {
    const myContext = useContext(Context);

    if (myContext === null) {
        throw new Error("useMyContext must be used within a MyContextProvider");
    }

    return myContext
}