import React from 'react';
import reviewImg from '../../assets/icon-review.png'
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
import { useLoaderData, useParams } from 'react-router';
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const HomeAppsDetails = () => {
    const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const singleAppdetails = data.find((App) => App.id === appId);
  const {
    image,
    title,
    companyName,
    description,
    reviews,
    ratings,
    downloads,
    size,
  
    ratingAvg,
  } = singleAppdetails;
  const colors = ["#ff9000", "#ff9000", "#ff9000", "#ff9000", "#ff9000"];
    return (
        <div className="max-w-6xl my-10 mx-auto">
      <div className="flex gap-8 ">
        <div>
          <img className="w-[290] h-[290px]  " src={image} alt="" />
        </div>
        <div>
          <h1 className=" font-bold text-[30px] ">
            {companyName}: {title}
          </h1>
          <p className="font-[400px] text-[#627382] text-[15px] my-3 ">Developed by <span className="text-[15px] text-purple-600 font-[400px]">{companyName}.io</span></p>
          <div className="border w-[800px] border-gray-300"></div>
          <div className="flex gap-5 my-5">
            <div>
              <img className=" w-7 h-7" src={downloadImg} alt="" />
              <p className=" font-[400px] text-[12px] mt-2 ">Downloads</p>
              <p className=" font-extrabold text-[30px]  ">{downloads}</p>
            </div>
            <div>
              <img className=" w-7 h-7" src={ratingImg} alt="" />
              <p className=" font-[400px] text-[12px] mt-2 ">Average Rating</p>
              <p className=" font-extrabold text-[30px]  " >{ratingAvg}</p>
            </div>
            <div>
              <img className=" w-7 h-7" src={reviewImg} alt="" />
              <p className=" font-[400px] text-[12px] mt-2 ">Total Reviews</p>
              <p className=" font-extrabold text-[30px]  ">{reviews}</p>
            </div>
          </div>
          <button className="btn text-white bg-[#00D390] m-0 sm:btn-sm md:btn-md lg:btn-lg font-semibold text-[20px] xl:btn-xl">Install Now  ({size}MB)</button>
        </div>
      </div >
        
      <div className="border w-full my-6 border-gray-300"></div>
       <div>
              <p className="font-medium text-xl mb-2">Ratings</p>
              <div className="w-full h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[...ratings].reverse()}
                    layout="vertical"
                    margin={{ top: 10, right: 20, left: 40, bottom: 10 }}
                  >
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Bar dataKey="count" barSize={20}>
                      {[...ratings].reverse().map((entry, index) => (
                        <Cell key={index} fill={colors[index]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
      <div>
        <p className=" font-medium " >Description</p>
        <p className="text-[#627382] font-[400px] text-[15px] mt-4 ">{description}</p>
      </div>

    </div>
    );
};

export default HomeAppsDetails;