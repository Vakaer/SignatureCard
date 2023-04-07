import React from "react";
import icPlay from "../assets/icons/ic_play.svg";

type GenericButtonProps = {
	children: any;
	style?: React.CSSProperties;
	className?: string;
};
const ProductButton = ({ children, style, className }: GenericButtonProps) => {
	return (
		<>
			<button className={`btn btn-outline-light rounded-pill ${className}`} style={style}>
				{children}
			</button>
		</>
	);
};

export default ProductButton;
