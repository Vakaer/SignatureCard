import React from "react";
import logo from "../assets/signature-logo.svg";
import icPlay from "../assets/icons/ic_play.svg";
import "../components/Navbar.css";
import ProductButton from "./ui/ProductButton";

import icCart from "../assets/icons/ic-cart.svg";
import icSearch from "../assets/icons/ic-search.svg";
import NavbarMenuButton, { MenuProps } from "../layouts/NavbarMenuButton";

interface NavbarProps {
	showMenuHandler: () => void;
}

function Navbar(props: NavbarProps) {
	return (
		<nav>
			<div className='row justify-content-center' style={{ marginTop: "4rem" }}>
				<div className='col-3 d-inline mt-4  text-center'>
					<ProductButton style={{ color: "white" }}>Products</ProductButton>
					<img src={icPlay} className='ms-3' height='30px' width='30px' alt='Play button' />
				</div>
				<div className='col-2 d-inline offset-md-1 text-center'>
					<img src={logo} height='50px' className='text-center' alt='Signature Logo' />
				</div>
				<div className='col-3 d-inline offset-md-1 mt-4 text-center'>
					<div className='input-group d-inline '>
						<img src={icSearch} height='20px' style={{ marginRight: "5px" }} width='20px' />
						<input className='navInput' placeholder='search' />
					</div>
					<NavbarMenuButton onClick={props.showMenuHandler} />
					<img
						src={icCart}
						height='40px'
						width='40px'
						className='text-center ms-2'
						alt='Signature Logo'
					/>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
