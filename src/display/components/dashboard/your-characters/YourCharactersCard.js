import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBlock, Table } from 'reactstrap';

import { fetchCharactersIfNeeded } from '../../../../state/characters/actions';

const propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		characterName: PropTypes.string,
		urlIdentifier: PropTypes.string.isRequired,
		isOnHiatus: PropTypes.bool.isRequired
	})).isRequired,
	dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const { characters } = state;
	let { items } = characters;
	if (!items || !items.length) {
		items = [];
	}
	return { items };
}

class YourCharactersCard extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchCharactersIfNeeded());
	}

	render() {
		const { items } = this.props;
		const rows = items.map(item =>
			(
				<tr key={item.id}>
					<td>{item.characterName || 'Unnamed Character'} (<a href="/url">{item.urlIdentifier}</a>)</td>
					<td><a href="/edit">Edit</a></td>
				</tr>
			));
		return (
			<Card className="your-characters-card">
				<CardHeader>
					<i className="fa fa-users" /> Your Characters
				</CardHeader>
				<CardBlock className="card-body">
					<Table>
						<tbody>
							{rows}
						</tbody>
					</Table>
				</CardBlock>
			</Card>
		);
	}
}

YourCharactersCard.propTypes = propTypes;

export default connect(mapStateToProps)(YourCharactersCard);
