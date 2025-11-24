import React from 'react';
import {createBrowserRouter, RouterProvider } from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import HomeErrorPage from '../Pages/HomeErrorPage/HomeErrorPage';
import HomeAppsDetails from '../Pages/HomeAppsDetails/HomeAppsDetails';
import Apps from '../Pages/Apps/Apps';

import AppErrorPage from '../Pages/AppErrorPage/AppErrorPage';
import AppsDetails from '../Pages/AppsDetails/AppsDetails';
import Installation from '../Pages/Installation/Installation';


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
        },
        {
            path:'/HomeAppsDetails/:id',
        
            loader: () => fetch('../HomeApps.json'),
            Component: HomeAppsDetails
        },
        {
          path:'/Apps',
          Component:Apps
        },
        {
          path:'/AppsDetails/:id',
          Component:AppsDetails
          
        },
        {
            path:'/Installation',
            Component:Installation
        }
    ]
  },
]);