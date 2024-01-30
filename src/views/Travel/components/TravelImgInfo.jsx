import { TravelItemImg } from "/src/components/Icons/TravelItemImg";

export const TravelImgInfo = ({ itemTravel, onClick }) => {
  return (
    <div className="travel-img-info">
      <div className="travel-img-info__hedear">
        <div className="travel-img-info__hedear-arrowLeft" onClick={onClick}>
          <TravelItemImg type="arrowLeft" />
        </div>
        <div className="travel-img-info__hedear-bookmark">
          <TravelItemImg type="bookmark" />
        </div>
      </div>

      <div className="travel-img-info__info">
        <div className="info-nameTravel">
          {itemTravel.nameTravel}
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
            {itemTravel.price}
          </div>
        </div>
      </div>
    </div>
  );
};
