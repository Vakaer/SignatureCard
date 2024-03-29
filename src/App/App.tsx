import React, { useEffect, useState } from "react";
import Menu from "../components/Menu/Menu";
import Navbar from "../components/Navabar";
import "./App.css";

import { LandingPage } from "../pages/LandingPage/LandingPage";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import { ProductsPage } from "../pages/ProductPage/ProductsPage";
import { CardColorSelection } from "../pages/CustomizeCardPage/CardColorSelectionPage";
import { BehindTheScenes } from "../pages/BehindTheScenes/BehindTheScenes";
import { Login } from "../components/Login/Login";
import { createContext } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { PrivacyPolicy } from "../components/PrivacyPolicy/PrivacyPolicy";
import { PrivacyPolicyPage } from "../pages/PrivacyPolicyPage/PrivacyPolicyPage";

interface ThemeContextInterface {
	theme: string;
	toggleTheme: (theme: string) => void;
	lang: string,
	handleLanguageChange: (language: string) => void;
	strings: Record<string, string>;
}

export const ThemeContext = createContext<ThemeContextInterface | null>(null);

function App() {
	const location = useLocation();
	const pathname = location.pathname;
	const [menuIsShown, setMenuIsShown] = useState(false);
	const [isCustomizeCardPage, setIsCustomizeCardPage] = useState(true);
	const [lang, setLang] = useState("en");
	const strings = useTranslation(lang);
	const [theme, setTheme] = useState('funky-theme-navbar')

	useEffect(() => {

		if (pathname === "/customize-card" || pathname === "/login") {
			setIsCustomizeCardPage(false);
		} else {
			setIsCustomizeCardPage(true);
		}

	}, [pathname, theme]);

	const handleLanguageChange = (newLang: string) => {
		setLang(newLang)
	}

	const toggleTheme = () => {
		setTheme((curr) => (curr === "classic-theme-navbar") ? "funky-theme-navbar" : "classic-theme-navbar")
	}
	const showMenuHandler = () => {
		setMenuIsShown(!menuIsShown);
	};
	const hideMenuHandler = () => {
		setMenuIsShown(false);
	};




	return (
		<ThemeContext.Provider value={{ theme, toggleTheme, lang, handleLanguageChange, strings }}>
			<main>
				<div style={{ backgroundColor: 'black' }}>
					<div className='background-image' id={theme}>
						{menuIsShown && <Menu onClick={hideMenuHandler} theme={theme} changeTheme={toggleTheme} />}
						{isCustomizeCardPage && <Navbar menu={menuIsShown} showMenuHandler={showMenuHandler} />}
						<Routes>
							<Route path='/' element={<LandingPage />} />
							<Route path='/products' element={<ProductsPage />} />
							<Route path='/customize-card' element={<CardColorSelection />} />
							<Route path='/behindTheScenes' element={<BehindTheScenes />} />
							<Route path="/login" element={<Login theme={theme} changeTheme={toggleTheme} />} />
							<Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
						</Routes>
					</div>
				</div>
			</main>
		</ThemeContext.Provider>
	);
}

export default App;
