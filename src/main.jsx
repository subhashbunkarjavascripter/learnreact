import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import {store} from './store/store.jsx';


createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <App />
  </Provider>,
)
