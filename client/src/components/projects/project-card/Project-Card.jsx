import React from "react";
import {
	DiscordIcon,
	GithubIcon,
	ProjectCardImg,
	ProjectIcon,
} from "../../../asset/icons/icons";

function ProjectCard({
	title,
	description,
	status,
	gitUrl,
	discordUrl,
	projectUrl,
	image,
}) {
	const statusColor = statusText => {
		if (statusText === "Ongoing") return "text-onGoing";
		if (statusText === "Inactive") return "text-inActive";
		if (statusText === "Completed") return "text-completed";
		return "text-canceled";
	};

	return (
		<div className="w-96 h-96 rounded-3xl bg-projectCardBg p-8 text-white drop-shadow-lg flex flex-col gap-4 hover:scale-110 mt-8 transition-all ease-in">
			<div className="text-projectCardLinkHover flex justify-center items-center">
				<ProjectCardImg />
			</div>
			<div className="flex flex-col gap-6">
				<p className="text-2xl">{title}</p>
				<p className=" text-projectCardDescription text-base line-clamp-4">
					{description}
				</p>

				<div className="flex gap-4 items-center relative">
					<p className="text-base">
						Status: <span className={statusColor(status)}>{status}</span>
					</p>
					<div className="projectCardLinks" data-tooltip="Github">
						<a href={gitUrl}>
							<GithubIcon />
						</a>
					</div>
					<div className="projectCardLinks" data-tooltip="Discord">
						<a href={discordUrl}>
							<DiscordIcon />
						</a>
					</div>
					<div className="projectCardLinks" data-tooltip="Project">
						<a href={projectUrl}>
							<ProjectIcon />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;



//file moved to correct folder
//drop shadow fixed