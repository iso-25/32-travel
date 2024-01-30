import { Link } from "react-router-dom";
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

  return (
    <div className="home-travel">
      <motion.ul
        className="home-travel__list"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {travelsItems.map((itemTravel) => (
          <motion.li
            key={itemTravel.id}
            variants={item}
            className="home-travel-item"
          >
            <Link
              to={{
                pathname: "/travel",
                state: { id: itemTravel.id },
              }}
            >
              <img src={itemTravel.pathImg} alt="travel" />
              <TravelItemHomeInfo itemTravel={itemTravel} />
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
