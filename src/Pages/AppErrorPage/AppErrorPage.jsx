import React from 'react';
import AppErrorImg from '../../assets/App-Error.png'

const AppErrorPage = () => {
    return (
        <div className='my-10 text-center items-center'>
            <div className='hero-content  '>
                 <img className='h-[260px] w-[260px]' src={AppErrorImg} alt="" />
            </div>
            <h1 className=' mt-2 font-semibold text-[40px] '>Oops, page not found!</h1>
            <p className='text-[#627382] mt-2 font-[15px] text-[15px] '>The page you are looking for is not available.</p>
            <Link to='/'> <button className='btn bg-[#9F62F2] text-white mt-5' >Go Back!</button></Link>
           
        </div>
    );
};

export default AppErrorPage;