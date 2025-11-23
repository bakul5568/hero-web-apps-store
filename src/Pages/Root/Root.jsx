import React from 'react';
import Navber from '../../component/Header/Navber/Navber';
import { Outlet } from 'react-router';
import Footer from '../../component/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;