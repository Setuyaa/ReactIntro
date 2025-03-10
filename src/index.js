// import {rerenderEntireTree} from './render'
import store from './redux/redux-store';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => { 
  root.render(
    <React.StrictMode>
      <App state={state} 
           dispatch={store.dispatch.bind(store)}
           store={store} />
    </React.StrictMode>
  );
}
rerenderEntireTree(store.getState());

store.subscribe( () => {
  let state = store.getState();
  rerenderEntireTree(state);
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
