import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import nav from './_nav';
import Style from './_styles';

const Sidebar = () => {
	const { items } = nav;
	const navList = items.map((item) => {
		if (item.title) {
			return (
				<li key={item.name} className="nav-title">
					<span>{item.name}</span>
				</li>
			);
		}
		return (
			<NavItem key={item.name}>
				<NavLink to={item.url} className="nav-link" activeClassName="active">
					<i className={item.icon} />
					{item.name}
				</NavLink>
			</NavItem>
		);
	});

	return (
		<Style className="sidebar">
			<nav className="sidebar-nav">
				<Nav>{navList}</Nav>
			</nav>
		</Style>
	);
};

export default Sidebar;
