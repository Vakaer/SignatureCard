import React, { Fragment, useState } from "react";
import "../Home/LandingVideoPage.css";
import Menu from "../Menu/Menu";
import Navbar from "../Navabar";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SubscribeSave } from "../forms/SubscribeSave";
import ProductButton from "../ui/ProductButton";

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
								style={{ fontSize: "22px", fontFamily: "NeueMontrealRegular", marginLeft: "6rem" }}
							>
								Behind the scenes
							</h3>
							<div className='moving-border-bottom '>
								<button
									className='discover-btn'
									style={{ backgroundColor: "transparent", border: "none", color: "white" }}
								>
									discover
								</button>
								<div className='lineh1 d-inline-block'></div>
							</div>
							<div className='text-center create-card-button'>
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
