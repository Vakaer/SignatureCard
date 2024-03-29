import React from "react";
import "../ClientsRecommendations/ClientsRecomendations.css";
import client from "../../assets/cards/client-recommendation.png";
import logo1 from "../../assets/logos/logo1.png";
import logo2 from "../../assets/logos/logo2.png";
import logo3 from "../../assets/logos/logo3.png";
import logo4 from "../../assets/logos/logo4.png";
import logo5 from "../../assets/logos/logo5.png";
import logo6 from "../../assets/logos/logo6.png";
import logo7 from "../../assets/logos/logo7.png";
import logo8 from "../../assets/logos/logo8.png";
import logo9 from "../../assets/logos/logo9.png";

export const ClientsRecomendations = () => {
	return (
		<>
			<section className='clients-reccommendation'>
				<div className='row'>
					<div className='mt-5'>
						<h2 className='text-center clients-recommendation-title'>CLIENTS AND RECOMMENDATIONS</h2>
						<div className='d-flex flex-column gap-5 '>
							<div
								className='d-flex flex-row text-light ms-auto me-auto flex-wrap justify-content-around w-75'
								style={{ marginTop: "7rem" }}
							>
								<div className='d-flex flex-column' data-aos='fade-right' data-aos-duration='500'>
									<div className='text-center lh-1'>
										<img src={client} className='border-radius-50' />
										<h5 className='mt-3'>Client Name</h5>
										<p>Lorem ipsum</p>
									</div>
								</div>
								<div className='d-flex flex-column' data-aos='fade-right' data-aos-duration='1000'>
									<div className='text-center lh-1'>
										<img src={client} className='border-radius-50' />
										<h5 className='mt-3'>Client Name</h5>
										<p>Lorem ipsum</p>
									</div>
								</div>
								<div className='d-flex flex-column' data-aos='fade-right' data-aos-duration='1500'>
									<div className='text-center lh-1'>
										<img src={client} className='border-radius-50' />
										<h5 className='mt-3'>Client Name</h5>
										<p>Lorem ipsum</p>
									</div>
								</div>
								<div className='d-flex flex-column' data-aos='fade-right' data-aos-duration='2000'>
									<div className='text-center lh-1'>
										<img src={client} className='border-radius-50' />
										<h5 className='mt-3'>Client Name</h5>
										<p>Lorem ipsum</p>
									</div>
								</div>
								<div className='d-flex flex-column' data-aos='fade-right' data-aos-duration='2500'>
									<div className='text-center lh-1'>
										<img src={client} className='border-radius-50' />
										<h5 className='mt-3'>Client Name</h5>
										<p>Lorem ipsum</p>
									</div>
								</div>
							</div>
							<div style={{ width: "90%", margin: "5rem auto 5rem auto" }}>
								<div className='Clients  d-flex flex-row align-items-center'>
									<h4 className='rotation clients'>Clients</h4>
									{/* <div className='border-left ms-3'></div> */}
									<div className='d-flex flex-wrap justify-content-around flex-row gap-2' data-aos='fade-up' data-aos-duration='500'>
										<img src={logo1} className='blend-mode' />
										<img src={logo2} className='blend-mode' />
										<img src={logo3} className='blend-mode' />
										<img src={logo4} className='blend-mode' />
										<img src={logo5} className='blend-mode' />
										<img src={logo6} className='blend-mode' />
										<img src={logo7} className='blend-mode' />
										<img src={logo8} className='blend-mode' />
										<img src={logo9} className='blend-mode' />
										<img src={logo1} className='blend-mode' />
										<img src={logo2} className='blend-mode' />
										<img src={logo3} className='blend-mode' />
									</div>
								</div>
								<div className='Brands mt-5 d-flex  flex-row align-items-center'>
									<h4 className='rotation brands'>Brands</h4>
									{/* <div className='border-left ms-3'></div> */}
									<div className='d-flex flex-row justify-content-around flex-wrap  gap-2' data-aos='fade-down' data-aos-duration='500'>
										<img src={logo1} className='blend-mode' />
										<img src={logo2} className='blend-mode' />
										<img src={logo3} className='blend-mode' />
										<img src={logo4} className='blend-mode' />
										<img src={logo5} className='blend-mode' />
										<img src={logo6} className='blend-mode' />
										<img src={logo7} className='blend-mode' />
										<img src={logo8} className='blend-mode' />
										<img src={logo9} className='blend-mode' />
										<img src={logo1} className='blend-mode' />
										<img src={logo2} className='blend-mode' />
										<img src={logo3} className='blend-mode' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
