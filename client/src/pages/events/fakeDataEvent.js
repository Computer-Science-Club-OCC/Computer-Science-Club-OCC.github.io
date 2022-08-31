import { faker } from "@faker-js/faker";

const eventsMap = [];

for (let i = 1; i <= 50; i += 1) {
	const title = faker.company.catchPhrase();
	const detail = faker.lorem.paragraph(2);
	const dateTime = faker.date.future(60);
	const date =
		dateTime.getDate() < 10
			? `0${dateTime.getDate().toLocaleString()}`
			: dateTime.getDate().toLocaleString();
	const month = dateTime.toLocaleString("en-US", { month: "short" });
	const time = dateTime.toLocaleTimeString();
	const location = `Room ${faker.address.buildingNumber()}`;

	// id is mock-up for string type uuid
	const images = [
		{ id: "01", img: faker.image.nature() },
		{ id: "02", img: faker.image.technics() },
		{ id: "03", img: faker.image.animals() },
	];
	const meetingUrl = "https://zoom.us/";

	eventsMap.push({
		id: i,
		title,
		detail,
		date,
		month,
		time,
		location,
		images,
		meetingUrl,
	});
}

export default eventsMap;
