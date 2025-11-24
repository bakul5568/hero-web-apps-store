import React, { useEffect, useState } from 'react';
import Bannar from '../../component/Header/Bannar/Bannar';
import { useLoaderData } from 'react-router';
import HomeApps from '../HomeApps/HomeApps';


const Home = () => {
    const data = useLoaderData();
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000 );
        return () => clearTimeout(timer);
    }, []);
    if (loading) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <h2 className="text-2xl font-semibold">Loading...</h2>
            </div>
        );
    }

    return (
        <div>
        <Bannar></Bannar>
        <HomeApps data={data} ></HomeApps>
        </div>
    );
};

export default Home;