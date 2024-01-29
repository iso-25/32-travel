import { TravelItemHeart } from "../../../components/Icons/TravelItemHeart";
import { TravelItemPoint } from "../../../components/Icons/TravelItemPoint";
import { TravelItemStar } from "../../../components/Icons/TravelItemStar";

export const TravelItemHomeInfo = ({ itemTravel }) => {
  return (
    <div className="home-travel-item-container">
      <div className="home-travel-item-like">
        <TravelItemHeart />
      </div>
      <div className="home-travel-item-info">
        <div className="home-travel-item-info__name">
          {itemTravel.name}
          <span>{itemTravel.nameSpan}</span>
        </div>
        <div className="home-travel-item-info__detail">
          <div className="place">
            <span>
              <TravelItemPoint />
            </span>
            {itemTravel.place}
          </div>
          <div className="rating">
            <span>
              <TravelItemStar />
            </span>
            {itemTravel.rating}
          </div>
        </div>
      </div>
    </div>
  );
};
