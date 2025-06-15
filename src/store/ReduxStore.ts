import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { AuthApi } from '../pages/notesAuth/redux/redux'
import { NotesApi } from '../pages/Home/redux/redux'

export const store = configureStore({
  reducer: {
    [AuthApi.reducerPath]: AuthApi.reducer,
    [NotesApi.reducerPath]: NotesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware,NotesApi.middleware),
})

setupListeners(store.dispatch)