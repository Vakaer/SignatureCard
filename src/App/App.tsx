import { type } from "os";
import React, { useState } from "react";
import { SubscribeSave } from "../components/forms/SubscribeSave";
import Menu from "../components/Menu/Menu";

import Navbar from "../components/Navabar";
import earthBlue from "../assets/icons/earth-green.png";
import "./App.css";
import { LandingVideoPage } from "../components/Home/LandingVideoPage";
import ProductButton from "../components/ui/ProductButton";
import { About } from "../components/AboutUS/About";
import { Products } from "../components/OurProducts/Products";
import { Competence } from "../components/CompetenceProcess/Competence";
import { PremiumMostSold } from "../components/CardSelection/PremiumMostSold";
import { OurDesigners } from "../components/OurDesigners/OurDesigners";
import { ClientsRecomendations } from "../components/ClientsRecommendations/ClientsRecomendations";
import { Footer } from "../components/Footer/Footer";

function App() {
	return (
		<div className='container-fluid background-image'>
			<LandingVideoPage />
			<About />
			<Products />
			<Competence />
			<PremiumMostSold />
			<OurDesigners />
			<ClientsRecomendations />
			<Footer />
		</div>
	);
}

export default App;
