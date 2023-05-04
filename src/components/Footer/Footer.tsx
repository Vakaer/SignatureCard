import React from "react";
import "../Footer/Footer.css";
import iconLanguage from "../../assets/icons/ic-language.svg";
import iconArrow from "../../assets/icons/ic-arrow-down.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { BsInstagram, BsTwitter, BsYoutube, BsWechat, BsSinaWeibo } from 'react-icons/bs'
import { FaFacebookF, FaPinterestP, FaLinkedinIn } from 'react-icons/fa'
import { ImPlay2 } from 'react-icons/im'

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
							<div className='col-6 col-md-3 p-1  lh-2'>
								<p className='title'>Information</p>
								<hr className='hr' />
								<ul>
									<li className="footer-links">How It Works</li>
									<li className="footer-links">Why People Chose Us </li>
									<li className="footer-links">About Us</li>
								</ul>
								<p className='title lh-2'>My Account</p>
								<hr className='hr' />
								<ul>
									<li className="footer-links">My Account</li>
									<li className="footer-links">Shopping Cart </li>
									<li className="footer-links">Order History</li>
									<li className="footer-links">Trace My Order</li>
								</ul>
							</div>
							<div className='col-6 col-md-3 p-1 lh-2'>
								<p className='title'>The Collections</p>
								<hr className='hr' />
								<ul>
									<li className="footer-links">Premium Card</li>
									<li className="footer-links">NFC Card</li>
									<li className="footer-links">Gift Card</li>
									<li className="footer-links">Custom Card</li>
									<li className="footer-links">Credit Card</li>
									<li className="footer-links">2 In 1 Card</li>
									<li className="footer-links">Business Card</li>
								</ul>
							</div>

							<div className='col-6 col-md-3 p-1 lh-3'>
								<p className='title '>Our channels</p>
								<hr className='hr' />
								<ul>
									<li className="footer-links"><span className="social-icon-footer"><FaFacebookF /></span>  Facebook</li>
									<li className="footer-links"><span className="social-icon-footer"><BsInstagram /></span>   Instagram</li>
									<li className="footer-links"><span className="social-icon-footer"><BsTwitter /></span>   Twitter</li>
									<li className="footer-links"><span className="social-icon-footer"><BsYoutube /></span>   Youtube</li>
									<li className="footer-links"><span className="social-icon-footer"><FaPinterestP /></span>   Pinterest</li>
									<li className="footer-links"><span className="social-icon-footer"><FaLinkedinIn /></span>   Linkedin</li>
									<li className="footer-links"><span className="social-icon-footer"><ImPlay2 /></span>   Youku</li>
									<li className="footer-links"><span className="social-icon-footer"><BsWechat /></span>   WeChat</li>
									<li className="footer-links"><span className="social-icon-footer"><BsSinaWeibo /></span>   Weibo</li>
								</ul>
							</div>
							<div className='col-6  col-md-3 p-1 lh-2'>
								<p className='title'>Legal Notice</p>
								<hr className='hr' />
								<ul>
									<li className="footer-links">Terms of Use</li>
									<li className="footer-links">Privacy Policy</li>
									<li className="footer-links">Cookies</li>
								</ul>
								<p className='title lh-2'>Media</p>
								<hr className='hr' />
								<ul>
									<li className="footer-links">Wallpapers</li>
									<li className="footer-links">Brochures</li>
									<li className="footer-links">Manuals</li>
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
