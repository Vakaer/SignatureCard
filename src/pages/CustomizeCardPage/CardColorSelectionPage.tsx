import React, { useState, useEffect } from "react";
import chipdark from "../../assets/cards/CardColorSelectionPage/Borders/chip-card-1.png";
import chiplight from "../../assets/cards/CardColorSelectionPage/Borders/chip-card-2.png";
import BorderOne from "../../assets/cards/CardColorSelectionPage/Borders/border-card-1.png";
import LogoForPinkcard from "../../assets/cards/CardColorSelectionPage/CardLogo/logo-card-1.png";
import bgBlack from "../../assets/cards/CardColorSelectionPage/background/bg-shiny-black.png";
import "../CustomizeCardPage/CardColorSelectionPage.css";
import { CardBgImageData, CardBorderData, CardColorsData, CardlogoData } from "./data/data";

export const CardColorSelection = () => {
	const [Index, setIndex] = useState(0);
	const [chip, setChip] = useState(chiplight);
	const [cardBackground, setCardBackground] = useState(CardBgImageData);
	const [bg, setBg] = useState<any>([]);
	const [border, setBorder] = useState<any>(BorderOne);
	const [cardLogo, setCardLogo] = useState<any>(LogoForPinkcard);
	const [showCardLogo, setShowCardLogo] = useState(false);
	const [showCardBorder, setShowCardBorder] = useState(false);

	const handleCustomDesign = () => {
		setShowCardLogo(!showCardLogo);
	};
	const handleCustomBorder = () => {
		setShowCardBorder(!showCardBorder);
	};
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

	const selectCardlogo = (id: number) => {
		const logo = CardlogoData.find((item) => item.id === id);
		setCardLogo(logo);
	};
	const selectCardBorder = (id: number) => {
		const border = CardBorderData.find((item) => item.id === id);
		setBorder(border);
		console.log(border);
	};
	return (
		<>
			<section className='customize-card-page-bg d-flex flex-column gap-5 justify-content-end '>
				<div className='back-gif'></div>
				<div className='col-12 position-relative d-flex'>
					<div
						className='d-flex col-lg-10 m-auto align-items-end  justify-content-between flex-row'
						style={{ zIndex: "2" }}
					>
						<div className='col-lg-2 d-flex flex-column gap-3 align-items-center justify-content-center'>
							{showCardLogo && (
								<div
									style={{
										width: "90%",
										height: "424px",
										overflowY: "scroll",
										background: "rgba(255, 255, 255, 0.05)",
										backdropFilter: "blur(6px)",
										borderRadius: "20px",
									}}
									className='d-flex flex-column'
								>
									{CardlogoData.map((value: any, index: number) => {
										const { id, logo } = value;
										return (
											<div
												key={id}
												style={{
													margin: "auto",
													borderRadius: "20px",
													padding: "0.2rem 0.5rem 0rem 0.5rem",
												}}
											>
												<img
													src={logo}
													style={{ width: "100%", height: "100%" }}
													onClick={() => selectCardlogo(id)}
												/>
											</div>
										);
									})}
								</div>
							)}
							<div className='d-flex justify-content-center'>
								<button className='selection-btn' onClick={handleCustomDesign}>
									Custom Design
								</button>
							</div>
						</div>

						<div className='col-lg-6 d-flex flex-column gap-5 '>
							<div
								className='d-flex flex-row gap-3 m-auto'
								style={{ overflow: "hidden", width: "86%" }}
							>
								{bg.map((value: any, Index: number) => {
									const { id, background } = value;

									return (
										<div className='position-relative card'>
											<img
												src={border.border}
												className='position-absolute'
												style={{ top: "1.5rem", left: "1.5rem", height: "86%" }}
											/>
											<div
												className='position-absolute d-flex justify-content-center'
												style={{ mixBlendMode: "screen" }}
											>
												<img src={cardLogo.logo} style={{ width: "100%" }} />
											</div>
											<div
												className='position-absolute d-flex justify-content-center '
												style={{ top: "5rem" }}
											>
												<img src={chip} style={{ width: "80%" }} />
											</div>
											<img
												key={Index}
												src={background}
												style={{ width: "100%", height: "100%", margin: "auto" }}
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

						<div className='col-lg-2 justify-content-center'>
							<div className=' d-flex flex-column gap-3 align-items-center justify-content-center'>
								{showCardBorder && (
									<div
										style={{
											width: "90%",
											height: "300px",
											overflowY: "scroll",
											background: "rgba(255, 255, 255, 0.05)",
											backdropFilter: "blur(6px)",
											borderRadius: "20px",
										}}
										className='d-flex flex-column gap-1'
									>
										{CardBorderData.map((value: any, index: number) => {
											const { id, border } = value;
											return (
												<div
													key={id}
													style={{
														margin: "auto",
														borderRadius: "20px",
														padding: "0.2rem 0.5rem 0rem 0.5rem",
													}}
													className='pt-2'
												>
													<img
														src={border}
														style={{ width: "100%", height: "100%", mixBlendMode: "plus-lighter" }}
														className='p-1'
														onClick={() => selectCardBorder(id)}
													/>
												</div>
											);
										})}
									</div>
								)}
								<div className='d-flex justify-content-center'>
									<button className='selection-btn' onClick={handleCustomBorder}>
										Selection of borders
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='d-flex justify-content-center'>
					<button className='selection-btn'>Order now</button>
				</div>
			</section>
		</>
	);
};
