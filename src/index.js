import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from '../src/components/login/Login'
import Register from '../src/components/register/Register'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ApplicationForm from './ApplicationForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([{
  path: "/",
  element: <App/>
},
{
  path: "/login",
  element: <Login/>
},
{
  path: "/applicationForm",
  element: <ApplicationForm/>
},
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

