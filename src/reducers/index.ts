import { combineReducers } from 'redux'
import counter from './counter'

const reducers = {
  counter
}

const rootReducers = combineReducers<typeof reducers>(reducers)
export type RootState = ReturnType<typeof rootReducers>

export default rootReducers