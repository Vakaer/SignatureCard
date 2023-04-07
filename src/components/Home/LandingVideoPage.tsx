import React, { useState } from "react";
import "../Home/LandingVideoPage.css";
import Menu from "../Menu/Menu";
import Navbar from "../Navabar";
import { SubscribeSave } from "../forms/SubscribeSave";
import ProductButton from "../ui/ProductButton";

export const LandingVideoPage = () => {
	const [menuIsShown, setMenuIsShown] = useState(false);
	const [formIsVisible, setFormIsVisible] = useState(true);
	const showMenuHandler = () => {
		setMenuIsShown(!menuIsShown);
		console.log("showMenuHandler", menuIsShown);
	};
	const hideMenuHandler = () => {
		console.log("hidemenuhandler");
		setMenuIsShown(false);
		console.log("hideMenuHandler", menuIsShown);
	};
	const hideFormHandler = () => {
		setFormIsVisible(false);
	};
	return (
		<>
			<div className='row'>
				<div className='col-12 p-0 '>
					<div className='video-background'>
						<div className='d-flex justify-content-center flex-column'>
							{menuIsShown && <Menu onClick={hideMenuHandler} />}
							<Navbar showMenuHandler={showMenuHandler} />
							<h4 className='LandingPageHeading '>WHERE MONEY LIVES</h4>
							{formIsVisible && <SubscribeSave onClick={hideFormHandler} />}
							<div className='moving-border-bottom '>
								<button
									className='discover-btn m-auto'
									style={{ backgroundColor: "transparent", border: "none", color: "white" }}
								>
									discover
								</button>
								<div className='lineh1 d-inline-block'></div>
							</div>
							<div className='text-center mt-5'>
								<ProductButton
									className='align-items-center'
									style={{ fontFamily: "NeueMontrealRegular" }}
								>
									Create Your Card Now
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
