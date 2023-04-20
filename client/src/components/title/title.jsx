import React, { Component } from "react";

function Title({ color, title }) {
	let line;
	let braces;

	if (color == "orange") {
		(line = "bg-orange"), (braces = "text-orange");
	} else if (color == "blue") {
		(line = "bg-blue"), (braces = "text-blue");
	}

	return (
		<div className="flex justify-center items-center h-[72px] my-5">
			<hr className={`w-3/4 h-1 ${line} border-0 mx-1 mt-3`} />
			<div className="flex items-center mx-1 min-w-fit">
				<p className={`text-6xl ${braces} font-medium mx-1`}>&#123;</p>
				<h1 className="text-4xl mx-2 text-white font-medium mt-[10px]">
					{title}
				</h1>
				<p className={`text-6xl ${braces} font-medium mx-1`}>&#125;</p>
			</div>
			<hr className={`w-3/4 h-1 ${line} border-0 mx-1 mt-3`} />
		</div>
	);
}

export default Title;
