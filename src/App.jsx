import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { History } from "./views/History/History";
import { Heart } from "./views/Heart/Heart";
import { Profile } from "./views/Profile/Profile";
import { TravelPage } from "./views/Travel/TravelPage";
import { SplashScreen } from "./components/SplashScreen";
import { useState } from "react";
import { MenuIcon } from "./components/Icons/MenuIcon";
import { useLocation } from "react-router-dom";

function App() {
	const location = useLocation();
	const currentUrl = location.pathname;

	console.log(currentUrl);
	const [isSpinner, setIsSpinner] = useState(true);

	setTimeout(() => {
		setIsSpinner(false);
	}, 2000);
	return (
		<>
			{!isSpinner && (
				<>
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/travel" element={<TravelPage />}></Route>
						<Route path="/history" element={<History />}></Route>
						<Route path="/heart" element={<Heart />}></Route>
						<Route path="/profile" element={<Profile />}></Route>
					</Routes>
					{currentUrl !== "/travel" && (
						<header>
							<NavLink exact activeClassName="is-active" to="/">
								<MenuIcon type="home" />
							</NavLink>
							<NavLink activeClassName="is-active" to="/history">
								<MenuIcon type="history" />
							</NavLink>
							<NavLink activeClassName="is-active" to="/heart">
								<MenuIcon type="heart" />
							</NavLink>
							<NavLink activeClassName="is-active" to="/profile">
								<MenuIcon type="profile" />
							</NavLink>
						</header>
					)}
				</>
			)}
			{isSpinner && <SplashScreen />}
		</>
	);
}

export default App;
