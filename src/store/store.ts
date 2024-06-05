import { configureStore } from "@reduxjs/toolkit";
import { counter, user } from "./slice"

export const store = configureStore({
    reducer: {
        counter: counter,
        user
    },
})