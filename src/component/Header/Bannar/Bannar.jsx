import React from 'react';
import { Link } from 'react-router';
import googlePlayImg from '../../../assets/google-play.png'
import appStoreImg from '../../../assets/app-store.png'
import BannerImg from '../../../assets/hero.png'

const Bannar = () => {
    return (
       <div>
      <div className="hero-content text-center mx-auto">
        <div className="max-w-md">
          <h1 className="text-5xl  font-bold">
            We Build <span className="text-purple-600  ">Productive</span> Apps
          </h1>
          <p className="py-6 text-[#627382] text-[15px]  ">
            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
          </p>
          <div className=" flex  justify-around">
            <Link to='https://play.google.com/store/games?hl=en'>
              <div className=" btn bg-[#D2D2D2] border ">
              <img className="w-6 h-6 object-cover" src={googlePlayImg} alt="" />
              <p className="text-black">Google Play</p>
            </div>
            </Link>
            <Link to='https://www.apple.com/app-store/'>
            <div className="btn bg-[#D2D2D2] border-2 ">
              <img className="w-6 h-6 object-cover" src={appStoreImg} alt="" />
              <p className="text-black">App Store</p>
            </div>
            </Link>
            
          </div>
        </div>
      </div>

      <div className="hero-content mx-auto pb-0 text-center">
        <div className="">
          <img src={BannerImg} alt="" />
        </div>
      </div>

      <div className=" bg-[#9F62F2] text-white mx-auto ">
        <h1 className="text-4xl text-center font-bold pt-10">Trusted by Millions, Built for You</h1>
        <div className="flex  gap-30 shadow w-full justify-center items-center pb-10 my-10">
          <div className=" text-center">
            <div className="text-[12px] font-[400px]"> Total Downloads</div>
            <div className="text-[50px] font-extrabold">31M</div>
            <div className="text-[12px] font-[400px]">From January 1st to February 1st</div>
          </div>

          <div className="text-center">
            <div className="text-[12px] font-[400px]">Total Reviews</div>
            <div className="text-[50px] font-extrabold">906K</div>
            <div className="text-[12px] font-[400px]">40% More Then Last Month</div>
          </div>

          <div className="text-center">
            <div className="text-[12px] font-[400px]">Active Apps</div>
            <div className="text-[50px] font-extrabold">132+</div>
            <div className="text-[12px] font-[400px]">31 more will Launch</div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Bannar;