import React, { useState, MouseEvent } from "react";
import "../components/Navbar.css";
import "./NavbarMenuButton.css"
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import icHamburger from "../assets/icons/ic-hamburger.svg";
export type MenuProps = {
	//isOpen: boolean;
	onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
	menuIsShown: boolean;
};
const NavbarMenuButton = (props: MenuProps) => {
	const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
	return (
		<div className={`btn btn-light rounded-circle ${props.menuIsShown ? 'popup-index-max close-menu  ' : 'popup-index-min  hamburger-menu'}`} onClick={(event) => props.onClick(event)}>
			{props.menuIsShown ? <AiOutlineClose className="hamburger-svg" /> : <RxHamburgerMenu className="hamburger-svg" />}

		</div>
	);
};
export default NavbarMenuButton;
