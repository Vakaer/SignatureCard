import React, { useEffect } from "react";
import logo from "../assets/signature-logo.svg";
import icPlay from "../assets/icons/ic_play.svg";
import "../components/Navbar.css";
import ProductButton from "./ui/ProductButton";

import icCart from "../assets/icons/ic-cart.svg";
import icSearch from "../assets/icons/ic-search.svg";
import NavbarMenuButton, { MenuProps } from "../layouts/NavbarMenuButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "./AnimatedLogo/Logo";
import { FaShoppingCart } from 'react-icons/fa'
import { HiShoppingCart } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'

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
	useEffect(() => { });
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
					<Logo />
				</div>
				<div className='col-3 d-flex flex-row justify-content-center mt-md-4 text-center align-items-center'>
					<div className='d-inline '>
						<BiSearch className="text-light" style={{
							height: '30px', width: '30px'
						}} />
						<input className='navInput' placeholder='search' />
					</div>
					<Link style={{ marginRight: '1rem' }} to={'./login'}>Login</Link>
					<NavbarMenuButton onClick={props.showMenuHandler} />
					<HiShoppingCart className='text-center text-light cart icons ms-2' />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;

//for later use
//className={`${pathname == "/products" ? "blackbgStyle" : "nav-gradient"}`
