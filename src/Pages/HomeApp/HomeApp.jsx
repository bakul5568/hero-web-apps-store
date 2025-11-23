import React from 'react';
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../..//assets/icon-ratings.png'
import { Link } from 'react-router';

const HomeApp = ({singleApp}) => {
    const { title, companyName,id, ratings, image, downloads } = singleApp;
    return (
        <Link to={`/HomeAppDetails/${id}`}>
       <div className="card bg-base-300 p-3 w-70 shadow-sm">
      <figure>
        <img className="w-[250px] h-[250px]" src={image} alt="App" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {companyName}: {title}
        </h2>

        <div className="card-actions justify-between">
          <div className="badge badge-outline bg-[#F1F5E8]">
            <img className="w-4 h-4" src={downloadImg} alt="" />{" "}
            <span className=" text-green-400">{downloads}</span>{" "}
          </div>
          <div className="badge badge-outline bg-[#FFF0E1]">
            <img className="w-4 h-4" src={ratingImg} alt="" />
            <p className="text-[#FF8811]">{ratings.length}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
    );
};

export default HomeApp;