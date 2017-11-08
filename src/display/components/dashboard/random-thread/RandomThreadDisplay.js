import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Moment from 'react-moment';

const propTypes = {
	thread: PropTypes.shape({}).isRequired
};

const RandomThreadDisplay = (props) => {
	const { thread } = props;
	return (
		<div className='random-thread-result'>
			<div><a href={thread.lastPostUrl}>{thread.userTitle} <i className='fa fa-external-link'></i></a></div>
			<div className="small ">
				Last Post by <a href={thread.lastPostUrl}>{thread.lastPosterUrlIdentifier}</a>
			</div>
		</div>
	);
};

RandomThreadDisplay.propTypes = propTypes;
export default RandomThreadDisplay;
