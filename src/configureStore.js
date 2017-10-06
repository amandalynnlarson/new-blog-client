import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import postFormData from './reducers/postFormData'

const reducers = combineReducers([
  postFormData
])

const middleware = [thunk];

export default createStore(
  reducers,
  applyMiddleware(...middleware),
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
)
