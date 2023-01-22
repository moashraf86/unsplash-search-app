import React from 'react'
import {createRoot} from 'react-dom/client'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import imagesReducer from './reducers'
import reduxThunk from 'redux-thunk'
import {App} from './App'
import './index.css'


const store = createStore(imagesReducer, applyMiddleware(reduxThunk))
const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>)