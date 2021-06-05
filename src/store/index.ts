import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from '@/reducers'

const middlewares: any[] = []

if (process.env.NODE_ENV === 'development') {
	middlewares.push(require('redux-logger').createLogger())
}

const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
