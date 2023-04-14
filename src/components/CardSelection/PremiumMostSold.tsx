import React, { useState, useEffect } from "react";
import "../CardSelection/PremiumMostSold.css";
import blackcard from "../../../assets/cards/card-black.png";
import { CardData } from "../CardSelection/MostSoldCard/cardData";
import { TbMathGreater } from "react-icons/tb";
import { TbMathLower } from "react-icons/tb";
import nextIcon from "../../assets/icons/ic-next.svg";
import prevIcon from "../../assets/icons/ic-next.svg";

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

	function next(arr: { id: number; image: string }[], index: number) {
		setIndex(Index + 1);
		move(arr, 0, Index);
	}
	function previous(arr: { id: number; image: string }[], index: number) {
		setIndex(Index - 1);
		move(arr, 0, Index);
	}

	// function moveArray(Index: number) {
	// 	//console.log(Index);
	// 	const element = cardImage[Index];
	// 	cardImage.splice(Index, 1);
	// 	cardImage.splice(0, 0, element);
	// 	setCardImage(cardImage);
	// }

	function move(arr: any, oldIndex: any, new_index: any) {
		while (oldIndex < 0) {
			oldIndex += arr.length;
		}
		while (new_index < 0) {
			new_index += arr.length;
		}
		if (new_index >= arr.length) {
			var k = new_index - arr.length;
			while (k-- + 1) {
				arr.push(undefined);
			}
		}
		arr.splice(new_index, 0, arr.splice(oldIndex, 1)[0]);
		return arr;
	}

	return (
		<>
			<section className='premium-most-sold position-relative'>
				<div className='row'>
					<div className='mt-5 mb-5'>
						<h2 className='text-center text-light' style={{ fontFamily: "HavleticaNowText" }}>
							PREMIUM MOST SOLD
						</h2>
						<div className='col-7 ms-auto me-auto mt-5 mb-5 '>
							<div
								className='d-flex align-items-center col-7 justify-content-between position-absolute'
								style={{ top: "22rem" }}
							>
								<img
									src={nextIcon}
									className='slider-btn'
									style={{ marginLeft: "-1.5rem", cursor: "pointer" }}
									onClick={() => next(cardImage, Index)}
								/>
								<img
									src={prevIcon}
									className='slider-btn'
									style={{ marginRight: "-1.5rem", cursor: "pointer" }}
									onClick={() => previous(cardImage, Index)}
								/>
							</div>
							<div style={{ border: "1px solid #fff", borderRadius: "48px 48px 0px 0px" }}>
								<div className='card-holder-wrapper ms-auto ml-auto'>
									<div
										className='card-holder col-12 d-flex gap-2 gap-xxl-5 flex-row animate '
										style={{ overflow: "hidden" }}
									>
										{cardImage.map((value: any, index: number) => {
											const { id, image } = value;

											return <img key={index} src={image} />;
										})}
									</div>
								</div>
							</div>
							<div
								className='d-flex flex-row cardList overflow-hidden animate'
								style={{ marginTop: "2px" }}
							>
								{cardImage.map((value: any, index: number) => {
									const { id, image } = value;
									if (index < 5) {
										if (index === 0) {
											return (
												<div style={{ border: "1px solid white" }}>
													<div
														style={{
															backgroundColor: "#fff",
															mixBlendMode: "soft-light",
														}}
													>
														<img key={id} src={image} onClick={() => move(cardImage, 0, index)} />
													</div>
												</div>
											);
										} else
											return (
												<div style={{ backgroundColor: "#262525" }}>
													<img key={id} src={image} onClick={() => move(cardImage, 0, index)} />
												</div>
											);
									}
								})}
							</div>
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
