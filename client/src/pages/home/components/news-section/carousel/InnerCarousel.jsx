import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import "./innercarousel.css";

function InnerCarousel(props) {
	const { data, cards, index, handleIndex } = props;
	const [transition, setTransition] = useState(0);

	const handleClickLeftSlider = () => {
		if (index > 0) {
			handleIndex(index - 1);

			if (transition > 0) {
				setTransition(-1 * transition - 1);
			} else {
				setTransition(transition - 1);
			}
		}
	};

	const handleClickRightSlider = () => {
		handleIndex(index + 1);

		if (transition < 0) {
			setTransition(-1 * transition + 1);
		} else {
			setTransition(transition + 1);
		}
	};

	return (
		<div className="inner-slider h-full w-full flex items-center justify-center">
			<div className="left-slider flex-[1%] h-full flex items-center justify-end text-white bg-[#21262d] z-20">
				{index > 0 && (
					<FontAwesomeIcon
						icon={faChevronLeft}
						style={{ fontSize: 40 }}
						onClick={handleClickLeftSlider}
						className="back-arrow mr-[.5vw] cursor-pointer z-1"
					/>
				)}
				{index === 0 && (
					<FontAwesomeIcon
						icon={faChevronLeft}
						style={{ fontSize: 40 }}
						className="back-arrow-inactive mr-[.5vw] text-[rgba(255, 255, 255, 0.1)] z-1"
					/>
				)}
			</div>
			{transition < 0 && (
				<div className="transition-right-center-slider flex-[40%] h-full flex flex-row-reverse items-center box-border bg-[#21262d] min-w-[890px] max-w-[890px] carousel-sm:min-w-[307px] carousel-sm:max-w-[307px] carousel-lg:min-w-[596px] carousel-lg:max-w-[596px]">
					{index >= 1 &&
						data
							.slice(index - 1, index + cards + 1)
							.reverse()
							.map((element, num = 0) => (
								<Card
									key={num++}
									title={element.title}
									month={element.month}
									day={element.day}
									year={element.year}
									description={element.description}
									transitionLeft
									transitionRight={false}
								/>
							))}
					{index === 0 &&
						data
							.slice(index, index + cards + 1)
							.reverse()
							.map((element, num = 0) => (
								<Card
									key={num++}
									title={element.title}
									month={element.month}
									day={element.day}
									year={element.year}
									description={element.description}
									transitionLeft
									transitionRight={false}
								/>
							))}
				</div>
			)}
			{transition === 0 && (
				<div className="center-slider flex-[40%] h-full max-w-[890px] min-w-[890px] flex relative justify-center items-center bg-[#21262d] box-border carousel-sm:min-w-[307px] carousel-sm:max-w-[307px] carousel-lg:min-w-[596px] carousel-lg:max-w-[596px]">
					{data.slice(index, index + cards).map((element, num = 0) => (
						<Card
							key={num++}
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
			{transition > 0 && (
				<div className="transition-center-slider flex[40%] h-full flex items-center box-border bg-[#21262d] min-w-[890px] max-w-[890px] carousel-sm:min-w-[307px] carousel-sm:max-w-[307px] carousel-lg:min-w-[596px] carousel-lg:max-w-[596px]">
					{data.slice(index - 1, index + cards + 1).map((element, num = 0) => (
						<Card
							key={num++}
							title={element.title}
							month={element.month}
							day={element.day}
							year={element.year}
							description={element.description}
							transitionLeft={false}
							transitionRight
						/>
					))}
				</div>
			)}
			<div className="right-slider flex-[1%] h-full flex items-center justify-start text-white bg-[#21262d] z-20">
				{index < data.length - cards && (
					<FontAwesomeIcon
						icon={faChevronRight}
						style={{ fontSize: 40 }}
						onClick={handleClickRightSlider}
						className="forward-arrow ml-[.5vw] cursor-pointer z-1"
					/>
				)}
				{(index === data.length - cards || data.length <= cards) && (
					<FontAwesomeIcon
						icon={faChevronRight}
						style={{ fontSize: 40 }}
						className="forward-arrow-inactive ml-[.5vw] text-[rgba(255, 255, 255, 0.1)] z-1"
					/>
				)}
			</div>
		</div>
	);
}

export default InnerCarousel;
