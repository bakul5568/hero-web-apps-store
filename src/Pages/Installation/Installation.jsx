import React, { useEffect, useState } from "react";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import { ToastContainer, toast } from "react-toastify";

const Installation = () => {
  const [installation, setInstallation] = useState([]);
  const [sortOrder, setSortOrder] = useState();

  useEffect(() => {
    const saveInstalled = JSON.parse(localStorage.getItem("installation"));
    if (saveInstalled) setInstallation(saveInstalled);
  }, []);


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

  const sortedItem = () => {
    if (sortOrder === "download-ase") {
      return [...installation].sort((a, b) => b.downloads - a.downloads);
    } else if (sortOrder === "download-dese") {
      return [...installation].sort((a, b) => a.downloads - b.downloads);
    } else return installation;
  };

  const handleRemove = (id) => {
    const intalledList = JSON.parse(localStorage.getItem("installation"));
    let updatedList = intalledList.filter((p) => p.id !== id);
    toast.success("Uninstalled");
    setInstallation(updatedList);
    localStorage.setItem("installation", JSON.stringify(updatedList));
  };

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="text-center mb-10 ">
        <h1 className="  text-[35px] font-bold">Your Installed Apps </h1>
        <p className="text-[#627382] font-[400px] text-[15px] ">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center">
        <p>Installation {installation.length}</p>
        <label className=" form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort-by</option>
            <option value="download-ase">High-&gt;Low</option>
            <option value="download-dese">Low-&gt;High</option>
          </select>
        </label>
      </div>

      <div className="my-7">
        {sortedItem().map((p) => (
          <div
            key={p.id}
            className="card flex p-5 mt-10 justify-between items-center card-side bg-base-300 shadow-sm"
          >
            <div className="flex gap-5 justify-center items-center">
              <figure>
                <img className="  w-25 h-25" src={p.image} alt="App" />
              </figure>

              <div>
                <h3 className="font-medium mb-3 text-[23px]">
                  {p.companyName}: {p.title}
                </h3>
                <div className=" flex  gap-3  items-center">
                  <div className=" flex gap-1 justify-center items-center">
                    <img className="w-4 h-4" src={downloadImg} alt="" />
                    <p className=" font-medium text-[13px]">{p.downloads}</p>
                  </div>
                  <div className=" flex gap-1 justify-center items-center">
                    <img className="w-4 h-4" src={ratingImg} alt="" />
                    <p className=" font-medium text-[13px]">
                      {p.ratings.length}
                    </p>
                  </div>
                  <div>
                    <p className=" font-medium text-[13px]">{p.size}MB</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <button
                onClick={() => handleRemove(p.id)}
                className="btn  bg-[#00D390] "
              >
                Uninstalled
              </button>
              {/* <ToastContainer /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
