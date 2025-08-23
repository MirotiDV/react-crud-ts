import {createSlice} from '@reduxjs/toolkit'

export interface User{
    name: string;
    email: string;
    github: string
}

export interface UserWithId extends User {
    id: string;
}

const initialState: UserWithId[]= [

  {
    id: "1",
    name: "Miguel Ángel",
    email: "Miguel@gmail.com",
    github: "MirotiDV",
  },
  {
    id: "2",
    name: "Alex Merc",
    email: "Alex@gmail.com",
    github: "AlexMR",
  },
  {
    id: "3",
    name: "Logan Moth",
    email: "Logan@gmail.com",
    github: "LoganMT",
  }
];

export const usersSLice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})


export default usersSLice.reducer