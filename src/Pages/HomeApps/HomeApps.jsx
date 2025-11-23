import React from 'react';
import { Link } from 'react-router';
import HomeApp from '../HomeApp/HomeApp';


const HomeApps = ({data}) => {
    
    return (
         <div className='max-w-6xl mx-auto'>
            <div className='text-center my-10 '>
                <h1 className='text-[40px] font-bold  '>Trending Apps</h1>
                <p className='text-[#627382] font-[400px] text-[15px] ' >Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid gap-8  grid-cols-2 md:grid-cols-4 ml-10 md:ml-0 mt-5 '>

                {
                data.map(singleApp=><HomeApp key={singleApp.id} singleApp={singleApp}></HomeApp>)
                }
            </div>
            <div className='text-center my-15'>
               <Link to={`/Apps`}><button className="btn bg-purple-600 btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Show All</button></Link> 
            </div>
            
        </div>
    );
};

export default HomeApps;