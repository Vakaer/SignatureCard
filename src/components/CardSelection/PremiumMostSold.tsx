import React, { useState, useEffect } from "react";
import "../CardSelection/PremiumMostSold.css";
import { MostSoldCard } from "./MostSoldCard/MostSoldCard";
import blackcard from "../../../assets/cards/card-black.png";
import { CardData } from "../CardSelection/MostSoldCard/cardData";

interface CardProps {}
export const PremiumMostSold = () => {
	const [Index, setIndex] = useState(0);
	const [cardImage, setCardImage] = useState(CardData);
	useEffect(() => {
		const lastindex = CardData.length - 1;
		if (Index > lastindex) {
			setIndex(0);
		}
		if (Index < 0) {
			setIndex(lastindex);
		}
	}, [Index, cardImage]);
	return (
		<>
			<section className='premium-most-sold'>
				<div className='row'>
					<div className='mt-5 mb-5'>
						<h2 className='text-center text-light' style={{ fontFamily: "HavleticaNowText" }}>
							PREMIUM MOST SOLD
						</h2>
						<div className='container-wrapper'>
							<div className='card-holder-wrapper position-relative'>
								<div
									className='card-holder d-flex flex-row w-75 h-75'
									style={{ overflow: "hidden" }}
								>
									{/* {cardImage.map(value: any, index: number => {

									})} */}
									{cardImage.map((value: any, index: number) => {
										const { id, image } = value;
										if (Index === index || (Index < 0 && Index > index)) {
											return (
												<img key={index} src={image} style={{ width: "100%", height: "100%" }} />
											);
										}
									})}
								</div>
							</div>
							<button onClick={() => setIndex(Index + 1)}>next</button>
							<button onClick={() => setIndex(Index - 1)}>prev</button>
						</div>
						<div className='text-center ' style={{ marginTop: "5rem" }}>
							<button
								style={{
									backgroundColor: "#144F53",
									borderRadius: "25px",
									padding: "8px 30px",
									border: "none",
									color: "white",
									marginRight: "1rem",
								}}
							>
								LET'S DISCUSS
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
