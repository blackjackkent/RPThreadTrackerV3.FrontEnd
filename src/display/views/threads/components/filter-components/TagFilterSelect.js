import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

const propTypes = {
	tags: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	rawFilterData: PropTypes.shape({}).isRequired,
	setFilteredTag: PropTypes.func.isRequired
};

const TagFilterSelect = (props) => {
	const { tags, rawFilterData, setFilteredTag } = props;
	const options = [];
	if (tags) {
		for (let i = 0; i < tags.length; i++) {
			const element = <option value={tags[i].tagText} key={tags[i].threadTagId}>{tags[i].tagText}</option>;
			options.push(element);
		}
	}
	return (
		<FormGroup>
			<Label htmlFor="tag">Tag</Label>
			<Input
				type="select"
				name="tag"
				id="tag"
				value={rawFilterData.filteredTag}
				onChange={setFilteredTag}
			>
				<option value="">All</option>
				{options}
			</Input>
		</FormGroup>
	);
};

TagFilterSelect.propTypes = propTypes;

export default TagFilterSelect;
