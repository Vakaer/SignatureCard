import React, { Fragment, useState } from "react";
import "../Home/LandingVideoPage.css";
import Menu from "../Menu/Menu";
import Navbar from "../Navabar";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SubscribeSave } from "../forms/SubscribeSave";
import ProductButton from "../ui/ProductButton";
import { Link } from "react-router-dom";

export const LandingVideoPage = () => {
	const [formIsVisible, setFormIsVisible] = useState(true);
	const hideFormHandler = () => {
		setFormIsVisible(false);
	};
	return (
		<>
			<div className='row'>
				<div className='col-12'>
					<div className='video-background'>
						<div
							className='d-flex justify-content-center flex-column'
							style={{ marginTop: "8rem" }}
						>
							<h4 className='LandingPageHeading '>WHERE MONEY LIVES</h4>
							{formIsVisible && <SubscribeSave onClick={hideFormHandler} />}
							<h3
								className='text-light'
								data-aos="fade-right"
								data-aos-duration="2000"
								style={{ fontSize: "30px", fontFamily: "NeueMontrealRegular", marginLeft: "6rem", marginTop: '-2rem' }}
							>
								<Link to='/behindTheScenes'  >Behind the scenes</Link>
							</h3>
							<div className='moving-border-bottom ' data-aos='fade-left' data-aos-duration="1000">
								<button
									className='discover-btn'
									style={{ backgroundColor: "transparent", border: "none", color: "white" }}
								>
									discover
								</button>
								<div className='lineh1 d-inline-block'></div>
							</div>
							<div className='text-center create-card-button' data-aos='fade-up' data-aos-duration="500">
								<ProductButton
									className='align-items-center'
									style={{ fontFamily: "NeueMontrealRegular" }}

								>
									Create Your Card Now <AiOutlineArrowRight />
								</ProductButton>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
//style={{ width: "100%", height: "100vh", backgroundColor: "#000" }}
