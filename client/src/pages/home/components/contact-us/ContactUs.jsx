import {
	Facebook,
	Instagram,
	Discord,
	Mail,
} from "../../../../asset/icons/icons";
import "./contact-us.css";

function ContactUs() {
	return (
		<div className="contact-container">
			<div className="contact-header">
				<h1>Contact Us</h1>
			</div>
			<div className="contact-content">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco
				</p>
				<div className="icon-list">
					<a href="#facebook" className="link">
						<div className="circle">
							<Facebook className="icon" />
						</div>
						<span>Facebook</span>
					</a>
					<a href="#Instagram" className="link">
						<div className="circle">
							<Instagram className="icon" />
						</div>
						<span>Instagram</span>
					</a>
					<a href="#Discord" className="link">
						<div className="circle">
							<Discord className="icon" />
						</div>
						<span>Discord</span>
					</a>
					<a href="#Gmail" className="link">
						<div className="circle">
							<Mail className="icon" />
						</div>
						<span>Gmail</span>
					</a>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor
					<a id="form" href="#google-form">
						Registration form
					</a>
				</p>
				<p>
					We care about your opinion!
					<a id="form" href="#feedback">
						Feedback form
					</a>
				</p>
			</div>
		</div>
	);
}

export default ContactUs;
