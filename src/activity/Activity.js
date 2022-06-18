import React from 'react';
import { Carousel } from 'react-bootstrap';


const Activity = () => {
	return (
	<div>
		Activity
		<TestCarousel />;
		<Projects />;
	</div>);
};

export default Activity;

function TestCarousel() {
	return (
		<div className="container">
			<h1 className="text-white text-center">Events</h1>
			<Carousel>
				<Carousel.Item>
					<img
					className="d-block w-100"
					src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png"
					alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					className="d-block w-100"
					src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png"
					alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					className="d-block w-100"
					src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png"
					alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
		
	);
};

function Projects() {
	let title = "Dummy Title"
	let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, n\
	sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, n\
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor";
	let time = "2:00PM Thu mm/dd/yyyy";

	return (
		<div className="container bg-primary">
			<div className="container mt-3 mb-3">
				<h1 className="text-black text-center">Projects</h1>
			</div>
			<div className="row row-cols-auto">
				<div className="col-sm-6">
					<div className="card">
						<div className="card-title">
							<h1 className="text-center">{title} 1</h1>
						</div>
						<div className="card-body">
							<img class="img-fluid" src="https://www.elmhurst.edu/wp-content/uploads/2018/12/5-skills-project-management-degree-elmhurst-college-infographic-thumb.jpg" alt="text">
							</img>
							<p>{description}</p>
							<p>{time}</p>
						</div>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="card" width="30rem" height="30rem">
						<div className="card-title">
							<h1 className="text-center">{title} 2</h1>
						</div>
						<div className="card-body">
							<img class="img-fluid" src="https://www.ntaskmanager.com/wp-content/uploads/2020/10/project-design-in-project-management.png" alt="text">
							</img>
							<p>{description}</p>
							<p>{time}</p>
						</div>
					</div>
				</div>
			</div>

		</div>
	) 
}