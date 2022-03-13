import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
//import { CreateStore, combineReducers } from 'redux';
import HomeReducer from './reducers/HomeReducer';
import  PageTwo  from './PageTwo'
import  PageThree  from './PageThree'
import ShowCard from './ShowCard';
// const reducers =combineReducers({
//   HomeReducer: HomeReducer
// });
// const store = CreateStore(reducers);
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ShowCard />
    {/* <App />
    <PageTwo />
    <PageThree /> */}
     </BrowserRouter>
     
     </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
