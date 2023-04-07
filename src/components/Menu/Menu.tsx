import { Interface } from "readline";
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
};

const Menu = (props: MenuProps) => {
	return (
		<Modal onClose={props.onClick}>
			<section>
				<div style={{ padding: "0 6rem" }}>
					<div
						style={{ display: "flex", flexFlow: "row-reverse nowrap", marginTop: "5rem" }}
						className='mt-3'
					>
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
					<div className='d-flex mt-3 justify-content-end'>CREDITS</div>
				</div>
			</section>
		</Modal>
	);
};
export default Menu;
