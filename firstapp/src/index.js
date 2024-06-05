import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layout.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Errorpage from './Errorpage';
import About from './Pages/About.js';
import Sports from './Pages/Sports.js';
import Entairtement from './Pages/Entairtainment.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SSRProvider } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SSRProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
           <Route index element={<Home/>}/>
           <Route path='About' element={<About/>}/>
           <Route path='Sports' element={<Sports/>}/>
           <Route path='Entairtement' element={<Entairtement/>}/>
           <Route path='*' element={<Errorpage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </SSRProvider>
);

// If you want to start measuricleng performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
