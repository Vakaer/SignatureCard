import React, { useState, MouseEvent } from "react";
import "../components/Navbar.css";
import icHamburger from "../assets/icons/ic-hamburger.svg";
export type MenuProps = {
	//isOpen: boolean;
	onClick: (event: React.MouseEvent<HTMLImageElement>) => void;
};
const NavbarMenuButton = (props: MenuProps) => {
	const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
	return (
		<img
			onClick={(event) => props.onClick(event)}
			src={icHamburger}
			className='text-center icons'
			alt='Signature Logo'
		/>
	);
};
export default NavbarMenuButton;
