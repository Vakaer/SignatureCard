import React from "react";
import "../AboutUS/About.css";
import cloudyImage from "../../assets/videos/cloudy-circle.gif";
import cardFront from "../../assets/pages-images/about/about-us-card-front.png";
import cardBack from "../../assets/pages-images/about/about-us-card-back.png";
import iconHandshake from "../../assets/icons/ic_handshake.png";
import iconShield from "../../assets/icons/ic_shield.png";
import iconStar from "../../assets/icons/ic-star.png";
export const About = () => {
	return (
		<>
			<div className='row '>
				<section className='about-us'>
					<div className='d-flex justify-content-center align-items-center '>
						<div className='about-us-desc  text-end' style={{ color: "white" }}>
							<h1>About Us</h1>
							<p className='text-end desc' style={{ fontSize: "16px" }}>
								Our business is an exclusive service that offers personalized metal credit cards.
								The business concept is an online platform, which allows customers to turn their
								credit cards into personalized works of art. Customers can choose from different
								designs and styles.
							</p>
							<button className='learn-more-btn'>Learn More</button>
						</div>
						<div className='cloudy-img  d-inline'>
							<img src={cloudyImage} style={{ mixBlendMode: "screen" }} />
						</div>
						<div className='cards d-inline'>
							<img src={cardFront} className='cardFront' />
							<img src={cardBack} className='cardBack' />
						</div>
					</div>
					<div
						className='m-0 d-flex flex-row justify-content-around align-items-center'
						style={{
							backdropFilter: "blur(60px)",
							color: "white",
							background: "#FFFFFF1A",
							padding: "1rem",
						}}
					>
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
