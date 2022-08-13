import { faker } from "@faker-js/faker";

const eventsMap = [];

for (let i = 1; i <= 20; i += 1) {
	const title = faker.company.catchPhrase();
	const description = faker.lorem.paragraph(3);
	const location = faker.address.buildingNumber();
	const image = faker.image.nature(640, 480, true);

	const dateTime = faker.date.recent(30);
	const date = dateTime.toLocaleDateString();
	const time = dateTime.toLocaleTimeString();

	eventsMap.push({
		id: i,
		title,
		description,
		date,
		time,
		location,
		image,
	});
}

export default eventsMap;
