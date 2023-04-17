import { tutorialsMap } from "../../pages/resources/fakeData";
import "./resources.css";
import ToggleItem from "../toggleItem/ToggleItem";
import Tags from "./Tags";

function Tutorials() {
	return (
		<ul className="resource-list">
			{tutorialsMap.map(tutorial => (
				<ToggleItem
					key={tutorial.id}
					id={tutorial.id}
					title={tutorial.title}
					description={tutorial.description}
					url={tutorial.url}
					urlText="Watch the video here"
				>
					<Tags tags={tutorial.tags} />
				</ToggleItem>
			))}
		</ul>
	);
}

export default Tutorials;
