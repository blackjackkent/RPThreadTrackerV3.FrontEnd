import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBlock, Table } from 'reactstrap';

const propTypes = {
};

const defaultProps = {
};

class YourCharactersCard extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Card className="your-characters-card">
				<CardHeader>
					<i className="fa fa-users"></i> Your Characters
				</CardHeader>
				<CardBlock className="card-body">
					<Table>
						<tbody>
							<tr>
								<td>
									Unnamed Character
											</td>
								<td>
									<a href="#">Edit</a>
								</td>
							</tr>
						</tbody>
					</Table>
				</CardBlock>
			</Card>
		)
	}
}

YourCharactersCard.propTypes = propTypes;
YourCharactersCard.defaultProps = defaultProps;

export default YourCharactersCard;
