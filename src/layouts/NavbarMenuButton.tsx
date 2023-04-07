import React, { useState, MouseEvent } from "react";
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
			height='40px'
			width='40px'
			className='text-center'
			alt='Signature Logo'
		/>
	);
};
export default NavbarMenuButton;
