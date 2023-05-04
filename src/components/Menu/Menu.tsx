import { useState } from "react";
import Modal from "../ui/Modal";
import "../Menu/Menu.css";
import cross from "../../assets/icons/dark/ic_close_dark.svg";
import facebook from "../../assets/icons/ic_facebook.svg";
import instagram from "../../assets/icons/ic_intsagram.svg";
import pinterest from "../../assets/icons/ic_pinterest.svg";
import spotify from "../../assets/icons/ic_spotify.svg";
import twitter from "../../assets/icons/ic_twitter.svg";
import youtube from "../../assets/icons/ic_youtube.svg";
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebookF, FaPinterestP, FaSpotify } from 'react-icons/fa'
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'


type MenuProps = {
	onClick: () => void;
	changeTheme: () => void;
	theme: string;

};
const Menu = (props: MenuProps) => {
	return (
		<Modal onClose={props.onClick} >
			<section >
				<div className='container'>
					<div className='row d-flex mt-5 flex-column '>
						<div className='d-flex flex-row-reverse' style={{ paddingRight: '2.5rem' }}>
							{/* <button onClick={props.onClick} className='socials'>
								<AiOutlineClose className='imgDimensions' />
							</button> */}
							<button onClick={props.onClick} className='socials'>
								<FaFacebookF className='imgDimensions' />
							</button>
							<button onClick={props.onClick} className='socials'>
								<BsInstagram className='imgDimensions' />
							</button>
							<button onClick={props.onClick} className='socials'>
								<FaPinterestP className='imgDimensions' />
							</button>
							<button onClick={props.onClick} className='socials'>
								<FaSpotify className='imgDimensions' />
							</button>
							<button onClick={props.onClick} className='socials'>
								<BsTwitter className='imgDimensions' />
							</button>
							<button onClick={props.onClick} className='socials'>
								<BsYoutube className='imgDimensions' />
							</button>
						</div>
						<section className='menueContent d-flex justify-content-md-between flex-lg-row flex-column  mt-5'>
							<div>
								<h3>Company</h3>
								<ul className='d-flex flex-column gap-1 list-unstyled'>
									<li>ABOUT US</li>
									<li>WHY SIGNATURE</li>
									<li>DESIGNERS</li>
								</ul>
							</div>
							<div>
								<h3>Products</h3>
								<ul className='d-flex flex-column gap-1 list-unstyled'>
									<li>ALL PRODUCTS</li>
									<li>COLLECTIONS</li>
									<li>MATERIALS</li>
									<li>PROJECTS</li>
								</ul>
							</div>
							<div>
								<h3>Media</h3>
								<ul className='d-flex flex-column gap-1 list-unstyled'>
									<li>BEHIND THE SCENES</li>
									<li>GALLERY</li>
								</ul>
							</div>
							<div>
								<h3>Network</h3>
								<ul className='d-flex flex-column gap-1 list-unstyled'>
									<li>STORE FINDER</li>
									<li>2D/3D</li>
									<li>CONTACTS</li>
								</ul>
							</div>
						</section>
						<div className="d-flex flex-row justify-content-between w-25 ms-auto">
							<div className="d-flex flex-row toggle-theme-button-wrapper p-2">
								<button className={`toggle-theme-button ${props.theme === "classic-theme-navbar" ? 'bg-blue' : 'bg-no-color'}`} onClick={props.changeTheme}>classic</button>
								<button className={`toggle-theme-button ${props.theme === "funky-theme-navbar" ? 'bg-blue' : 'bg-no-color'}`} onClick={props.changeTheme}>funky</button>
								{/* <button className="toggle-theme-button" onClick={props.changeTheme}>toggle</button> */}
							</div>
							<div className='d-flex mt-3 justify-content-end'>CREDITS</div>
						</div>
					</div>
				</div>
			</section >
		</Modal >
	);
};
export default Menu;
