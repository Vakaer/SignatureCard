import React, { useState, useEffect } from "react";
import "../CardSelection/PremiumMostSold.css";
import blackcard from "../../../assets/cards/card-black.png";
import { CardData } from "../CardSelection/MostSoldCard/cardData";
import { TbMathGreater } from "react-icons/tb";
import { TbMathLower } from "react-icons/tb";
import nextIcon from "../../assets/icons/ic-next.svg";
import prevIcon from "../../assets/icons/ic-next.svg";
import Slider from "react-slick";

interface CardProps {}
export const PremiumMostSold = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [oldIndex, setOldIndex] = useState(0);
	const [selectedCard, setSelectedCard] = useState<any>();
	const [cardImage, setCardImage] = useState(CardData);

	function next(arr: { id: number; image: string }[], index: number) {
		setCurrentIndex(currentIndex + 1);
		move(arr, 0, currentIndex);
	}
	function previous(arr: { id: number; image: string }[], index: number) {
		setCurrentIndex(currentIndex - 1);
		move(arr, 0, currentIndex);
	}

	function move(arr: any, oldIndex: any, new_index: any) {
		console.log("newIndex: ", new_index);
		console.log("oldIndex: ", oldIndex);

		while (oldIndex < 0) {
			oldIndex += arr.length;
			console.log("first condition: ", oldIndex);
		}
		while (new_index < 0) {
			new_index += arr.length;
			console.log("second condition: ", new_index);
		}
		if (new_index >= arr.length) {
			var k = new_index - arr.length;
			while (k-- + 1) {
				arr.push(undefined);
			}
			console.log(arr);
		}
		arr.splice(new_index, 0, arr.splice(oldIndex, 1)[0]);
		return arr;
	}

	function MoveArray(id: number) {
		console.log(id);
		const card = cardImage.filter((card) => card.id === id);
		setCardImage(card);
		const newArray = cardImage.slice(0, cardImage.length);
		console.log(newArray);
		card.map((item) => {
			newArray.unshift(item);
		});
	}

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
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
									onClick={() => next(cardImage, currentIndex)}
								/>
								<img
									src={prevIcon}
									className='slider-btn'
									style={{ marginRight: "-1.5rem", cursor: "pointer" }}
									onClick={() => previous(cardImage, currentIndex)}
								/>
							</div>
							<div
								style={{
									borderRadius: "48px 48px 0px 0px",
								}}
							>
								<div className='card-holder-wrapper ms-auto ml-auto '>
									<div
										className='card-holder m-auto d-flex gap-2 gap-xxl-5 flex-row '
										style={{ overflow: "hidden" }}
									>
										<Slider {...settings}>
											<div className='d-flex flex-row gap-2'>
												{cardImage.map((value: any, index: number) => {
													const { id, image } = value;

													return <img key={index} src={image} />;
												})}
											</div>
										</Slider>
									</div>
								</div>
							</div>
							<div
								className='d-flex flex-row cardList overflow-hidden'
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
															backgroundColor: "#8080808c",
														}}
													>
														<img key={id} src={image} onClick={() => MoveArray(id)} />
													</div>
												</div>
											);
										} else
											return (
												<div style={{ backgroundColor: "#262525" }}>
													<img key={id} src={image} onClick={() => MoveArray(id)} />
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
						+
					</div>
				</div>
			</section>
		</>
	);
};

// onClick={() => moveArray(id, index)}
