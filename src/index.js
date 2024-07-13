import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from '../src/components/login/Login'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([{
  path: "/",
  element: <App/>
},
{
  path: "/login",
  element: <Login/>
},
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

