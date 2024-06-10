import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, } from 'react-router';
import { SSRProvider } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import Error from './MainComponent/Error';
import Home from './Pages/Home';
import About from './Pages/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<SSRProvider>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
</SSRProvider>
);
reportWebVitals();
