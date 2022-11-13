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
					? "element-right relative shadow-[1.5px_4px_3px_4px_black] h-[260px] min-w-[275px] max-w-[270px] bg-[grey] text-white p-[10px] m-[10px] text-left rounded-md box-border flex flex-col justify-end space-y-2.5 z-0 animate-cardSlidingL hover:shadow-[5px_8px_6px_8px_black] news-sm:animate-cardSlidingLSm"
					: transitionLeft
					? "element-left relative shadow-[1.5px_4px_3px_4px_black] h-[260px] min-w-[275px] max-w-[270px] bg-[grey] text-white p-[10px] m-[10px] text-left rounded-md box-border flex flex-col justify-end space-y-2.5 z-0 animate-cardSlidingR hover:shadow-[5px_8px_6px_8px_black] news-sm:animate-cardSlidingRSm"
					: "element shadow-[1.5px_4px_3px_4px_black] h-[260px] min-w-[275px] max-w-[270px] bg-[grey] text-white p-[10px] m-[10px] text-left rounded-md box-border flex flex-col justify-end space-y-2.5 z-0 hover:shadow-[5px_8px_6px_8px_black]"
			}
		>
			<h1 className="element-date w-full m-0 h-auto text-xl font-bold">{`${month} ` + ((day >= 1 && day < 10) ? `0${day}` : `${day}`) + `, ${year}`}</h1>

			{[...title].length === 0 && <h2 className="element-title text-green-700 text-base">None</h2>}
			{[...title].length > 0 && [...title].length < 40 && (
				<h2 className="element-title text-green-700 text-base">{title}</h2>
			)}
			{[...title].length > 0 && [...title].length >= 40 && (
				<h2 className="element-title text-green-700 text-base">{`${title.substring(0, 36)}...`}</h2>
			)}

			{[...description].length === 0 && (
				<p className="element-description border-2 h-[120px] w-full text-base">Empty</p>
			)}
			{[...description].length > 0 && [...description].length < 140 && (
				<p className="element-description border-2 h-[120px] w-full text-base">{description}</p>
			)}
			{[...description].length > 0 && [...description].length >= 140 && (
				<p className="element-description border-2 h-[120px] w-full text-base">
					{`${description.substring(0, 137)}...`}
				</p>
			)}

			<Link className="learn-more-button py-[10px] px-[40px] border-[3px] border-[orange] rounded-sm text-center w-fit text-xs whitespace-nowrap hover:bg-[orange] hover:text-black" to={`/news/${year}/${title}`}>
				Learn More
			</Link>
		</div>
	);
}

export default Card;
