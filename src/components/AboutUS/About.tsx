import React from "react";
import "../AboutUS/About.css";
import cloudyImage from "../../assets/videos/cloudy-circle.gif";
// import cardFront from "../../assets/pages-images/about/about-us-card-front.png";
// import cardBack from "../../assets/pages-images/about/about-us-card-back.png";
import iconHandshake from "../../assets/icons/ic_handshake.png";
import iconShield from "../../assets/icons/ic_shield.png";
import iconStar from "../../assets/icons/ic-star.png";
import { motion, useScroll, useTransform } from 'framer-motion'
export const About = () => {
	let { scrollYProgress } = useScroll();
	let y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
	let z = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])
	return (
		<>
			<div className='row '>
				<section className='about-us p-0'>
					<div className='d-flex justify-content-between p-sm-2 col-12  flex-row align-items-center '>
						<motion.div
							className='text-center col-5 text-md-center text-lg-end ps-lg-5 pe-lg-5 col-lg-3 '
							style={{ color: 'white' }}
							data-aos="fade-right"
						>
							<h1>About Us</h1>
							<p className='desc text-md-end' style={{ fontSize: "16px" }}>
								Our business is an exclusive service that offers personalized metal credit cards.
								The business concept is an online platform, which allows customers to turn their
								credit cards into personalized works of art. Customers can choose from different
								designs and styles.
							</p>
							<button className='learn-more-btn '>Learn More</button>
						</motion.div>
						<motion.div style={{ y, mixBlendMode: 'screen' }} data-aos="fade-down" className='cloudy-img'>
							<img src={cloudyImage} />
						</motion.div>
						<motion.div className='cards col-5 col-lg-3 d-inline' data-aos="fade-left" style={{ z }}>
							<img className='cardFront' />
							<img className='cardBack' />
						</motion.div>
					</div>
					<div
						className='mb-5 d-flex flex-row justify-content-around flex-wrap align-content-md-center bottom-process'>
						<div>
							<span>
								<img src={iconHandshake} className='about-us-icons me-1'></img>Technical Inspection
								Association
							</span>
						</div>
						<div>
							<span>
								<img src={iconShield} className='about-us-icons me-1'></img>200% Guarrantee
							</span>
						</div>
						<div>
							<span>
								<img src={iconStar} className='about-us-icons me-1'></img>5-Star Rated
							</span>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
