import React from 'react';
import { createRoot } from 'react-dom/client';
import { rootReducer } from './components/reducers/rootReducer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// import { useNavigate } from 'react-router-dom';

const store = configureStore({
  reducer: rootReducer
})

// const navigate = useNavigate();

const token = localStorage.getItem('token');
if(token){
  store.dispatch({type: ActionTypes.AUTH_USER})
  // navigate('/posts')
}


import App from './components/App';
import { ActionTypes } from './components/actions/actions';
import { useNavigate } from 'react-router-dom';

const root = createRoot(document.getElementById('main'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
    
);
