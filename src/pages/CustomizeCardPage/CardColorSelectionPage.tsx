import React, { useState, useEffect } from "react";
import card from "../../assets/cards/CardColorSelectionPage/background/bg-sea-blue.png";
import "../CustomizeCardPage/CardColorSelectionPage.css";
import { CardBgImageData, CardColorsData } from "./data/data";

export const CardColorSelection = () => {
	const [Index, setIndex] = useState(0);
	const [cardBackground, setCardBackground] = useState(CardBgImageData);
	const [bg, setBg] = useState<any>([]);
	useEffect(() => {
		const newvalue = cardBackground.filter((value, index) => {
			return index === Index;
		});
		setBg(newvalue);
	}, [Index]);
	//console.log(bg);
	return (
		<>
			<section className='customize-card-page-bg d-flex flex-column justify-content-center '>
				<div className='col-12 position-relative d-flex'>
					<div className='back-gif'></div>
					<div
						className='d-flex col-lg-10 m-auto align-items-end  justify-content-center flex-row'
						style={{ zIndex: "2" }}
					>
						<div className='col-lg-2 d-flex justify-content-center'>
							<button className='selection-btn'>Custom Design</button>
						</div>

						<div className='col-lg-8 d-flex flex-column gap-5 '>
							<div
								className='d-flex flex-row gap-3 m-auto'
								style={{ overflow: "hidden", width: "86%" }}
							>
								{bg.map((value: any, Index: number) => {
									const { id, background } = value;

									return (
										<img
											key={Index}
											src={background}
											style={{ width: "758px", height: "428px", margin: "auto" }}
										/>
									);
								})}
							</div>

							<div className='d-flex flex-row text-light text-center justify-content-center gap-3 flex-nowrap'>
								{CardColorsData.map((value: any, Index: number) => {
									const { id, color, name } = value;
									return (
										<div key={id}>
											<div
												className='card-color'
												onClick={() => setIndex(Index)}
												style={{ backgroundColor: `${color}` }}
											></div>
											<p>{name}</p>
										</div>
									);
								})}
							</div>
						</div>

						<div className='col-lg-2 d-flex justify-content-center'>
							<button className='selection-btn'>Selection of borders</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
