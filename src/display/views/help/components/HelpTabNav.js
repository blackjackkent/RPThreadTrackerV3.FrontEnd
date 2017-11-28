import React from 'react';
import {
	Nav, NavItem, NavLink
} from 'reactstrap';

const AboutTrackerPane = (props) => {
	const { activeTab, setActiveTab } = props;
	return (
		<Nav tabs>
			<NavItem>
				<NavLink
					href="#about"
					className={activeTab === 'about' ? 'active' : ''}
					onClick={() => { setActiveTab('about'); }}
				>
					<i className="fa fa-info-circle" /> About RPThreadTracker
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink
					href="#support"
					className={activeTab === 'support' ? 'active' : ''}
					onClick={() => { setActiveTab('support'); }}
				>
					<i className="fa fa-question-circle" /> Support Topics
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink
					href="#contact"
					className={activeTab === 'contact' ? 'active' : ''}
					onClick={() => { setActiveTab('contact'); }}
				>
					<i className="fa fa-envelope" /> Contact Me
				</NavLink>
			</NavItem>
		</Nav>
	);
}

export default AboutTrackerPane;
