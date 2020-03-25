import React from 'react';
import { FormGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import CleanSelect from '../../shared/styled/CleanSelect';
import publicThreadFilterKeys from '../../../infrastructure/constants/publicThreadFilterKeys';

const propTypes = {
	publicThreadFilter: PropTypes.string,
	setPublicThreadFilter: PropTypes.func.isRequired
};

const defaultProps = {
	publicThreadFilter: publicThreadFilterKeys.ALL
};

const PublicThreadFilterSelect = (props) => {
	const { publicThreadFilter, setPublicThreadFilter } = props;
	return (
		<FormGroup className="public-view-filter-select">
			<CleanSelect>
				<Input
					type="select"
					name="tag"
					id="tag"
					className="clean-select"
					value={publicThreadFilter}
					onChange={(e) => setPublicThreadFilter(e.target.value)}
				>
					<option value={publicThreadFilterKeys.ALL}>Show All</option>
					<option value={publicThreadFilterKeys.MY_TURN}>Show Only My Turn</option>
					<option value={publicThreadFilterKeys.PARTNERS_TURN}>
						Show Only Partner&apos;s Turn
					</option>
					<option value={publicThreadFilterKeys.QUEUED}>
						Show Only Currently Queued
					</option>
					<option value={publicThreadFilterKeys.ARCHIVED}>Show Only Archived</option>
				</Input>
			</CleanSelect>
		</FormGroup>
	);
};

PublicThreadFilterSelect.propTypes = propTypes;
PublicThreadFilterSelect.defaultProps = defaultProps;
export default PublicThreadFilterSelect;
