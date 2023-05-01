import React from "react";
import "../Footer/Footer.css";
import iconLanguage from "../../assets/icons/ic-language.svg";
import iconArrow from "../../assets/icons/ic-arrow-down.svg";
import { useLocation, useNavigate } from "react-router-dom";

export const Footer = () => {
	const location = useLocation();
	const pathname = location.pathname;
	// console.log("behind: ", pathname)


	return (
		<>
			<section className={`${pathname === "/behindTheScenes" ? "bgBlack" : "bgNone"}`} style={{ paddingBottom: '5rem' }}>
				<div className='row'>
					<div className='col-12 mt-5 '>
						<div
							className='d-flex flex-row m-auto text-light justify-content-between'
							style={{ width: "90%" }}
						>
							<span>
								<img src={iconArrow} className='icon' />
								Language
							</span>
							<span>
								Accessibility
								<img src={iconLanguage} className='icon' />
							</span>
						</div>
						<div
							className='text-light m-auto col-12 d-flex flex-row flex-wrap justify-content-between ps-2 pe-2 margin'
							style={{ width: "90%" }}
						>
							<div className='col-6 col-md-3 p-1 '>
								<p className='title'>Information</p>
								<hr className='hr' />
								<ul>
									<li>How It Works</li>
									<li>Why People Chose Us </li>
									<li>About Us</li>
								</ul>
								<p className='title'>My Account</p>
								<hr className='hr' />
								<ul>
									<li>My Account</li>
									<li>Shopping Cart </li>
									<li>Order History</li>
									<li>Trace My Order</li>
								</ul>
							</div>
							<div className='col-6 col-md-3 p-1'>
								<p className='title'>The Collections</p>
								<hr className='hr' />
								<ul>
									<li>Premium Card</li>
									<li>NFC Card</li>
									<li>Gift Card</li>
									<li>Custom Card</li>
									<li>Credit Card</li>
									<li>2 In 1 Card</li>
									<li>Business Card</li>
								</ul>
							</div>

							<div className='col-6 col-md-3 p-1'>
								<p className='title '>Our channels</p>
								<hr className='hr' />
								<ul>
									<li>Facebook</li>
									<li>Instagram</li>
									<li>Twitter</li>
									<li>Youtube</li>
									<li>Pinterest</li>
									<li>Linkedin</li>
									<li>Youku</li>
									<li>WeChat</li>
									<li>Weibo</li>
								</ul>
							</div>
							<div className='col-6  col-md-3 p-1'>
								<p className='title'>Legal Notice</p>
								<hr className='hr' />
								<ul>
									<li>Terms of Use</li>
									<li>Privacy Policy</li>
									<li>Cookies</li>
								</ul>
								<p className='title'>Media</p>
								<hr className='hr' />
								<ul>
									<li>Wallpapers</li>
									<li>Brochures</li>
									<li>Manuals</li>
								</ul>
							</div>
						</div>
						<hr className="hr w-100" />
					</div>
				</div>
			</section>

		</>
	);
};
