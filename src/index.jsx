import React from 'react';
import { createRoot } from 'react-dom/client';
import { rootReducer } from './components/reducers/rootReducer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer
})


import App from './components/app';

const root = createRoot(document.getElementById('main'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
    
);