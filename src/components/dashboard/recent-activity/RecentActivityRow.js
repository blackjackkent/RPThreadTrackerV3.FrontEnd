import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

const propTypes = {
};

const defaultProps = {
};

class RecentActivityRow extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Row>
				<Col xs="12" sm="6">
					<div><a href="#">Dom and Senkata (theshadowoflavellan)</a></div>
					<div className="small ">
						Last Post by <a href="#">theshadowoflavellan</a>
					</div>
				</Col>
				<Col sm="6" xs="12" className="text-right">
					<div>Apr 22, 2017 1:22:11 PM </div>
					<div className="small"><a href="#">Untrack</a> &bull; <a href="#">Archive</a> &bull; <a href="#">Mark Queued</a></div>
				</Col>
			</Row>
		)
	}
}

RecentActivityRow.propTypes = propTypes;
RecentActivityRow.defaultProps = defaultProps;

export default RecentActivityRow;
