import React, { Fragment, useState } from "react";
import "../Home/LandingVideoPage.css";
import particles from '../../assets/videos/particles.gif'
import { AiOutlineArrowRight } from "react-icons/ai";
import { SubscribeSave } from "../forms/SubscribeSave";
import ProductButton from "../ui/ProductButton";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

export const LandingVideoPage = () => {
	const [formIsVisible, setFormIsVisible] = useState(true);
	const hideFormHandler = () => {
		setFormIsVisible(false);
	};
	// let { scrollY } = useScroll();
	// let y = useTransform(scrollY, [0, 1], ['0%', '100%'])
	return (
		<>
			<div className='row mb-5'>
				<div className='col-12'>
					<motion.div className='video-background'>
						<div
							className='d-flex justify-content-center flex-column '
							style={{ marginTop: "3rem" }}
						>
							{formIsVisible && <SubscribeSave onClick={hideFormHandler} />}
							<div className="d-flex flex-row justify-content-evenly align-items-center " style={{ marginTop: '20rem' }}>

								<h3
									className='text-light text-center behindTheScenePage'
									data-aos="fade-right"
									data-aos-duration="2000"
									style={{ marginLeft: '-10rem', fontSize: "30px", fontFamily: "NeueMontrealRegular" }}
								>
									<Link to='/behindTheScenes' >Behind the scenes</Link>
								</h3>
								<h4 className='LandingPageHeading'>WHERE MONEY LIVES</h4>

								<div style={{ mixBlendMode: 'screen', height: '120px' }} >
									<img src={particles} className="w-100 h-100" />
								</div>

							</div>
							<div className='moving-border-bottom ' data-aos='fade-left' data-aos-duration="1000">
								<button
									className='discover-btn'
									style={{ backgroundColor: "transparent", border: "none" }}
								>
									discover
								</button>
								<div className='lineh1 d-inline-block'></div>
							</div>

							<div className='text-center create-card-button-wrapper' data-aos='fade-up' data-aos-duration="500">
								<ProductButton
									className='align-items-center create-card-btn'
									style={{ fontFamily: "NeueMontrealRegular" }}

								>
									Create Your Card Now <AiOutlineArrowRight />
								</ProductButton>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};
//style={{ width: "100%", height: "100vh", backgroundColor: "#000" }}
