import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

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

export type UserId = string

export const usersSLice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      deleteUserById: (state, action: PayloadAction<UserId>) => {
        const id = action.payload;
        return state.filter((user) => user.id != id)
      }
    }
})


export default usersSLice.reducer

export const {deleteUserById} = usersSLice.actions