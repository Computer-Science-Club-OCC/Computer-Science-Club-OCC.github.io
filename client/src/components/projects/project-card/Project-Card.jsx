import React from "react";
import {
	DiscordIcon,
	GithubIcon,
	ProjectCardImg,
	ProjectIcon,
} from "../../../asset/icons/icons";
import "./project-card.css"

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
		<div className="w-96 h-96 rounded-3xl bg-gray-med p-8 text-white drop-shadow-lg flex flex-col gap-4 hover:scale-110 mt-8 transition-all ease-in">
			<div className="text-orange flex justify-center items-center">
				<ProjectCardImg />
			</div>
			<div className="flex flex-col gap-6">
				<p className="text-2xl">{title}</p>
				<p className=" text-white text-base line-clamp-4">
					{description}
				</p>

				<div className="flex gap-4 justify-between items-center relative">
					<p className="text-base">
						Status: <span className={statusColor(status)}>{status}</span>
					</p>
                    <div className="flex flex-row flex-wrap gap-2">
						<a className="project-card-link" data-tooltip="GitHub" href={gitUrl}>
							<GithubIcon />
						</a>
						<a className="project-card-link" data-tooltip="Discord" href={discordUrl}>
							<DiscordIcon />
						</a>
						<a
                        className="project-card-link" 
                        data-tooltip="Project"
                        href={projectUrl}>
							<ProjectIcon />
						</a>
                    </div>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;