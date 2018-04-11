import React, { Component } from 'react';
import {
	Row, Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ThreadTable from './PublicThreadTable';
import getColumns from './_columns';

const propTypes = {
	publicThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

function mapStateToProps(state) {
	const {
		publicThreads
	} = state;
	return {
		publicThreads
	};
}

class Public extends Component {
	render() {
		const {
			publicThreads
		} = this.props;
		return (
			<div className="animated fadeIn">
				<Row>
					<Col>
						<ThreadTable
							columns={getColumns()}
							threads={publicThreads}
						/>
					</Col>
				</Row>
			</div >
		);
	}
}

Public.propTypes = propTypes;
export default connect(mapStateToProps)(Public);
