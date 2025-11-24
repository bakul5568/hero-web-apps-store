import React from "react";
import { Link } from "react-router";
import downloadImg from '../../assets/icon-downloads.png';
import ratingImg from '../../assets/icon-ratings.png';

const App = ({ app }) => {
  const { title, companyName, id, ratings, image, reviews } = app;
  return (
    <Link to={`/AppsDetails/${id}`}>
      <div className="card bg-base-100 w-70 shadow-sm">
        <figure>
          <img className="w-[250px] h-[250px]" src={image} alt="App" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {companyName}: {title}
          </h2>

          <div className="card-actions justify-between">
            <div className="badge badge-none bg-[#F1F5E8]">
              <img className="w-4 h-4" src={downloadImg} alt="" />
              <span className=" text-green-400">{reviews}</span>
            </div>
            <div className="badge badge-none bg-[#FFF0E1]">
              <img className="w-4 h-4" src={ratingImg} alt="" />
              <p className="text-[#FF8811]">{ratings.length}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default App;
