import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../../Hooks/useApps";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ToastContainer, toast } from 'react-toastify';
import AppErrorPage from "../AppErrorPage/AppErrorPage";

const AppsDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const [isInstalled, setIsInstalled] = useState(false);
  console.log(apps)
const singleApp = apps.find((app) => String(app.id) === id);
  console.log(singleApp)

 useEffect(() => {
    const installationList =
      JSON.parse(localStorage.getItem("installation")) || [];
    const alreadyInstalled = installationList.some(
      (p) => p.id === singleApp?.id
    );
    setIsInstalled(alreadyInstalled);
}, [singleApp,]);

  const handleAddToInstalation = () => {
    const installationList =
      JSON.parse(localStorage.getItem("installation")) || [];

    const isDuplicate = installationList.some((p) => p.id === singleApp.id);
    if (isDuplicate) return;

    const updatedList = [...installationList, singleApp];

    localStorage.setItem("installation", JSON.stringify(updatedList));

    setIsInstalled(true);
    toast.success("Installed")
  };

 
  if (loading) return <p> Loading.....</p>;
  if(!singleApp){
    return <AppErrorPage></AppErrorPage>
 }
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
  } = singleApp || {};

  const colors = ["#ff9000", "#ff9000", "#ff9000", "#ff9000", "#ff9000"];

  return (
    <div className="max-w-6xl my-10 mx-auto">
      <div className="flex gap-8 ">
        <div>
          <img className="w-[290px] h-[290px]  " src={image} alt="" />
        </div>
        <div>
          <h1 className=" font-bold text-[30px] ">
            {companyName}: {title}
          </h1>
          <p className=" font-[400px] text-[#627382] text-[15px] my-3 ">
            Developed by{" "}
            <span className="text-[15px] text-purple-600 font-[400px]">
              {companyName}.io
            </span>
          </p>
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
              <p className=" font-extrabold text-[30px]  ">{ratingAvg}</p>
            </div>
            <div>
              <img className=" w-7 h-7" src={reviewImg} alt="" />
              <p className=" font-[400px] text-[12px] mt-2 ">Total Reviews</p>
              <p className=" font-extrabold text-[30px]  ">{reviews}</p>
            </div>
          </div>
          <button
            onClick={handleAddToInstalation}
            disabled={isInstalled}
            className={`btn m-0 sm:btn-sm md:btn-md lg:btn-lg font-semibold text-[20px] xl:btn-xl ${
              isInstalled
                ? "bg-[#00D390] text-white cursor-not-allowed"
                : "bg-[#00D390] text-white"
            }`}
          >
            {isInstalled ? "Installed" : `Install Now (${size}MB)`}
          </button>
          {/* <ToastContainer/> */}
        </div>
      </div>

      <div className="border w-full my-6 border-gray-300"></div>
      <div>
        <p className="font-medium text-xl mb-2">Ratings</p>
        <div className="w-full h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[...(ratings || [])].reverse()}
              layout="vertical"
              margin={{ top: 10, right: 20, left: 40, bottom: 10 }}
            >
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Bar dataKey="count" barSize={20}>
                {[...(ratings || [])].reverse().map((entry, index) => (
                  <Cell key={index} fill={colors[index]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div>
        <p className=" font-medium ">Description</p>
        <p className="text-[#627382] font-[400px] text-[15px] mt-4 ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppsDetails;
