import React, { Component } from 'react';
import {
	Row, Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPublicThreads } from '../../../infrastructure/actions';
import ThreadTable from './PublicThreadTable';
import getColumns from './_columns';

const propTypes = {
	publicThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	slug: PropTypes.string,
	fetchPublicThreads: PropTypes.func.isRequired
};

const defaultProps = {
	slug: ''
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
	componentDidMount() {
		this.props.fetchPublicThreads(this.props.slug);
	}
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
Public.defaultProps = defaultProps;
export default connect(mapStateToProps, {
	fetchPublicThreads
})(Public);
