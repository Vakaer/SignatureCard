import React from "react";
import "../../App/App.css";
import '../BehindTheScenes/BehindTheScenes.css'
import { Footer } from "../../components/Footer/Footer";

export const BehindTheScenes = () => {
	return (
		<>
			<div className='background-image'>
				<section className='container-fluid hero-section'>
					<div className='row'>
						<div className='col-12 mt-5' style={{ paddingBottom: '15rem' }}>
							<div className='d-flex flex-column gap-5'>
								<h5 className='text-light text-center' style={{ fontWeight: 'normal', letterSpacing: '5px' }}>BEHIND THE SCENES</h5>
								<div className='col-12 d-flex flex-lg-row flex-md-column m-sm-auto flex-sm-column justify-content-around m-auto gap-sm-5  text-light'>
									<div className='d-flex col-6 col-md-8 m-auto m-lg-0 col-lg-3 flex-column gap-4' data-aos="fade-right" data-aos-duration="1000">
										<h4 className="text-sm-center text-lg-start" style={{ letterSpacing: '1px', fontSize: '40px', fontWeight: 'normal' }}>Transparency & Participation</h4>
										<p className="col-md-8 ms-sm-auto me-sm-auto ms-lg-0 ">
											Social media makes it possible% for you to be part of the startup's journey
											and get on authentic insight into what moves us every day.
										</p>
									</div>
									<div className='position-relative col-5 m-sm-auto m-lg-0' data-aos="flip-left" data-aos-duration="1000">
										<div
											className='position-absolute'
											style={{
												height: "300px",
												width: "400px",
												backgroundColor: "white",
												top: "2rem",
												left: "2rem",
											}}
										></div>
										<div
											className='position-absolute'
											style={{
												height: "300px",
												width: "400px",
												backgroundColor: "#D9D9D9",
											}}
										></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='container-fluid tiktok-section'>
					<div className='row'>
						<div className='col-10 ms-auto me-auto mt-5' style={{ paddingBottom: '20rem' }}>

							<div className='col-12 d-flex flex-lg-row flex-md-column m-sm-auto flex-sm-column m-auto gap-sm-5  text-light'>

								<div className='position-relative col-5 m-sm-auto m-lg-0' data-aos="flip-left" data-aos-duration="1000">
									<div
										className='position-absolute'
										style={{
											height: "300px",
											width: "400px",
											backgroundColor: "white",
											top: "2rem",
											left: "2rem",
										}}
									></div>
									<div
										className='position-absolute'
										style={{
											height: "300px",
											width: "400px",
											backgroundColor: "#D9D9D9",
										}}
									></div>
								</div>
								<div className='d-flex col-6 col-md-8 col-lg-5 flex-column gap-4' style={{ marginLeft: '5rem' }}>
									<h4 className="text-sm-center text-lg-start" data-aos="fade-right" data-aos-duration="1000" style={{ letterSpacing: '1px', fontSize: '40px', fontWeight: 'normal' }}>Our TikTok channel</h4>
									<p className="col-md-6 col-lg-7 ms-sm-auto me-sm-auto ms-lg-0 " data-aos="fade-right" data-aos-duration="1000">
										With daily short videos on TikTok you are there
										live, the first to hear about new products and
										Gain insights into the startup. We keep you up to
										date!
									</p>
									<button className="tiktok-btn col-6" data-aos="fade-up" data-aos-duration="1000">To Signature Card tiktok</button>
								</div>
							</div>
						</div>
					</div>

				</section>

				<section className="container pb-5">
					<div className="row">
						<div className="col-12 d-flex flex-row  justify-content-between" >
							<div style={{ width: '31%', height: '582px', backgroundColor: '#D9D9D9' }} data-aos="fade-up-right" data-aos-duration="500" >
							</div>
							<div style={{ width: '31%', height: '582px', backgroundColor: '#D9D9D9' }} data-aos="fade-up-right" data-aos-duration="1000">
							</div>
							<div style={{ width: '31%', height: '582px', backgroundColor: '#D9D9D9' }} data-aos="fade-up-right" data-aos-duration="1500">
							</div>
						</div>
					</div>
				</section>

				<section className="youtube-section" style={{ backgroundColor: 'red', padding: '3rem 0 3rem 0' }}>
					<div className='col-10 m-auto d-flex flex-column  text-light'>
						<div className='d-flex flex-column gap-4'>
							<h4 className="text-sm-center text-lg-start" style={{ letterSpacing: '1px', fontSize: '40px', fontWeight: 'normal' }} data-aos="zoom-in"
								data-aos-anchor-placement="top-bottom">Our Youtube Channel</h4>
							<p >
								Vlogs, podcasts, informational videos. On Youtube you get a deeper insight into what Lockcard is apart from the daily events.
							</p>
							<button className="tiktok-btn col-2 mt-4" data-aos="zoom-in">To Signature Card tiktok</button>
							<div className="d-flex flex-row mt-5 justify-content-between">
								<div style={{ width: '30%', height: '200px', backgroundColor: 'white' }} data-aos="flip-right" data-aos-duration='500'></div>
								<div style={{ width: '30%', height: '200px', backgroundColor: 'white' }} data-aos="flip-right" data-aos-duration='1000'></div>
								<div style={{ width: '30%', height: '200px', backgroundColor: 'white' }} data-aos="flip-right" data-aos-duration='1500'></div>
							</div>
						</div>


					</div>
				</section>

				<section className='container-fluid facebook-section' style={{ backgroundColor: '#1877F2' }}>
					<div className='row'>
						<div className='col-10 ms-auto me-auto mt-5' style={{ padding: '5rem 0 5rem 0' }}>
							<div className='col-12 d-flex flex-lg-row flex-md-column m-sm-auto flex-sm-column m-auto gap-sm-5  text-light'>
								<div className='d-flex col-6 col-md-8 col-lg-5 flex-column gap-4' style={{ marginLeft: '5rem' }}>
									<h4 className="text-sm-center text-lg-start" style={{ letterSpacing: '1px', fontSize: '40px', fontWeight: 'normal' }}>Our Facebook page</h4>
									<p className="col-md-6 col-lg-10 ms-sm-auto me-sm-auto ms-lg-0 ">
										Would you like to actively help shape Signature Card journey?
										Express and discuss your wishes for products, get support
										for your concerns and 3D printing and benefit from special
										events and raffles.

									</p>
									<button className="tiktok-btn col-3">Follow now</button>
								</div>
								<div className='col-5 m-sm-auto m-lg-0'>
									<div

										style={{
											height: "300px",
											width: "600px",
											backgroundColor: "white",
											top: "2rem",
											left: "2rem",
										}}
									></div>

								</div>

							</div>
						</div>
					</div>

				</section>
				<section className='container-fluid instagram-section' style={{ backgroundColor: '#CB38A5' }}>
					<div className='row'>
						<div className='col-10 ms-auto me-auto mt-5' style={{ padding: '5rem 0 5rem 0' }}>
							<div className='col-12 d-flex flex-lg-row flex-md-column m-sm-auto flex-sm-column m-auto gap-sm-5  text-light'>
								<div className='col-5 m-sm-auto m-lg-0'>
									<div

										style={{
											height: "300px",
											width: "600px",
											backgroundColor: "white",
											top: "2rem",
											left: "2rem",
										}}
									></div>

								</div>
								<div className='d-flex col-6 col-md-8 col-lg-5 flex-column gap-4' style={{ marginLeft: '5rem' }}>
									<h4 className="text-sm-center text-lg-start" style={{ letterSpacing: '1px', fontSize: '40px', fontWeight: 'normal' }}>Follow us on Instagram</h4>
									<p className="col-md-6 col-lg-10 ms-sm-auto me-sm-auto ms-lg-0 ">
										Would you like to actively help shape Signature Card journey?
										Express and discuss your wishes for products, get support
										for your concerns and 3D printing and benefit from special
										events and raffles.


									</p>
									<button className="tiktok-btn col-3 mt-5">Join now</button>
								</div>


							</div>
						</div>
					</div>

				</section>

				<Footer />
			</div>
		</>
	);
};
