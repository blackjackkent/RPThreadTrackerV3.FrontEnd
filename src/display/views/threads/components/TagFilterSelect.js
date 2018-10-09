import React from 'react';
import { FormGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import CleanSelect from '../../../shared/styled/CleanSelect';

const propTypes = {
	tags: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	filteredTag: PropTypes.string,
	setFilteredTag: PropTypes.func.isRequired
};

const defaultProps = {
	filteredTag: undefined
};

const TagFilterSelect = (props) => {
	const { tags, filteredTag, setFilteredTag } = props;
	const options = [];
	for (let i = 0; i < tags.length; i++) {
		const element = (
			<option
				value={tags[i].tagText}
				key={tags[i].threadTagId}
			>
				{tags[i].tagText}
			</option>);
		options.push(element);
	}
	return (
		<FormGroup className="tag-filter-select">
			<CleanSelect>
				<Input
					type="select"
					name="tag"
					id="tag"
					className="clean-select"
					value={filteredTag}
					onChange={e => setFilteredTag(e.target.value)}
				>
					<option value="">Filter by Tag</option>
					{options}
				</Input>
			</CleanSelect>
		</FormGroup>
	);
};

TagFilterSelect.propTypes = propTypes;
TagFilterSelect.defaultProps = defaultProps;
export default TagFilterSelect;
