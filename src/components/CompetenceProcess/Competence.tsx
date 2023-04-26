import "../CompetenceProcess/Competence.css";
import step1 from "../../assets/icons/Competence/ic-create-card.svg";
import step2 from "../../assets/icons/Competence/ic-send.svg";
import step3 from "../../assets/icons/Competence/ic-transfer-data.svg";
import step4 from "../../assets/icons/Competence/ic-recieve-card.svg";
import React from "react";

export const Competence = () => {
	return (
		<>
			<section className='competence-process-bg'>
				<div className='row'>
					<div
						className='d-flex flex-column gap-5 align-items-center'
						style={{ width: "90%", margin: "auto" }}
					>
						<h1
							className='text-center'
							data-aos="fade-right"
							style={{ fontSize: "80px", fontFamily: "NeueMontrealRegular", fontWeight: "400" }}
						>
							Patented, Secure And Simple Process
						</h1>
						<div className='d-flex col-12 flex-wrap flex-row' >
							<div className='ps-5 col-12 col-md-6 col-lg-3 pe-5 text-center' data-aos="fade-down-right" data-aos-duration="500">
								<img src={step1} className='mb-4' />
								<h5 className='text-center'>
									<span>1. </span> Create Your Card
								</h5>
								<p className='text-center'>
									Select the design that you like from our Order Now menu and submit your order
									securely online.
								</p>
							</div>
							<div className='ps-5 pe-5 col-12 col-md-6 col-lg-3 text-center' data-aos="fade-down-right" data-aos-duration="1000">
								<img src={step2} className='mb-4' />
								<h5 className='text-center'>
									<span>2. </span>Send Your Card
								</h5>
								<p className='text-center'>
									Once you submit your order, simply mail us your card. We will receive it in about
									2 - 3 days
								</p>
							</div>
							<div className='ps-5 pe-5 col-12 col-md-6 col-lg-3 text-center' data-aos="fade-down-right" data-aos-duration="1500">
								<img src={step3} className='mb-4' />
								<h5 className='text-center'>
									<span>3. </span> Transfer Data & EMV
								</h5>
								<p className='text-center'>
									PATENTED technology, we transfer your EMV chip & magnet strip data to customized
									credit card.
								</p>
							</div>
							<div className='ps-5 pe-5 col-12 col-md-6 col-lg-3 text-center' data-aos="fade-down-right" data-aos-duration="2000">
								<img src={step4} className='mb-4' />
								<h5 className='text-center'>
									<span>4. </span>Receive Your Card
								</h5>
								<p className='text-center'>
									We will convert your card to metal with the: information that you provide and send
									back to you.
								</p>
							</div>
						</div>
						<button className='createCardButton' data-aos="fade-up">Create Your Card now</button>
					</div>
				</div>
			</section>
		</>
	);
};
