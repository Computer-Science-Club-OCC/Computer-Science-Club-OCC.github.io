/**
 * This file is only used for testing during frontend development. It will be removed after configured with backend
 */

/**
 * TODO: Delete this map once configured with mongodb
 */
const tutorialsMap = [
	{
		id: 1,
		title: "React in 100 Seconds",
		description:
			"React is a little JavaScript library with a big influence over the webdev world. Learn the basics of React in 100 Seconds",
		url: "https://www.youtube.com/watch?v=Tn6-PIqc4UM",
		tags: ["webdev", "react"],
	},
	{
		id: 2,
		title: "Learn REACT JS in just 30 MINUTES (2021)",
		description: "Build your first app in ReactJS!",
		url: "https://www.youtube.com/watch?v=vIRBSI-elUM",
		tags: ["webdev", "react"],
	},
	{
		id: 3,
		title:
			"10 Steps To Self Learn Embedded Systems Episode #1 - Embedded System Consultant Explains",
		description:
			"In this video, embedded systems consultant Martin Schroder outlines ten steps to self learn embedded systems.",
		url: "https://www.youtube.com/watch?v=XhO-SwIsr44",
		tags: ["embedded", "C"],
	},
	{
		id: 4,
		title:
			"RESTful APIs in 100 Seconds // Build an API from Scratch with Node.js Express",
		description:
			"What is an API? What is REST? Learn how an Application Programming Interface (API) can adhere to Representational State Transfer (REST) to enable reliable communication between apps ",
		url: "https://www.youtube.com/watch?v=-MTSQjw5DrM",
		tags: ["webdev", "node"],
	},
	{
		id: 5,
		title: "Airbnb REACT.JS Challenge",
		description: "Build an Airbnb App with Next.js and Tailwind CSS",
		url: "https://www.youtube.com/watch?v=ifcODOhSH1o",
		tags: ["webdev", "nextjs", "tailwind"],
	},
	{
		id: 6,
		title:
			"How to Build a NETFLIX Clone with REACT JS for Beginners (in 3 Hours!)",
		description:
			"In this FREE LIVE training, Qazi and Sonny will show you how simple it is to create a full stack, NETFLIX CLONE using React, Firebase & Material-UI",
		url: "https://www.youtube.com/watch?v=XtMThy8QKqU",
		tags: ["webdev", "react"],
	},
	{
		id: 7,
		title:
			"🔴 Build a Slack Clone in React JS (Realtime chat app using Firebase)",
		description:
			"In this FREE LIVE training, Qazi & Sonny will show you how to build a Slack Clone with REACT JS (Real-time chat app with Firebase) 🚀🔥",
		url: "https://www.youtube.com/watch?v=Oo4ziTddOxs",
		tags: ["webdev", "react"],
	},
	{
		id: 8,
		title: "CS50's Introduction to Artificial Intelligence with Python 2020",
		description:
			"This course explores the concepts and algorithms at the foundation of modern artificial intelligence, diving into the ideas that give rise to technologies like game-playing engines, handwriting recognition, and machine translation.",
		url: "https://www.youtube.com/watch?v=gR8QvFmNuLE&list=PLhQjrBD2T382Nz7z1AEXmioc27axa19Kv&index=1",
		tags: ["ai", "python"],
	},
	{
		id: 9,
		title: "That Weird JavaScript Course",
		description:
			"That Weird JavaScript Course takes a unique approach towards teaching fundamental programming concepts. Not only will you learn practical techniques for building apps, but you will also gain knowledge about the history, science, and culture that surrounds the world’s most widely-used programming language.",
		url: "https://www.youtube.com/watch?v=Sh6lK57Cuk4&list=PL0vfts4VzfNixzfaQWwDUg3W5TRbE7CyI",
		tags: ["webdev", "javascript"],
	},
	{
		id: 10,
		title: "Algorithms Course",
		description:
			"Learn the foundations of algorithms from Udemy lecturer, Abdul Bari.",
		url: "https://www.youtube.com/watch?v=0IAPZzGSbME&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=1",
		tags: ["DS&A"],
	},
	{
		id: 11,
		title: "Data Structures & Algorithms Tutorial in Python",
		description:
			"This data structure tutorials playlist covers various data structures and their internals. The playlist covers array, linked list, hash table, stack, tree, queue, BST- Binary Search Tree, etc are explained well in detail. Under the hash table, collision handling in the hash table is also included.  The best part about this playlist is that there are exercises at the end, which will help you understand the concepts better.",
		url: "https://www.youtube.com/watch?v=_t2GVaQasRY&list=PLeo1K3hjS3uu_n_a__MI_KktGTLYopZ12&index=1",
		tags: ["DS&A", "python"],
	},
];

const readingsMap = [
	{
		id: 1,
		title: "10 articles every ReactJS developer should read",
		publicationDate: "Jun 13, 2018",
		description: "Here are some articles!",
		url: "https://medium.com/fantageek/10-articles-that-reactjs-developer-should-read-1b4d6fb6d057",
		tags: ["webdev", "react"],
	},
	{
		id: 2,
		title:
			"All the fundamental React.js concepts, jammed into this one article",
		publicationDate: "Aug 18, 2017",
		description:
			"This is a practical introduction to the fundamentals of React.js for those who are already familiar with JavaScript and know the basics of the DOM API.",
		url: "https://www.freecodecamp.org/news/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2",
		tags: ["webdev", "react"],
	},
	{
		id: 3,
		title:
			"Cracking the Coding Interview - 189 Programming Questions and Solutions (6th edition)",
		publicationDate: "July 1, 2015",
		description:
			"Learn how to uncover the hints and hidden details in a question, discover how to break down a problem into manageable chunks, develop techniques to unstick yourself when stuck, learn (or re-learn) core computer science concepts, and practice on 189 interview questions and solutions.",
		url: "http://englishonlineclub.com/pdf/Cracking%20the%20Coding%20Interview%20-%20189%20Programming%20Questions%20and%20Solutions%20(6th%20Edition)%20[EnglishOnlineClub.com].pdf",
		tags: ["interviews", "DS&A"],
	},
	{
		id: 4,
		title: "Elements of Programming Interviews: The Insiders' Guide",
		publicationDate: "October 11, 2012",
		description:
			"The core of EPI is a collection of over 250 problems with detailed solutions. The problems are representative of interview questions asked at leading software companies. The problems are illustrated with 200 figures, 300 tested programs, and 150 additional variants.\nThe book begins with a summary of the nontechnical aspects of interviewing, such as strategies for a great interview, common mistakes, perspectives from the other side of the table, tips on negotiating the best offer, and a guide to the best ways to use EPI. We also provide a summary of data structures, algorithms, and problem solving patterns.",
		url: "https://drive.google.com/file/d/1pDyVySjYmmCBJgaSwCWNoN0YvSOvkStM/view?usp=sharing",
		tags: ["interviews", "DS&A"],
	},
	{
		id: 5,
		title: "CS Career Questions Wiki",
		publicationDate: "Mar 19, 2011",
		description:
			"A subreddit for those with questions about working in the tech industry or in a computer-science-related job.",
		url: "https://www.reddit.com/r/cscareerquestions/wiki/index/",
		tags: [
			"university",
			"internships",
			"career",
			"interviews",
			"resource list",
		],
	},
	{
		id: 6,
		title: "List of Freely Available Programming Books",
		publicationDate: "",
		description:
			"This project lists books and other resources for programming-related subjects and languages.",
		url: "https://ebookfoundation.github.io/free-programming-books/",
		tags: ["resource list"],
	},
	{
		id: 7,
		title: "Automate the Boring Stuff with Python",
		publicationDate: "November 12, 2019",
		description:
			"Learn how to use Python to write programs that do in minutes what would take you hours to do by hand - no prior programming experience required.",
		url: "http://automatetheboringstuff.com/",
		tags: ["python", "automation"],
	},
	{
		id: 8,
		title: "The modern web on a slow connection",
		publicationDate: "2017",
		description:
			"An article on user interactions with slow or bad connections and how to make pages usable. Written by FAANG senior software engineer, Dan Luu",
		url: "https://danluu.com/web-bloat/",
		tags: ["webdev"],
	},
	{
		id: 9,
		title: "CS Internships 101",
		publicationDate: "",
		description:
			"This guide is meant as a jumping off point for first-time internship seekers who are curious about the essential components of the interview process, interview prep, and state of the industry.",
		url: "https://docs.google.com/document/d/1x6uVpjK-bDc7_Up9Gofr91-qovdc2eZW_DpI1N9oNfo/edit",
		tags: ["interviews", "internships"],
	},
	{
		id: 10,
		title: "Data Analytics by Arthur Zhang",
		publicationDate: "March 10, 2017",
		description:
			"Practical	Guide	to	Leveraging	the	Power	of	Algorithms, Data	Science,	Data	Mining,	Statistics,	Big	Data,	and Predictive	Analysis	to	Improve	Business,	Work,	and	Life",
		url: "https://media-exp1.licdn.com/dms/document/C4D1FAQHM8XydXURnYg/feedshare-document-pdf-analyzed/0/1651481610677?e=2147483647&v=beta&t=Oh7ZUoZufNiPGozYAx0IcHRaTLHlBkaCMeZha8R2kC0",
		tags: ["data science", "data visualization"],
	},
	{
		id: 11,
		title: "Starting your Career in Embedded System Design and Programming",
		publicationDate: "Dec 29, 2019",
		description:
			"This blog post series is intended for beginners and intermediate audience who wish to start a career in Embedded system design.\nThe tools & techniques that you will learn if you follow along the post, will give you an in-depth knowledge & confidence to be able to create robust code+hardware as well as secure good jobs/internships.",
		url: "https://medium.com/@Bluehell/starting-your-career-in-embedded-system-design-and-programming-part-1-1661f9f6f809",
		tags: ["embedded"],
	},
];

const organizationsMap = [
	{
		id: 1,
		title: "The Odin Project",
		description:
			"The Odin Project empowers aspiring web developers to learn together for free.",
		url: "https://www.theodinproject.com",
		tags: ["webdev"],
	},
	{
		id: 2,
		title: "Awwwards",
		description:
			"Awwwards are the Website Awards that recognize and promote the talent and effort of the best developers, designers and web agencies in the world.",
		url: "https://www.awwwards.com/",
		tags: ["webdev"],
	},
	{
		id: 3,
		title: "Major League Hacking",
		description:
			"Major League Hacking (MLH) is the official student hackathon league. Each year, they power over 200 weekend-long invention competitions that inspire innovation, cultivate communities and teach computer science skills to more than 65,000 students around the world.",
		url: "https://mlh.io/",
		tags: ["hackathon"],
	},
	{
		id: 4,
		title: "LeetCode",
		description:
			"LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.",
		url: "https://leetcode.com/",
		tags: ["interviews"],
	},
	{
		id: 5,
		title: "AWS Training and Certification",
		description:
			"Learn AWS online with free digital training, in-person classroom training, virtual classroom training, and private on-site and virtual training.",
		url: "https://www.aws.training/",
		tags: ["AWS", "cloud"],
	},
	{
		id: 6,
		title: "Udemy",
		description:
			"Udemy is an online learning and teaching marketplace with over 185000 courses and 49 million students. Learn programming, marketing, data science and more.",
		url: "https://www.udemy.com/",
		tags: ["education"],
	},
	{
		id: 7,
		title: "Coursera",
		description:
			"Coursera partners with over 250 leading university and industry partners to offer a broad catalog of content and credentials, including courses, Specializations, Professional Certificates, Guided Projects, and bachelor’s and master’s degrees. Institutions around the world use Coursera to upskill and reskill their employees, citizens, and students in fields such as data science, technology, and business.",
		url: "https://www.coursera.org/",
		tags: ["education"],
	},
	{
		id: 8,
		title: "Stanford Online",
		description:
			"Stanford's free online courses provide you with an affordable and flexible way to learn new skills and study new and emerging topics. Learn from Stanford instructors and industry experts at no cost to you.",
		url: "https://online.stanford.edu/free-courses",
		tags: ["education"],
	},
	{
		id: 9,
		title: "Codecademy",
		description:
			"Codecademy is an online learning website focused on coding, with over 45 million users, created to teach programming in an engaging, effective way. Use it to learn 12 different programming languages such as Python, Java, Go, JavaScript, Ruby, SQL, C++, Swift, and Sass, as well as markup languages such as HTML and CSS.",
		url: "https://www.codecademy.com/",
		tags: ["education"],
	},
	{
		id: 10,
		title: "CodeChef",
		description:
			"A platform for competitive programming. Compete in monthly coding contests and earn high ranks!",
		url: "https://www.codechef.com/",
		tags: ["competitive"],
	},
	{
		id: 11,
		title: "HackUCI",
		description:
			"HackUCI is the largest collegiate hackathon in Orange County where like-minded individuals with various different backgrounds and skill sets come together for 36 hours to “invent” something from the ground up.",
		url: "https://www.hackuci.com/",
		tags: ["hackathon"],
	},
];

module.exports = { tutorialsMap, readingsMap, organizationsMap };
