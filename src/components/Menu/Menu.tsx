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

type MenuProps = {
	onClick: () => void;
	onClassicClick?: () => void;
	onFunkyClick?: () => void;
	changeTheme: () => void;
	IsClassic?: boolean;
	IsFunky?: boolean;
};
const Menu = (props: MenuProps) => {
	return (
		<Modal onClose={props.onClick} >
			<section >
				<div className='container'>
					<div className='row d-flex flex-column '>
						<div className='d-flex pb-4 flex-row-reverse' style={{ paddingBottom: "2rem" }}>
							<button onClick={props.onClick} className='socials'>
								<img src={cross} className='imgDimensions' />
							</button>
							<button onClick={props.onClick} className='socials'>
								<img src={facebook} className='imgDimensions' />
							</button>
							<button onClick={props.onClick} className='socials'>
								<img src={instagram} className='imgDimensions' />
							</button>
							<button onClick={props.onClick} className='socials'>
								<img src={pinterest} className='imgDimensions' />
							</button>
							<button onClick={props.onClick} className='socials'>
								<img src={spotify} className='imgDimensions' />
							</button>
							<button onClick={props.onClick} className='socials'>
								<img src={twitter} className='imgDimensions' />
							</button>
							<button onClick={props.onClick} className='socials'>
								<img src={youtube} className='imgDimensions' />
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
							<div className="d-flex flex-row toggle-theme-button-wrapper">
								{/* <button className={`toggle-theme-button ${props.IsClassic ? 'bg-blue' : null}`} onClick={props.onClassicClick}>classic</button>
								<button className={`toggle-theme-button ${props.IsFunky ? 'bg-blue' : null}`} onClick={props.onFunkyClick}>funky</button> */}
								<button className="toggle-theme-button" onClick={props.changeTheme}>toggle</button>
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
