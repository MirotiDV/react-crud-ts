import {create} from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface User {
    id: string;
    username: string;
    email: string;
}

interface userStore {
    users: User[] ;
    DEFAULT_STATE: [];
    addUser: (user: User) => void;
    updateUser: (userId: string, updatedUser: User) => void;
    deleteUser: (userId: string) => void;
    isVisible: boolean;
    toggleVisibility: () => void;
    
}

const DEFAULT_STATE = [

        {
            id: "1",
            username: "Miguel Ángel",
            email: "Miguel@gmail.com",
        },
        {
            id: "2",
            username: "Alex Merc",
            email: "Alex@gmail.com",
        },
        {
            id: "3",
            username: "Logan Moth",
            email: "Logan@gmail.com",
        }
    ];

const initialState: User[] = (() => {
    const persistedState = localStorage.getItem('userStore');
    return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();


//revisar el persist, funciona pero guarda el nombre como undefined 
export const useUserStore = create<userStore>(persist((set) => ({


    users: initialState,
    DEFAULT_STATE: [],
    initialState: [],
    isVisible: false,
    



    //ACTIONS

    

    addUser: (user) => {set((state) => ({
        users: state.users.includes(user) 
        ? state.users
        : [...state.users, user]
    }))},
    //REVISAR FUNCION ADDUSER PORQUE SE SOBREESCRIBE Y RECARGA AL AÑADIR UN NUEVO USUARIO

    updateUser: (userId, updatedUser) => {set((state) => ({
        users: state.users.map((user) => user.id === userId ? updatedUser : user)
    }))},

    deleteUser: (userId) => {set((state) => ({
        users: state.users.filter((user) => user.id !== userId)
    }))},

    toggleVisibility: () => set((state) => ({ isVisible: !state.isVisible})),



})),
 {
    name: 'userStore',
    storage: createJSONStorage(() => localStorage),
 });