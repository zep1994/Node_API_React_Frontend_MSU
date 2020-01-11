import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import guides from './reducers/data_reducer'

const reducers = combineReducers({ guides })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducers,
    composeEnhancers(
    applyMiddleware(thunk)
    )
)