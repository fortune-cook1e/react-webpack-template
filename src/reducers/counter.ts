import { INCREMENT, DECREMENT } from '@/actions/const/counter'
import { ACTIONTYPE } from '@/actions/counter'

interface InitialState {
  number:number;
}

const initialState:InitialState = {
  number: 0
}

const actions = {
  [INCREMENT]: (state = initialState, action:ACTIONTYPE) => {
    const { payload } = action
    return {
      ...state,
      number: state.number + payload
    }
  },
  [DECREMENT]: (state = initialState, action:ACTIONTYPE) => {
    const { payload } = action

    return {
      ...state,
      number: state.number - payload
    }
  }
}

export default (state = initialState, action:ACTIONTYPE):InitialState => {
  const handler = actions[action.type]
  if (handler) {
    return handler(state, action)
  }
  return state
}