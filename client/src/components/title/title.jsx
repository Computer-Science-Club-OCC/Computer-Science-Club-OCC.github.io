import React, { Component } from "react";

function Title(props) {
	if (props.color = "orange") then (line = bg-orange, braces = text-orange)
	else if (props.color = "blue") then (line = bg-blue, braces = text-blue)

		return (
			<div className="flex justify-center items-center h-[72px] mb-6">
				<hr
					className={`w-3/4 h-1 ${props.color} border-0 mx-1 mt-[15px]`}
				/>
				<div className="flex items-center mx-1 min-w-fit">
					<p className={`text-6xl ${props.color} font-medium mx-1`}>
						&#123;
					</p>
					<h1 className="text-4xl mx-1 text-white font-medium mt-[10px]">
						{props.title}
					</h1>
					<p className={`text-6xl ${props.color} font-medium mx-1`}>
						&#125;
					</p>
				</div>
				<hr
					className={`w-3/4 h-1 ${props.color} border-0 mx-1 mt-[15px]`}
				/>
			</div>
		);
	}

export default Title;
