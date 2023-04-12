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
					<div className='d-flex justify-content-between p-sm-2 col-12  flex-row align-items-center '>
						<div
							className='text-center col-5 text-md-center  text-lg-end ps-lg-5 pe-lg-5 col-lg-3 '
							style={{ color: "white" }}
						>
							<h1>About Us</h1>
							<p className='desc text-md-end' style={{ fontSize: "16px" }}>
								Our business is an exclusive service that offers personalized metal credit cards.
								The business concept is an online platform, which allows customers to turn their
								credit cards into personalized works of art. Customers can choose from different
								designs and styles.
							</p>
							<button className='learn-more-btn '>Learn More</button>
						</div>
						<div className='cloudy-img'>
							<img src={cloudyImage} style={{ mixBlendMode: "screen" }} />
						</div>
						<div className='cards col-5 col-lg-3 d-inline'>
							<img src={cardFront} className='cardFront' />
							<img src={cardBack} className='cardBack' />
						</div>
					</div>
					<div
						className='m-0 d-flex flex-row justify-content-around flex-wrap align-content-md-center'
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
