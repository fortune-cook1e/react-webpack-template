import {
	configureStore,
	getDefaultMiddleware,
	ThunkAction,
	Action
} from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import { useDispatch } from 'react-redux'

import rootReducer from './slices/index'

const loggerMiddleware = createLogger()

const middlewares = [...getDefaultMiddleware(), loggerMiddleware]

const store = configureStore({
	reducer: rootReducer,
	middleware: middlewares
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = (): any => useDispatch<AppDispatch>()
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store
