import React, { useState, useEffect } from "react";
import chipdark from "../../assets/cards/CardColorSelectionPage/Borders/chip-card-1.png";
import chiplight from "../../assets/cards/CardColorSelectionPage/Borders/chip-card-2.png";
import BorderOne from "../../assets/cards/CardColorSelectionPage/Borders/border-card-1.png";
import LogoForPinkcard from "../../assets/cards/CardColorSelectionPage/CardLogo/logo-card-1.png";
import bgBlack from "../../assets/cards/CardColorSelectionPage/background/bg-shiny-black.png";
import "../CustomizeCardPage/CardColorSelectionPage.css";
import { CardBgImageData, CardColorsData } from "./data/data";

export const CardColorSelection = () => {
	const [Index, setIndex] = useState(0);
	const [cardBackground, setCardBackground] = useState(CardBgImageData);
	const [bg, setBg] = useState<any>([]);
	const [border, setBorder] = useState(BorderOne);
	const [chip, setChip] = useState(chiplight);
	console.log(chip);
	useEffect(() => {
		const newvalue = cardBackground.filter((value, index) => {
			return index === Index;
		});
		const back = bg.filter((value: any) => {
			if (value.id === 4 || value.id === 1) {
				setChip(chipdark);
			} else if (value.id === 5) {
				setChip("");
			} else {
				setChip(chiplight);
			}
		});
		setBg(newvalue);
		console.log(back);
	}, [Index]);
	// console.log("bg: ", bg);
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
										<div className='position-relative card'>
											<img
												src={BorderOne}
												className='position-absolute'
												style={{ top: "2rem", left: "2rem", height: "86%" }}
											/>
											<img
												src={LogoForPinkcard}
												className='position-absolute'
												style={{
													top: "2rem",
													left: "2rem",
													height: "86%",
													mixBlendMode: "screen",
												}}
											/>
											<img
												src={chip}
												className='position-absolute'
												style={{ top: "6rem", left: "5rem" }}
											/>
											<img
												key={Index}
												src={background}
												style={{ width: "758px", height: "428px", margin: "auto" }}
											/>
										</div>
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
