import React from 'react';
import {createBrowserRouter, RouterProvider } from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import HomeErrorPage from '../Pages/HomeErrorPage/HomeErrorPage';


 export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<HomeErrorPage></HomeErrorPage>,
    children:[
        {
            index:true,
            path:'/',
            loader: () => fetch('../HomeApps.json'),
            Component:Home
        }
    ]
  },
]);