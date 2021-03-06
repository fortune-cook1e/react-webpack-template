import { INCREMENT, DECREMENT } from '@/actions/const/counter'

const initialState = {
  number: 0
}

const actions = {
  [INCREMENT]: (state = initialState, action) => {
    const { payload } = action
    return {
      ...state,
      number: state.number + payload
    }
  },
  [DECREMENT]: (state = initialState, action) => {
    const { payload } = action

    return {
      ...state,
      number: state.number - payload
    }
  }
}

export default (state = initialState, action) => {
  const handler = actions[action.type]
  if (handler) {
    return handler(state, action)
  }
  return state
}