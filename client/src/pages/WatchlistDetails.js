import React from "react";
import AuthedNavbar from "../components/navbar/AuthedNavbar";
import { getWatchlist } from "../api/watchlistAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Movies from "../components/movie/Movies";

const WatchlistDetails = ({ _id, name }) => {
  const auth = useAuth();

  const { wlid } = useParams();
  const [wl, setWl] = React.useState(null);
  const [wlNewName, setWlNewName] = React.useState(null);
  const [shared, setShared] = React.useState(false);
  const [searchMovie, setSearchMovie] = React.useState("");

  const updateWl = () => {
    //deleteWatchlist(auth.user, _id).then(() => refreshWatchlists());
  };

  //initialize watchlist via api on load
  useEffect(() => {
    getWatchlist(auth.user, wlid).then((val) => {
      setWl(val);
      setWlNewName(val.name);
    });
  }, []);

  const toggleShare = () => {
    console.log("toggling share");
  };

  const searchMovieHandler = (val) => {};

  return (
    <div className="">
      <div className="">
        <AuthedNavbar></AuthedNavbar>
      </div>
      <div className="flex container justify-center">
        <div className="flex-col m-4 w-2/3">
          <div className="basis-1/2 mb-8">
            <form>
              <div className="justify-between ">
                <div className="flex flex-row rounded-lg dark:bg-gray-300 dark:text-gray-700 shadow p-4 justify-between">
                  <div className="mt-1">
                    {wl != null && (
                      <span className="text-xl ">{wl.name} Details</span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="text-s mr-2">
                        {shared ? "Public" : "Private"}
                      </span>{" "}
                      <input
                        type="checkbox"
                        className="toggle"
                        onChange={toggleShare()}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div>
            <div className="basis-1/2 flex flex-col rounded-lg dark:bg-gray-300 dark:text-gray-700 shadow p-4 justify-between">
              <span className=" text-xl">Movies</span>
              <div className="flex-row w-full">
                <input type="text basis-5/6 rounded-md"></input>
                <button className="btn-primary basis-1/6 w-8 rounded-md m-2">
                  +
                </button>
              </div>
              <div>
                <Movies _id={wlid}></Movies>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchlistDetails;
