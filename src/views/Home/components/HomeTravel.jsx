import { Link } from "react-router-dom";
import { useState } from "react";
import { travelsItems } from "../../js/TravelsArray";
import { motion } from "framer-motion";
import { TravelItemHomeInfo } from "./TravelItemHomeInfo";

export const HomeTravel = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const [localTravelsItems , setTravelsItems] = useState(travelsItems);

  const handleLikeClick = (travelIndex) => {
    setTravelsItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[travelIndex] = {
        ...newItems[travelIndex],
        like: !newItems[travelIndex].like,
      };
      return newItems;
    });
  };

  return (
    <div className="home-travel">
      <motion.ul
        className="home-travel__list"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {localTravelsItems .map((itemTravel, travelIndex) => (
          <motion.li
            key={itemTravel.id}
            variants={item}
            className="home-travel-item"
          >
            <Link to="/travel" state={itemTravel.id}>
              <img src={itemTravel.pathImg} alt="travel" />
              <TravelItemHomeInfo itemTravel={itemTravel} />
            </Link>

            <div className="home-travel-item-like">
              <span
                onClick={() => handleLikeClick(travelIndex)}
                className="material-icons-outlined"
              >
                {itemTravel.like ? "favorite" : "favorite_border"}
              </span>
            </div>

          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
