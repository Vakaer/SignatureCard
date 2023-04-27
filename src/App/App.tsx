import React, { useEffect, useState } from "react";
import Menu from "../components/Menu/Menu";
import Navbar from "../components/Navabar";
import "./App.css";

import { LandingPage } from "../pages/LandingPage/LandingPage";
import { Footer } from "../components/Footer/Footer";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import { ProductsPage } from "../pages/ProductPage/ProductsPage";
import { CardColorSelection } from "../pages/CustomizeCardPage/CardColorSelectionPage";
import { BehindTheScenes } from "../pages/BehindTheScenes/BehindTheScenes";
import { Login } from "../components/Login/Login";
function App() {
	const location = useLocation();
	const pathname = location.pathname;
	const [menuIsShown, setMenuIsShown] = useState(false);
	const [isCustomizeCardPage, setIsCustomizeCardPage] = useState(true);

	console.log(isCustomizeCardPage);
	const showMenuHandler = () => {
		setMenuIsShown(!menuIsShown);
		console.log("showMenuHandler", menuIsShown);
	};
	const hideMenuHandler = () => {
		console.log("hidemenuhandler");
		setMenuIsShown(false);
		console.log("hideMenuHandler", menuIsShown);
	};
	useEffect(() => {
		console.log(pathname);
		if (pathname === "/customize-card" || pathname === "/login") {
			setIsCustomizeCardPage(false);
		} else {
			setIsCustomizeCardPage(true);
		}
	}, [pathname]);
	return (
		<>
			<div className='background-image'>
				{menuIsShown && <Menu onClick={hideMenuHandler} />}
				{isCustomizeCardPage && <Navbar showMenuHandler={showMenuHandler} />}
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/products' element={<ProductsPage />} />
					<Route path='/customize-card' element={<CardColorSelection />} />
					<Route path='/behindTheScenes' element={<BehindTheScenes />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
