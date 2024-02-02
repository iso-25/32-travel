import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { animated, useTransition } from "react-spring";
import { Home } from "./views/Home/Home";
import { History } from "./views/History/History";
import { Heart } from "./views/Heart/Heart";
import { Profile } from "./views/Profile/Profile";
import { TravelPage } from "./views/Travel/TravelPage";
import { SplashScreen } from "./components/SplashScreen";
import { MenuIcon } from "./components/Icons/MenuIcon";

const AnimatedRoutes = () => {
  const location = useLocation();

  const transitions = useTransition(location, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-100%,0,0)" },
    config: { duration: 100 },
  });

  return transitions((style, item) => (
    <animated.div style={style}>
      <Routes location={item}>
        <Route path="/" element={<Home />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/history" element={<History />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </animated.div>
  ));
};

function App() {
  const location = useLocation();
  const currentUrl = location.pathname;
  const [isSpinner, setIsSpinner] = useState(true);
  const [otherPages, setOtherPages] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsSpinner(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (currentUrl !== "/" && currentUrl !== "/history" && currentUrl !== "/heart" && currentUrl !== "/profile") {
      setOtherPages(true);
    } else {
      setOtherPages(false);
    }
  }, [currentUrl]);


  return (
    <>
      {!isSpinner && (
        <>
        <div className={`wrapper ${ otherPages ? "other-pages" : ""}`}>
          <AnimatedRoutes />
          {currentUrl !== "/travel" && (
            <header>
              <NavLink exact activeClassName="is-active" to="/">
                <span className="header-app">
                  <MenuIcon type="home" />
                </span>
                <span className="header-app-active">
                  <MenuIcon type="home-active" />
                </span>
              </NavLink>
              <NavLink activeClassName="is-active" to="/history">
                <span className="header-app">
                  <MenuIcon type="history" />
                </span>
                <span className="header-app-active">
                  <MenuIcon type="history-active" />
                </span>
              </NavLink>
              <NavLink activeClassName="is-active" to="/heart">
                <span className="header-app">
                  <MenuIcon type="heart" />
                </span>
                <span className="header-app-active">
                  <MenuIcon type="heart-active" />
                </span>
              </NavLink>
              <NavLink activeClassName="is-active" to="/profile">
                <span className="header-app">
                  <MenuIcon type="profile" />
                </span>
                <span className="header-app-active">
                  <MenuIcon type="profile-active" />
                </span>
              </NavLink>
            </header>
          )}
          </div>
        </>
      )}
      {isSpinner && <SplashScreen />}
    </>
  );
}

export default App;
