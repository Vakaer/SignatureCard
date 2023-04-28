import React, { useState, MouseEvent } from "react";
import "../components/Navbar.css";
import "./NavbarMenuButton.css"
import { RxHamburgerMenu } from 'react-icons/rx'
import icHamburger from "../assets/icons/ic-hamburger.svg";
export type MenuProps = {
	//isOpen: boolean;
	onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};
const NavbarMenuButton = (props: MenuProps) => {
	const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
	return (
		<div className=" hamburger-menu btn btn-light rounded-circle" onClick={(event) => props.onClick(event)}>
			<RxHamburgerMenu className="hamburger-svg" />
		</div>
	);
};
export default NavbarMenuButton;
