import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const propTypes = {
	tag: PropTypes.shape({}).isRequired
};

const TagManagementRow = (props) => {
	const { tag } = props;
	return (
		<tr>
			<td>
				#{tag.tagText}
			</td>
			<td>
				{tag.tagUsageCount} thread{tag.tagUsageCount !== 1 ? 's' : ''}
			</td>
			<td>
				<Button color="primary" className="ml-3">Rename Tag</Button>
			</td>
			<td>
				<Button color="danger" className="ml-3">Delete Tag</Button>
			</td>
		</tr>
	);
};
TagManagementRow.propTypes = propTypes;
export default TagManagementRow;
