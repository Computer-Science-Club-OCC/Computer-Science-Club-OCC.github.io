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
		<div className="inner-slider">
			<div className="left-slider">
				{index > 0 && (
					<FontAwesomeIcon
						icon={faChevronLeft}
						style={{ fontSize: 40 }}
						onClick={handleClickLeftSlider}
						className="back-arrow"
					/>
				)}
				{index === 0 && (
					<FontAwesomeIcon
						icon={faChevronLeft}
						style={{ fontSize: 40 }}
						className="back-arrow-inactive"
					/>
				)}
			</div>
			{transition < 0 && (
				<div className="transition-right-center-slider">
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
				<div className="center-slider">
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
				<div className="transition-center-slider">
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
			<div className="right-slider">
				{index < data.length - cards && (
					<FontAwesomeIcon
						icon={faChevronRight}
						style={{ fontSize: 40 }}
						onClick={handleClickRightSlider}
						className="forward-arrow"
					/>
				)}
				{(index === data.length - cards || data.length <= cards) && (
					<FontAwesomeIcon
						icon={faChevronRight}
						style={{ fontSize: 40 }}
						className="forward-arrow-inactive"
					/>
				)}
			</div>
		</div>
	);
}

export default InnerCarousel;
