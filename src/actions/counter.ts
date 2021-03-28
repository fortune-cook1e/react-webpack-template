import { INCREMENT, DECREMENT } from './const/counter'

export type ACTIONTYPE =
 | {type:typeof INCREMENT;payload:number}
 | {type:typeof DECREMENT;payload:number}

export type Payload = number

export const increment = (payload:Payload):ACTIONTYPE => {
  return {
    type: INCREMENT,
    payload
  }
}

export const decrement = (payload:Payload):ACTIONTYPE => {
  return {
    type: DECREMENT,
    payload
  }
}