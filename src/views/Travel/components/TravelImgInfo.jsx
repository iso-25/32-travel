import { useState } from "react";
import { TravelItemImg } from "/src/components/Icons/TravelItemImg";

export const TravelImgInfo = ({ itemTravel, onClick }) => {
  const [isBookmark, setBookmark] = useState(false);

  return (
    <div className="travel-img-info">
      <div className="travel-img-info__hedear">
        <div className="travel-img-info__hedear-arrowLeft" onClick={onClick}>
          <TravelItemImg type="arrowLeft" />
        </div>
        <div className="travel-img-info__hedear-bookmark">
          <span
            onClick={() => setBookmark(!isBookmark)}
            className="material-icons-outlined"
          >
            {isBookmark ? "bookmark" : "bookmark_border"}
          </span>
        </div>
      </div>

      <div className="travel-img-info__info">
        <div className="info-nameTravel">
          <p>{itemTravel.nameTravel}</p>
          <div className="info-price">Price</div>
        </div>
        <div className="info-detail">
          <div className="place">
            <span>
              <TravelItemImg type="point" />
            </span>
            {itemTravel.place}
          </div>
          <div className="price-value">
            <span>{itemTravel.currency}</span>
            <p>{itemTravel.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
