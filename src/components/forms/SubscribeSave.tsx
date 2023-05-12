import React, { useState, useContext } from "react";
import "../forms/SubscribeSave.css";
import icClose from "./../../assets/icons/ic-close-form.svg";
import { GrFormClose } from 'react-icons/gr'
import { ThemeContext } from "../../App/App";

type SubscribeSaveProps = {
	onClick: () => void;
};

export const SubscribeSave = (props: SubscribeSaveProps) => {
	const lang = useContext(ThemeContext)
	const fieldSetStyle = {
		width: "auto",
		padding: "0 10px",
		borderBottom: "none",
	};
	return (
		<>
			<div className='col-md-8 col-lg-4 col-11 form' data-aos='fade-down' data-aos-duration="500">
				<div className='blurred-img'></div>
				<div className=" closeBtn  btn btn-light rounded-circle">
					<GrFormClose onClick={props.onClick} className="icon-cross" />
				</div>

				<div
					className="form-content"
				>
					<h4 className='text-center form-title'>{lang?.strings.formTitle}</h4>
					<p className='text-center form-promo-desc w-80'>
						Get $20 off and be the first to know about our latest news, offers and promotions!
					</p>
					<form className='signupForm d-flex flex-column gap-3 m-auto'>
						<div className='inputBox w-100'>
							<input type='text' className='w-100' required={true} />
							<span>Email</span>
						</div>
						<div className='row '>
							<div className='d-flex justify-cntent-between'>
								<div className='inputBox me-1 w-100 d-inline'>
									<input type='text' className='w-100' required={true} />
									<span>FirstName</span>
								</div>
								<div className='inputBox w-100 d-inline'>
									<input type='text' className='w-100' required={true} />
									<span>PhoneNumber</span>
								</div>
							</div>
						</div>
						<p
							style={{ fontSize: "8px", fontFamily: "HelveticaNowRegular" }}
							className='text-center form-descripion'
						>
							By clicking SIGN UP NOW, you agree to receive marketing text messages from Lion Card
							at the number provided, including messages sent by autodialer. Consent is not a
							condition of any purchase. Message and data rates may apply. Message frequency varies.
							Reply HELP for help or STOP to cancel. View our <a href='#'>Privacy Policy</a> and
							<a href='#'>Terms of Service</a>
						</p>
						<div className='d-flex flex-row'>
							<button
								className='w-75 SubscribeNowButton'>
								Subscribe Now
							</button>
							<button className='w-25 MoreOffersButton' >
								More offers
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
