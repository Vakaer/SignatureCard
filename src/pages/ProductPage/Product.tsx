import React, { useState } from "react";
import cardBlack from "../../assets/cards/card-zinc.png";
import { ProductCardsData } from "./productData";
import "../ProductPage/ProductsPage.css";

export const Product = () => {
	const [product, setProduct] = useState(ProductCardsData);
	return (
		<>
			{product.map((value: any, index: number) => {
				const { id, image, cardType, designerName } = value;
				console.log(value);
				return (
					<>
						<div key={id} className='pb-5 '>
							<div className='card-dimensions'>
								<img src={image} />
							</div>
							<div className='pt-1'>
								<p>{cardType}</p>
								<p>{designerName}</p>
							</div>
						</div>
					</>
				);
			})}
		</>
	);
};

export const BestProducts = () => {
	const [product, setProduct] = useState(ProductCardsData);
	return (
		<>
			{product.map((value: any, index: number) => {
				const { id, image, cardType, designerName } = value;
				if (index < 6) {
					return (
						<>
							<div key={id} className='pb-5'>
								<div className='card-dimensions'>
									<img src={image} />
								</div>
								<div className='pt-1'>
									<p>{cardType}</p>
									<p>{designerName}</p>
								</div>
							</div>
						</>
					);
				}
			})}
		</>
	);
};
