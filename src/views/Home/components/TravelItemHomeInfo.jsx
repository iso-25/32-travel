import { TravelItemImg } from "../../../components/Icons/TravelItemImg";

export const TravelItemHomeInfo = ({ itemTravel }) => {
  return (
    <div className="home-travel-item-container">
      <div className="home-travel-item-like">
        <TravelItemImg type="heart" />
      </div>
      <div className="home-travel-item-info">
        <div className="home-travel-item-info__name">
          {itemTravel.name}
          <span>{itemTravel.nameSpan}</span>
        </div>
        <div className="home-travel-item-info__detail">
          <div className="place">
            <span>
            <TravelItemImg type="point" />
            </span>
            {itemTravel.place}
          </div>
          <div className="rating">
            <span>
            <TravelItemImg type="star" />
            </span>
            {itemTravel.rating}
          </div>
        </div>
      </div>
    </div>
  );
};
