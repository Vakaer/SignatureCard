import React, { useState } from "react";
import "../OurDesigners/OurDesigners.css";
import redCard from "../../assets/cards/card-red.png";
import zincCard from "../../assets/cards/card-zinc.png";
import client from "../../assets/cards/client.png";
import Prev from "../../assets/icons/ic-prev.svg";
import next from "../../assets/icons/ic-next.svg";

export const OurDesigners = () => {
	const [animation, setAnimation] = useState(false);
	const animate = () => {
		setAnimation(true);
		setTimeout(() => setAnimation(false), 2000);
	};
	return (
		<>
			<section className='our-designers'>
				<div className='row'>
					<div className='mt-5'>
						<h2 className='text-center text-light'>OUR DESIGNERS</h2>
						<div
							className='d-flex justify-content-center  gap-1 align-items-center'
							style={{ marginTop: "7rem" }}
						>
							<img src={Prev} className='icons' />
							<div className='d-flex align-items-center flex-column'>
								<img src={redCard} className={`w-75 ${animation ? "card-1" : null}`} />
								<div className='mt-4 text-light text-center lh-1'>
									<p>CARD NAME</p>
									<p>Lorem ipsum dolor sit amet, consectetur</p>
									<p>Price : 00$</p>
								</div>
							</div>
							<div>
								<img src={client} style={{ height: "350px", width: "350px" }} />
							</div>
							<div className='d-flex align-items-center flex-column'>
								<img src={zincCard} className={`w-75 ${animation ? "card-2" : null}`} />
								<div className='mt-4 text-light text-center lh-1'>
									<p>CARD NAME</p>
									<p>Lorem ipsum dolor sit amet, consectetur</p>
									<p>Price : 00$</p>
								</div>
							</div>
							<img src={next} onClick={() => animate()} className='icons' />
						</div>
						<div className='text-center ' style={{ marginTop: "5rem" }}>
							<button
								style={{
									backgroundColor: "white",
									borderRadius: "25px",
									padding: "7px 30px",
									border: "none",
									color: "#144F53",
									marginRight: "1rem",
								}}
							>
								Order Now
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
