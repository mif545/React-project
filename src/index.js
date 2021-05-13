import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import {errorReducer,taskReducer,userReducer} from './store/reducers'
import thunk from 'redux-thunk'
import {BrowserRouter  } from 'react-router-dom';
import { dialogReducer } from './store/reducers/dialog';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(combineReducers({user:userReducer,error:errorReducer,task:taskReducer,dialog:dialogReducer}),composeEnhancers(
  applyMiddleware(thunk)
));


ReactDOM.render(
  <React.StrictMode>
  
    <Provider store={store }>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
