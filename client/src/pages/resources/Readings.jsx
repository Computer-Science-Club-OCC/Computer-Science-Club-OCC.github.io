import { readingsMap } from "./fakeData";
import "./resources.css";
import ToggleItem from "../../components/toggleItem/ToggleItem";
import Tags from "../../components/resources/Tags";

function Readings() {
	return (
		<div>
			{readingsMap.map(reading => {
				return (
					<ToggleItem
						key={reading.id}
						id={reading.id}
						title={reading.title}
						publicationDate={reading.publicationDate}
						description={reading.description}
						url={reading.url}
						urlText="Read it here"
					>
						<Tags tags={reading.tags} />
					</ToggleItem>
				);
			})}
		</div>
	);
}

export default Readings;
