import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBlock, Table } from 'reactstrap';

import { fetchCharactersIfNeeded } from '../actions';

const propTypes = {
	items: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	lastUpdated: PropTypes.number,
	dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const { characters } = state;
	const {
		isFetching,
		lastUpdated,
		items
	} = characters || {
			isFetching: true,
			items: []
		};
	return {
		items,
		isFetching,
		lastUpdated
	}
}

class YourCharactersCard extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { dispatch } = this.props
		dispatch(fetchCharactersIfNeeded())
	}

	render() {
		const { items, isFetching, lastUpdated } = this.props;
		const rows = items.map((item) =>
			<tr key={item.id}><td>{item.characterName || "Unnamed Character"} (<a href="#">{item.urlIdentifier}</a>)</td><td><a href="#">Edit</a></td></tr>
		);
		return (
			<Card className="your-characters-card">
				<CardHeader>
					<i className="fa fa-users"></i> Your Characters
				</CardHeader>
				<CardBlock className="card-body">
					<Table>
						<tbody>
							{rows}
						</tbody>
					</Table>
				</CardBlock>
			</Card>
		)
	}
}

YourCharactersCard.propTypes = propTypes;

export default connect(mapStateToProps)(YourCharactersCard);
