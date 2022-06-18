import { Link } from 'react-router-dom';
import './navbar.css';


const NavigationBar = () => {
	return (
		<div className='navbar-container'>
			<ul className='middle-items'>
				<li className='list-item'>
					<Link to='/homepage' className='link'>
						Homepage
					</Link>
				</li>
				<li className='list-item'>
					<Link to='/activity' className='link'>
						Activity
					</Link>
				</li>
				<li className='list-item'>
					<Link to='/resources' className='link'>
						Resources
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavigationBar;