import React from 'react';
import PropTypes from 'prop-types';
import {
	NavItem, NavLink
} from 'reactstrap';

const propTypes = {
	tabId: PropTypes.string.isRequired,
	activeTab: PropTypes.string.isRequired,
	setActiveTab: PropTypes.func.isRequired,
	iconId: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

class StaticTabNavItem extends React.Component {
	constructor() {
		super();
		this.onClick = this.onClick.bind(this);
	}
	onClick(e, tabId) {
		e.preventDefault();
		this.props.setActiveTab(tabId);
	}
	render() {
		const {
			tabId,
			activeTab,
			iconId,
			title
		} = this.props;
		return (
			<NavItem>
				<NavLink
					href={`#${tabId}`}
					className={activeTab === tabId ? 'active' : ''}
					onClick={(e) => { this.onClick(e, tabId); }}
				>
					<span className="d-none d-xl-inline"><i className={iconId ? `fas fa-${iconId}` : ''} /></span> {title}
				</NavLink>
			</NavItem>
		);
	}
}
StaticTabNavItem.propTypes = propTypes;

export default StaticTabNavItem;
