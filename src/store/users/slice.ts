import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

const DEFAULT_STATE = [

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

export interface User{
    name: string;
    email: string;
    github: string
}

export interface UserWithId extends User {
    id: string;
}

const initialState: UserWithId[]= (() => {
  const persistedState = localStorage.getItem("__redux__state__");
  return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

export type UserId = string




export const usersSLice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      addNewUser: (state, action: PayloadAction<User>) => {
        const id = crypto.randomUUID()
        return [...state, {id, ...action.payload}]
      },
      deleteUserById: (state, action: PayloadAction<UserId>) => {
        const id = action.payload;
        return state.filter((user) => user.id != id)
      }
    }
})


export default usersSLice.reducer

export const {addNewUser, deleteUserById} = usersSLice.actions