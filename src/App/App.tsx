import React, { useState } from "react";
import Menu from "../components/Menu/Menu";
import Navbar from "../components/Navabar";
import "./App.css";

import { LandingPage } from "../pages/LandingPage/LandingPage";
import { Footer } from "../components/Footer/Footer";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import { ProductsPage } from "../pages/ProductPage/ProductsPage";
import { CustomizeCardPage } from "../pages/CustomizeCardPage/CustomizeCardPage";

function App() {
	const location = useLocation();
	const pathname = location.pathname;
	const [menuIsShown, setMenuIsShown] = useState(false);
	const [isCustomizeCardPage, setIsCustomizeCardPage] = useState(false);
	const showMenuHandler = () => {
		setMenuIsShown(!menuIsShown);
		console.log("showMenuHandler", menuIsShown);
	};
	const hideMenuHandler = () => {
		console.log("hidemenuhandler");
		setMenuIsShown(false);
		console.log("hideMenuHandler", menuIsShown);
	};
	return (
		<>
			{menuIsShown && <Menu onClick={hideMenuHandler} />}
			<Navbar showMenuHandler={showMenuHandler} />
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='products' element={<ProductsPage />} />
				<Route path='customize-card' element={<CustomizeCardPage />} />
			</Routes>
		</>
	);
}

export default App;
