import React from "react";
import icPlay from "../assets/icons/ic_play.svg";

type GenericButtonProps = {
	children: any;
	style?: React.CSSProperties;
	className?: string;
	handleClick?: React.MouseEventHandler<HTMLButtonElement>;
};
const ProductButton = ({ children, style, className, handleClick }: GenericButtonProps) => {
	return (
		<>
			<button
				className={`btn btn-outline-light  rounded-pill ${className}`}
				data-aos="fade-up"
				onClick={handleClick}
				style={style}
			>
				{children}
			</button>
		</>
	);
};

export default ProductButton;
