import React from "react";
import { CDN_URL } from "../utils/constants";

export const ResturauntCard = (props) => {
  const { resData } = props;
  const {
    name, cuisines, cloudinaryImageId, avgRating, costForTwo, deliveryTime,
  } = resData?.data;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL +
          cloudinaryImageId}
        alt="logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} starts</h4>
      <h4>{costForTwo / 100} FOR TWO</h4>
      <h4> {deliveryTime} mins</h4>
    </div>
  );
};
