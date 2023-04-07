import React from "react";
import "../OurProducts/Products.css";
import ProductButton from "../ui/ProductButton";
import pinkcard from "../../assets/cards/card-pink.png";
import yellowcard from "../../assets/cards/card-yellow.png";
import blackcard from "../../assets/cards/card-black.png";
import Metal from "../../assets/cards/CardMaterials/material_metal.svg";
import Premium from "../../assets/cards/CardMaterials/material_premium.svg";
import Diamond from "../../assets/cards/CardMaterials/material_diamond.svg";
import colorHalfYellow from "../../assets/CardColors/color-half-yellow.svg";
import colorHalfBlue from "../../assets/CardColors/color-half-blue.svg";
import colorPink from "../../assets/CardColors/color-pink.svg";
import colorYellow from "../../assets/CardColors/color-yellow.svg";
import colorCustom from "../../assets/CardColors/color-custom.svg";
import iconCall from "../../assets/icons/ic-white-call.svg";
import iconAdd from "../../assets/icons/ic-white-add.svg";
import iconLocation from "../../assets/icons/ic-white-location.svg";
import { ProductCard } from "../ui/ProductCard/ProductCard";

export const Products = () => {
	return (
		<>
			<div className='row mt-5'>
				<section className='our-products'>
					<div className='d-flex position-relative flex-column gap-5 justify-content-center align-items-center '>
						<h1 className='text-light page-title'>OUR PRODUCT</h1>
						<div
							className='d-flex mt-5 flex-lg-row flex-md-column  flex-column justify-content-between'
							style={{ width: "60%" }}
						>
							<ProductCard
								cardImage={pinkcard}
								cardNameFirst='SIGNATURE'
								cardNameLast='CREDIT CARD'
								className='pink-gradient'
							/>
							<ProductCard
								cardImage={yellowcard}
								cardNameFirst='SIGNATURE'
								cardNameLast='BUSINESS CARD'
								className='yellow-gradient'
							/>
							<ProductCard
								cardImage={blackcard}
								cardNameFirst='SIGNATURE'
								cardNameLast='UNIQUE CARD'
								className='black-gradient'
							/>
						</div>
					</div>
					<div className='text-center ' style={{ marginTop: "5rem" }}>
						<button
							style={{
								backgroundColor: "#144F53",
								borderRadius: "25px",
								padding: "10px",
								border: "none",
								color: "white",
								marginRight: "1rem",
							}}
						>
							Order Now
						</button>
						<ProductButton>Create Your Card Now</ProductButton>
					</div>
				</section>
			</div>
		</>
	);
};
