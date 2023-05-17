import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { RouterProvider } from 'react-router-dom'
import customRouter from './routing.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={customRouter}/> );

