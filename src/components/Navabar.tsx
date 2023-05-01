import React, { useEffect, useState } from "react";
import icPlay from "../assets/icons/ic_play.svg";
import "../components/Navbar.css";
import ProductButton from "./ui/ProductButton";
import { FiPlay } from 'react-icons/fi'
import NavbarMenuButton from "../layouts/NavbarMenuButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "./AnimatedLogo/Logo";
import { HiShoppingCart } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'

interface NavbarProps {
	showMenuHandler: () => void;
}


function Navbar(props: NavbarProps) {
	const navigate = useNavigate();
	const location = useLocation();
	const pathname = location.pathname;
	// console.log(pathname);

	const blackbgStyle = {
		backgroundColor: "#000",
	};
	const transparentBgStyle = {
		backgroundColor: "#000",
	};



	return (
		<nav className="navbar">
			<div className='row col-12 justify-content-between position-relative margin'>
				<div className='col-3 d-inline mt-md-4 text-center'>
					<ProductButton style={{ color: "white" }} className="product-btn">
						<Link to='products'>Products</Link>
					</ProductButton>
					<FiPlay className='ms-3 play-btn' />
				</div>
				<div className='col-6 flex-grow-1 d-inline text-center'>
					<Logo />
				</div>
				<div className='col-3 d-flex flex-row justify-content-center mt-md-4 text-center align-items-center'>
					<div className='d-inline search-icon '>
						<BiSearch style={{
							height: '30px', width: '30px'
						}} />
						<input className='navInput' placeholder='search' />
					</div>
					<Link style={{ marginRight: '1rem' }} to={'./login'}>Login</Link>
					<NavbarMenuButton onClick={props.showMenuHandler} />
					<HiShoppingCart className='text-center  cart icons ms-2' />
				</div>
			</div>
		</nav>

	);
}

export default Navbar;

//for later use
//className={`${pathname == "/products" ? "blackbgStyle" : "nav-gradient"}`
