import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

function Card(props) {
	const {
		title,
		month,
		day,
		year,
		description,
		transitionRight,
		transitionLeft,
	} = props;
	return (
		<div
			key={title}
			className={
				transitionRight
					? "element-right"
					: transitionLeft
					? "element-left"
					: "element"
			}
		>
			<h1 className="element-date">{`${month} ` + ((day >= 1 && day < 10) ? `0${day}` : `${day}`) + `, ${year}`}</h1>

			{[...title].length === 0 && <h2 className="element-title">None</h2>}
			{[...title].length > 0 && [...title].length < 46 && (
				<h2 className="element-title">{title}</h2>
			)}
			{[...title].length > 0 && [...title].length >= 46 && (
				<h2 className="element-title">{`${title.substring(0, 42)}...`}</h2>
			)}

			{[...description].length === 0 && (
				<p className="element-description">Empty</p>
			)}
			{[...description].length > 0 && [...description].length < 140 && (
				<p className="element-description">{description}</p>
			)}
			{[...description].length > 0 && [...description].length >= 140 && (
				<p className="element-description">
					{`${description.substring(0, 137)}...`}
				</p>
			)}

			<Link className="learn-more-button" to={`/news/${year}/${title}`}>
				Learn More
			</Link>
		</div>
	);
}

export default Card;
