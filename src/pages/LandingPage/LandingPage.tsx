import React from "react";
import "../../App/App.css";
import { LandingVideoPage } from "../../components/Home/LandingVideoPage";
import { About } from "../../components/AboutUS/About";
import { Products } from "../../components/OurProducts/Products";
import { Competence } from "../../components/CompetenceProcess/Competence";
import { PremiumMostSold } from "../../components/CardSelection/PremiumMostSold";
import { OurDesigners } from "../../components/OurDesigners/OurDesigners";
import { ClientsRecomendations } from "../../components/ClientsRecommendations/ClientsRecomendations";
import { Footer } from "../../components/Footer/Footer";
export const LandingPage = () => {
	return (
		<div>
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
};
