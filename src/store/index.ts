import {configureStore} from '@reduxjs/toolkit'
import usersReducer from "./users/slice"
import { Tuple } from '@reduxjs/toolkit';

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
    next(action);
    localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};


export const store = configureStore({

    reducer: {
        users: usersReducer,
    },
    middleware: ()=> {return new Tuple(persistanceLocalStorageMiddleware)}
});

//For solving typing problems

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch