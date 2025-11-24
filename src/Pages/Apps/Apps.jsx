import React, { useState } from 'react';
import useApps from '../../Hooks/useApps';
import App from '../App/App';
import { Link } from 'react-router';

const Apps = () => {
   const { apps } = useApps();
   

  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;
    return (
        <div className="max-w-6xl mx-auto">
      <div>
        <div className="text-center my-15  text-[45px] font-bold">
          <h1>Our All Applications</h1>
        </div>

        <div className="flex justify-between items-center">
          <p className=" text-[20px] font-medium ">
            ({searchedApps.length}) App Found
          </p>

          <label className="input ">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>

            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSearchLoading(true);
                setTimeout(() => setSearchLoading(false));
              }}
              type="search"
              required
              placeholder="Search"
            />
          </label>
        </div>
      </div>

      {searchLoading ? (
        <div className="flex flex-col items-center mt-10 gap-3">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="text-center text-xl">Searching...</p>
        </div>
      ) : searchedApps.length === 0 ? (
        <div className="text-center text-xl mb-20 mt-10 font-semibold">
           <p className=' text-red-500 font-bold text-[35px]'> No App Pound </p>
           <Link to='/'><button className='btn bg-purple-600 text-white mt-3'>Show Home Page</button></Link>
        </div>
      ) : (
        <div className="grid gap-5 grid-cols-2 md:grid-cols-4 ml-10 md:ml-0 mt-5">
          {searchedApps.map((app) => (
            <App key={app.id} app={app}></App>
          ))}
        </div>
      )}
    </div>
    );
};

export default Apps;