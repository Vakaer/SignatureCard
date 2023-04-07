import React from "react";
import "../../OurProducts/Products.css";
import ProductButton from "../ProductButton";
import pinkcard from "../../../assets/cards/card-pink.png";
import Metal from "../../../assets/cards/CardMaterials/material_metal.svg";
import Premium from "../../../assets/cards/CardMaterials/material_premium.svg";
import Diamond from "../../../assets/cards/CardMaterials/material_diamond.svg";
import colorHalfYellow from "../../../assets/CardColors/color-half-yellow.svg";
import colorHalfBlue from "../../../assets/CardColors/color-half-blue.svg";
import colorPink from "../../../assets/CardColors/color-pink.svg";
import colorYellow from "../../../assets/CardColors/color-yellow.svg";
import colorCustom from "../../../assets/CardColors/color-custom.svg";
import iconCall from "../../../assets/icons/ic-white-call.svg";
import iconAdd from "../../../assets/icons/ic-white-add.svg";
import iconLocation from "../../../assets/icons/ic-white-location.svg";

interface ProductCardProps {
	className: string | undefined;
	cardNameFirst: string;
	cardNameLast: string;
	cardImage: string | undefined;
}

type GradientProps = {
	background_gradient: string | undefined;
};

export const ProductCard = (
	{ className, cardNameFirst, cardNameLast, cardImage }: ProductCardProps,
	{ background_gradient }: GradientProps
) => {
	return (
		<>
			<div className='credit-card credit-card-inner'>
				<div className={className}>
					<img src={cardImage} style={{ width: "100%", height: "100%" }} />
				</div>
				<div className='card-title-wrapper'>
					<h6 className='text-center m-0 card-title' style={{ letterSpacing: "2px" }}>
						{cardNameFirst}
					</h6>
					<h6 className='text-center card-title'>{cardNameLast}</h6>
				</div>
				<div className='d-flex flex-row  card-material-wrapper gap-4 justify-content-center'>
					<div className='d-flex material flex-column'>
						<span className='material-name'>METAL</span>
						<img src={Metal} style={{ width: "100%", height: "100%" }} />
					</div>
					<div className='d-flex material flex-column '>
						<span className='material-name'>PREMIUM</span>
						<img src={Premium} style={{ width: "100%", height: "100%" }} />
					</div>
					<div className='d-flex material flex-column'>
						<span className='material-name'>DIAMOND</span>
						<img src={Diamond} style={{ width: "100%", height: "100%" }} />
					</div>
				</div>
				<div className='colors d-flex justify-content-center gap-2 mt-5 mb-3 align-items-center flex-column'>
					<span className='material-name'>COLORS</span>
					<div className='d-flex justify-content-around gap-2'>
						<img src={colorHalfBlue} className='color' />
						<img src={colorHalfYellow} className='color' />
						<img src={colorPink} className='color' />
						<img src={colorYellow} className='color' />
						<img src={colorCustom} className='color' />
					</div>
				</div>
				<div className='d-flex justify-content-center mb-2 gap-3'>
					<img src={iconCall} className='action-icons' />
					<img src={iconLocation} className='action-icons' />
					<img src={iconAdd} className='action-icons' />
				</div>
			</div>
		</>
	);
};
