import React, { useEffect } from "react";
import logo from "../assets/signature-logo.svg";
import icPlay from "../assets/icons/ic_play.svg";
import "../components/Navbar.css";
import ProductButton from "./ui/ProductButton";

import icCart from "../assets/icons/ic-cart.svg";
import icSearch from "../assets/icons/ic-search.svg";
import NavbarMenuButton, { MenuProps } from "../layouts/NavbarMenuButton";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface NavbarProps {
	showMenuHandler: () => void;
}

function Navbar(props: NavbarProps) {
	const navigate = useNavigate();
	const location = useLocation();
	const pathname = location.pathname;
	console.log(pathname);

	const blackbgStyle = {
		backgroundColor: "#000",
	};
	const transparentBgStyle = {
		backgroundColor: "#000",
	};
	useEffect(() => {});
	return (
		<nav>
			<div className='row col-12 justify-content-between position-relative margin'>
				<div className='col-3 d-inline mt-md-4 text-center'>
					<ProductButton style={{ color: "white" }}>
						<Link to='products'>Products</Link>
					</ProductButton>
					<img src={icPlay} className='ms-3' height='30px' width='30px' alt='Play button' />
				</div>
				<div className='col-6 flex-grow-1 d-inline text-center'>
					<img src={logo} height='50px' className='text-center' alt='Signature Logo' />
				</div>
				<div className='col-3 d-flex flex-row justify-content-center mt-md-4 text-center'>
					<div className='d-inline '>
						<img src={icSearch} height='20px' style={{ marginRight: "5px" }} width='20px' />
						<input className='navInput' placeholder='search' />
					</div>
					<NavbarMenuButton onClick={props.showMenuHandler} />
					<img src={icCart} className='text-center icons ms-2' alt='Signature Logo' />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;

//for later use
//className={`${pathname == "/products" ? "blackbgStyle" : "nav-gradient"}`
