import React, { useState } from "react";
import { ResturauntCard } from "./ResturauntCard";
import resList from "../utils/mockData";

export const Body = () => {
  let [listOfRestaurants, setListOfResturaunts] = useState(resList);
  let [isFiltered, setIsFiltered] = useState(false);
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button className="filter-btn" onClick={
          () =>{
            setListOfResturaunts(listOfRestaurants.filter((res) => res.data.avgRating>4))
            setIsFiltered(true);
          }
        }>Top Rated Resturaunt</button>
        {isFiltered && <button className="filter-btn-remove" onClick={
          () =>{
            setListOfResturaunts(resList)
            setIsFiltered(false);
          }
        }>Remove filter</button>}
      </div>
      <div className="res-container">
        {listOfRestaurants.map((res) => (
          <ResturauntCard resData={res} key={res.data.id} />
        ))}
      </div>
    </div>
  );
};
