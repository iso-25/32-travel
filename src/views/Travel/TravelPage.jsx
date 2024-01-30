import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { TravelImgInfo } from "./TravelImgInfo";
import { travelsItems } from "../js/TravelsArray";
import React, { useState } from "react";
import { TravelItemImg } from "/src/components/Icons/TravelItemImg";

export const TravelPage = (props) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const location = useLocation();
  const id = location.state && location.state.id;
  // const travel = travelsItems.find((item) => item.id === parseInt(id));
  const travel = travelsItems.find((item) => item.id === parseInt("2"));

  const [isOverview, setIsClicked] = useState(true);
  const handleOnClickOverview = () => {
    setIsClicked(true);
  };
  const handleOnClickDetails = () => {
    setIsClicked(false);
  };

  return (
    <>
      {/* <button onClick={handleGoBack}>Back</button> */}
      {/* <div>Travel</div> */}
      <div className="travel">
        <div className="travel__img">
          <img src={travel.pathImgTravel} alt="travel" />
          <TravelImgInfo itemTravel={travel} onClick={handleGoBack} />
        </div>

        <div className="travel__type-info">
          <p
            className={`overview ${isOverview ? "active-type" : ""}`}
            onClick={handleOnClickOverview}
          >
            Overview
          </p>
          <p
            className={`details ${isOverview ? "" : "active-type"}`}
            onClick={handleOnClickDetails}
          >
            Details
          </p>
        </div>

        <div className="travel__indexes">
          <div className="time">
            <span>
              <TravelItemImg type="clock" />
            </span>
            {travel.time} hours
          </div>
          <div className="temp">
            <span>
              <TravelItemImg type="cloud" />
            </span>
            {travel.temperature} &nbsp; <small className="cels">&deg;</small>C
          </div>
          <div className="rating">
            <span>
              <TravelItemImg type="star2" />
            </span>
            {travel.rating}
          </div>
        </div>

        <div className="travel__desc">
          {isOverview ? travel.overviev : travel.details}
        </div>

        <div className="travel__btn">
          <div className="travel__btn-txt">
            Book Now
            <span>
              <TravelItemImg type="smg" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
