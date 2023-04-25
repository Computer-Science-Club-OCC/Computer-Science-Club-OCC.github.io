import { organizationsMap } from "./fakeData";
import "./resources.css";
import ToggleItem from "../../components/toggleItem/ToggleItem";
import Tags from "../../components/resources/Tags";

function Organizations() {
	return (
		<ul className="resource-list">
			{organizationsMap.map(org => (
				<ToggleItem
					key={org.id}
					id={org.id}
					title={org.title}
					description={org.description}
					url={org.url}
					urlText="Learn more here"
				>
					<Tags tags={org.tags} />
				</ToggleItem>
			))}
		</ul>
	);
}

export default Organizations;
