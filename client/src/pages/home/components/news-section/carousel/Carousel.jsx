import React, { useState, useEffect } from "react";
import "./carousel.css";
import InnerCarousel from "./InnerCarousel";
import Card from "./Card";

function Carousel({ data }) {
	const [index, setIndex] = useState(0);
	const [windowDimension, detectWidth] = useState({
		windowWidth: window.innerWidth,
	});

	const detectSize = () => {
		detectWidth({
			windowWidth: window.innerWidth,
		});
	};

	useEffect(() => {
		window.addEventListener("resize", detectSize);

		return () => {
			window.removeEventListener("resize", detectSize);
		};
	}, [windowDimension]);

	const handleIndex = index => {
		setIndex(index);
	};

	return (
		<>
			{windowDimension.windowWidth >= 1139 && data.length > 3 && (
				<div className="slider w-full h-[340px]">
					<InnerCarousel
						data={data}
						cards={3}
						index={data.length - 3 < index ? data.length - 3 : index}
						handleIndex={handleIndex}
					/>
				</div>
			)}
			{windowDimension.windowWidth >= 1139 && data.length <= 3 && (
				<div className="card-container w-full h-[340px] flex items-center justify-center bg-[#21262d]">
					{data.map((element, index) => (
						<Card
							key={index}
							title={element.title}
							month={element.month}
							day={element.day}
							year={element.year}
							description={element.description}
							transitionLeft={false}
							transitionRight={false}
						/>
					))}
				</div>
			)}
			{ windowDimension.windowWidth < 1139 &&
				windowDimension.windowWidth >= 660 &&
				data.length > 2 && (
					<div className="slider w-full h-[340px]">
						<InnerCarousel
							data={data}
							cards={2}
							index={data.length - 2 < index ? data.length - 2 : index}
							handleIndex={handleIndex}
						/>
					</div>
				)}
			{ windowDimension.windowWidth < 1139 &&
				windowDimension.windowWidth >= 660 &&
				data.length <= 2 && (
					<div className="card-container w-full h-[340px] flex items-center justify-center bg-[#21262d]">
						{data.map((element, index) => (
							<Card
								key={index}
								title={element.title}
								month={element.month}
								day={element.day}
								year={element.year}
								description={element.description}
								transitionLeft={false}
								transitionRight={false}
							/>
						))}
					</div>
						)}
			{windowDimension.windowWidth < 660 && data.length > 1 && (
				<div className="slider w-full h-[340px]">
					<InnerCarousel
						data={data}
						cards={1}
						index={index}
						handleIndex={handleIndex}
					/>
				</div>
			)}
			{windowDimension.windowWidth < 660 && data.length === 1 && (
				<div className="card-container w-full h-[340px] flex items-center justify-center bg-[#21262d]">
					{data.map((element, index) => (
						<Card
							key={index}
							title={element.title}
							month={element.month}
							day={element.day}
							year={element.year}
							description={element.description}
							transitionLeft={false}
							transitionRight={false}
						/>
					))}
				</div>
			)}
		</>
	);
}

export default Carousel;
