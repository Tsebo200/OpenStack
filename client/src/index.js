import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/Pages/Login/Login';
import { Register } from './components/Pages/Register /Register';
// import App from './App';

import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            {/* <Route path="/" element={<App />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path='/Register' element={<Register />} />
        </Routes>
    </BrowserRouter>

);

