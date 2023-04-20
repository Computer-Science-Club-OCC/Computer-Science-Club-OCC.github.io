import React from "react";
import ProjectCard from "../../components/projects/project-card/Project-Card";
import { projectsMap } from "./fakeProjectsData";

function Projects() {
	return( 
		<div className="flex justify-center items-center gap-6 flex-wrap">
		{projectsMap &&
			projectsMap.map((ele, key) => (
				<React.Fragment key={key}>
					<ProjectCard
						title={ele.title}
						description={ele.description}
						status={ele.status}
						gitUrl={ele.gitUrl}
						discordUrl={ele.discordUrl}
						projectUrl={ele.projectUrl}
					/>
				</React.Fragment>
			))}
	</div>
	)
}

export default Projects;
