import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import classNames from 'classnames';
import nav from './_nav';

class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.activeRoute = this.activeRoute.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		e.target.parentElement.classList.toggle('open');
	}

	activeRoute(routeName, props) {
		return props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
	}

	render() {
		// simple wrapper for nav-title item
		const wrapper = (item) => {
			if (!item.wrapper) {
				return item.name;
			}
			return (React.createElement(item.wrapper.element, item.wrapper.attributes, item.name));
		};

		// nav list section title
		const title = (titleData, key) => {
			const classes = classNames('nav-title', titleData.class);
			return (<li key={key} className={classes}>{wrapper(titleData)} </li>);
		};

		// nav list divider
		const divider = (dividerData, key) => (<li key={key} className="divider" />);

		// nav item with nav link
		const navItem = (item, key) => {
			const classes = classNames('nav-link', item.class);
			return (
				<NavItem key={key}>
					<NavLink to={item.url} className={classes} activeClassName="active">
						<i className={item.icon} />{item.name}
					</NavLink>
				</NavItem>
			);
		};

		// nav link
		const navLink = (item, idx) => {
			if (item.title) {
				return title(item, idx);
			}
			if (item.divider) {
				return divider(item, idx);
			}
			return navItem(item, idx);
		};

		// nav list
		// eslint-disable-next-line no-use-before-define
		const navList = items => items.map((item, index) => navLink(item, index));

		// sidebar-nav root
		return (
			<div className="sidebar">
				<nav className="sidebar-nav">
					<Nav>
						{navList(nav.items)}
					</Nav>
				</nav>
			</div>
		);
	}
}

export default Sidebar;
