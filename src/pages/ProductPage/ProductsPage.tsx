import React from "react";

import "../ProductPage/ProductsPage.css";
import { BestProducts, Product } from "./Product";
import { AiOutlineArrowRight } from "react-icons/ai";

export const ProductsPage = () => {
	return (
		<>
			<section className='products-page background-image'>
				<div className='col-12 bg-black text-light'>
					<div className='container p0' style={{ paddingBottom: "30rem" }}>
						<h1 className='pt-5'>PRODUCTS</h1>
						<div className='filters mt-sm-5 mt-lg-5 mb-sm-5 mb-lg-5 d-flex justify-content-between flex-lg-row flex-sm-column'>
							<div className='d-flex text-sm-center col-12 col-md-12 col-lg-6 gap-5'>
								<p>Signature Credit Card</p>
								<p>Signature Business Card</p>
								<p>Signature Unique Card </p>
							</div>
							<div className='d-flex  col-md-12 justify-content-lg-end justify-content-sm-center gap-3  col-lg-6 flex-row '>
								<p>
									<span>Default: </span> All
								</p>
								<p>
									<span>Time: </span> All Time
								</p>
							</div>
						</div>
						<div className='col-11 d-flex products flex-sm-column flex-lg-row justify-content-between flex-row gap-lg-2 gap-md-5 m-auto flex-lg-wrap'>
							<Product />
						</div>
						<div className='text-center'>
							<button className='next-page-btn '>
								NEXT PAGE <AiOutlineArrowRight />
							</button>
						</div>
						<div className='col-11 d-flex flex-sm-column flex-lg-row justify-content-between flex-row gap-lg-2 gap-md-5 m-auto flex-lg-wrap'>
							<h3 className='pt-3'>BEST DESIGNS</h3>
							<div className='col-12 mt-4  products d-flex flex-sm-column flex-lg-row justify-content-between flex-row gap-lg-2 gap-md-5 m-auto flex-lg-wrap'>
								<BestProducts />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
