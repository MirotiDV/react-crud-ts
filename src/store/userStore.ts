import {create} from 'zustand';

interface User {
    id: string;
    username: string;
    email: string;
    
}

interface userStore {
    users: User[] ;
    DEFAULT_STATE: User[];
    addUser: (user: User) => void;
    updateUser: (userId: string, updatedUser: User) => void;
    deleteUser: (userId: string) => void;
    
}

const DEFAULT_STATE: User[] = [

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

export const useUserStore = create<userStore>((set) => ({


    users: [],
    DEFAULT_STATE: DEFAULT_STATE,



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



}));