import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { TravelImgInfo } from "./components/TravelImgInfo";
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

  const [isOverview, setOverview] = useState(true);

  return (
    <>
      <div className="travel">
        <div className="travel__img">
          <img src={travel.pathImgTravel} alt="travel" />
          <TravelImgInfo itemTravel={travel} onClick={handleGoBack} />
        </div>

        <div className="travel__type-info">
          <p
            onClick={() => setOverview(true)}
            className={`overview ${isOverview ? "active-type" : ""}`}
          >
            Overview
          </p>
          <p
            onClick={() => setOverview(false)}
            className={`details ${isOverview ? "" : "active-type"}`}
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
          <div className="travel__desc-txt">
          {isOverview ? travel.overviev : travel.details}
          </div>
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
