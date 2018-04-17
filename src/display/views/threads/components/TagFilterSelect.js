import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

const propTypes = {
	tags: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	filteredTag: PropTypes.shape({}),
	setFilteredTag: PropTypes.func.isRequired
};

const defaultProps = {
	filteredTag: undefined
};

const TagFilterSelect = (props) => {
	const { tags, filteredTag, setFilteredTag } = props;
	const options = [];
	if (tags) {
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
	}
	return (
		<FormGroup className="tag-filter-select">
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
		</FormGroup>
	);
};

TagFilterSelect.propTypes = propTypes;
TagFilterSelect.defaultProps = defaultProps;
export default TagFilterSelect;
