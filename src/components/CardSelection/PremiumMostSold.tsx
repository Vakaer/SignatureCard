import React, { useState, useEffect } from "react";
import "../CardSelection/PremiumMostSold.css";
import { MostSoldCard } from "./MostSoldCard/MostSoldCard";
import blackcard from "../../../assets/cards/card-black.png";
import { CardData } from "../CardSelection/MostSoldCard/cardData";

interface CardProps {}
export const PremiumMostSold = () => {
	const [Index, setIndex] = useState(0);
	const [selectedCard, setSelectedCard] = useState<any>();
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

	function next() {
		setIndex(Index + 1);
		moveArray(Index);
	}
	function previous() {
		setIndex(Index - 1);
		moveArray(Index);
	}

	function moveArray(Index: number) {
		const element = cardImage[Index];
		cardImage.splice(Index, 1);
		cardImage.splice(0, 0, element);
		setCardImage(cardImage);
	}

	return (
		<>
			<section className='premium-most-sold'>
				<div className='row'>
					<div className='mt-5 mb-5'>
						<h2 className='text-center text-light' style={{ fontFamily: "HavleticaNowText" }}>
							PREMIUM MOST SOLD
						</h2>
						<div className='col-10 col-md-8 m-auto'>
							<div className='card-holder-wrapper  ms-auto ml-auto position-relative'>
								<div className='card-holder d-flex gap-2 flex-row ' style={{ overflow: "hidden" }}>
									{cardImage.map((value: any, index: number) => {
										const { id, image } = value;

										return <img key={index} src={image} />;
									})}
								</div>
							</div>
							<div className='d-flex flex-row cardList overflow-hidden'>
								{cardImage.map((value: any, index: number) => {
									const { id, image } = value;
									if (index < 5) {
										return (
											<div>
												<img key={id} src={image} onClick={() => moveArray(index)} />
											</div>
										);
									}
								})}
							</div>
							<button onClick={() => next()}>next</button>
							<button onClick={() => previous()}>prev</button>
						</div>
						<div className='text-center' style={{ marginTop: "5rem" }}>
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

// onClick={() => moveArray(id, index)}
