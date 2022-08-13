import { faker } from "@faker-js/faker";

const projectsMap = [];

const statusList = ["Completed", "Ongoing"];

for (let i = 1; i <= 10; i += 1) {
	const title = `Project #${i}`;
	const description = faker.lorem.paragraph(2);
	const status = statusList[Math.floor(Math.random() * 2)];
	const startDate = faker.date.past(1).toLocaleDateString();
	const endDate = faker.date.soon(10).toLocaleDateString();

	projectsMap.push({
		id: i,
		title,
		description,
		status,
		startDate,
		endDate,
		discordUrl: "https://discord.com/",
		gitUrl: "https://github.com/",
		projectUrl: "https://angular.io/",
	});
}

export { eventsMap, projectsMap };
