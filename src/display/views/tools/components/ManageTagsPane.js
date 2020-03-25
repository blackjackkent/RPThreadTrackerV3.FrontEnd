import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TabPane, Col, Row, Button, CardHeader, CardBody, Label } from 'reactstrap';
import Autosuggest from 'react-autosuggest';
import Card from '../../../shared/styled/Card';
import LoadingIndicator from '../../../shared/loading/LoadingIndicator';

const propTypes = {
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	isLoadingIconVisible: PropTypes.bool.isRequired,
	openBulkUpdateTagModal: PropTypes.func.isRequired,
	openBulkDeleteTagModal: PropTypes.func.isRequired
};

const ManageTagsPane = (props) => {
	const [autosuggestValue, setAutosuggestValue] = useState('');
	const [selectedValue, setSelectedValue] = useState(null);
	const [updatedValue, setUpdatedValue] = useState('');
	const [suggestions, setSuggestions] = useState([]);
	const { isLoadingIconVisible } = props;

	const autosuggestItem = (suggestion) => <div>{suggestion}</div>;
	const getSuggestionValue = (suggestion) => suggestion;
	const onAutosuggestChange = (_, { newValue }) => {
		setAutosuggestValue(newValue);
	};

	const onSuggestionsFetchRequested = ({ value }) => {
		const { tags } = props;
		const inputValue = value.trim().toLowerCase();
		const inputLength = inputValue.length;
		let filteredSuggestions = [];
		if (inputLength === 0) {
			filteredSuggestions = tags.sort();
		} else {
			filteredSuggestions = tags
				.filter((tag) => tag.toLowerCase().includes(inputValue))
				.sort();
		}
		setSuggestions(filteredSuggestions);
	};

	const onSuggestionsClearRequested = () => {
		setSuggestions([]);
	};

	const onSuggestionSelected = (_, data) => {
		setSelectedValue(data.suggestionValue);
	};

	const onNewTagValueChange = (event) => {
		setUpdatedValue(event.target.value);
	};

	const clearSelectedTag = () => {
		setSelectedValue(null);
	};

	const bulkUpdateTag = () => {
		const { openBulkUpdateTagModal } = props;
		openBulkUpdateTagModal(selectedValue, updatedValue);
		setSelectedValue(null);
		setAutosuggestValue('');
		setUpdatedValue('');
	};

	const bulkDeleteTag = () => {
		const { openBulkDeleteTagModal } = props;
		openBulkDeleteTagModal(selectedValue);
		setSelectedValue(null);
		setAutosuggestValue('');
		setUpdatedValue('');
	};

	const autosuggestProps = {
		placeholder: 'Enter the tag you wish to edit',
		value: autosuggestValue,
		onChange: onAutosuggestChange,
		className: 'form-control'
	};
	return (
		<TabPane tabId="tags" className="manage-tags-pane">
			<Card>
				<CardHeader>
					<i className="fas fa-eye" /> Manage Tags
				</CardHeader>
				<CardBody className="card-body">
					<Row>
						<Col>
							<p className="text-center">
								Here you can manage the tags you have added to threads in
								RPThreadTracker. Enter a tag below to update that tag for all
								threads, or to remove it from all threads it is assigned to.
							</p>
						</Col>
					</Row>
					{isLoadingIconVisible && <LoadingIndicator />}
					{!isLoadingIconVisible && !selectedValue && (
						<Row className="form-group" data-spec="manage-tags-autosuggest-section">
							<Col>
								<Autosuggest
									data-spec="manage-tags-autosuggest"
									name="autosuggest"
									suggestions={suggestions}
									onSuggestionsFetchRequested={onSuggestionsFetchRequested}
									onSuggestionsClearRequested={onSuggestionsClearRequested}
									onSuggestionSelected={onSuggestionSelected}
									renderSuggestion={autosuggestItem}
									inputProps={autosuggestProps}
									getSuggestionValue={getSuggestionValue}
									shouldRenderSuggestions={() => true}
								/>
							</Col>
						</Row>
					)}
					{!isLoadingIconVisible && selectedValue && (
						<div data-spec="manage-tags-form-section">
							<Row>
								<Col>
									<p className="text-center">
										How do you wish to modify the tag{' '}
										<strong>{selectedValue}</strong>?
									</p>
								</Col>
							</Row>
							<Row className="choice-row">
								<Col>
									<form
										data-spec="manage-tags-action-form"
										onSubmit={(e) => {
											e.preventDefault();
										}}
										className="d-flex justify-content-center form-inline"
									>
										<Label htmlFor="updatedValue">Update it to:</Label>
										<input
											name="updatedValue"
											placeholder="New tag"
											data-spec="updated-value-field"
											id="manage-tags-updated-value-input"
											type="text"
											className="form-control"
											onChange={onNewTagValueChange}
											value={updatedValue}
										/>
										<Button
											color="primary"
											onClick={bulkUpdateTag}
											disabled={!updatedValue}
											data-spec="manage-tags-update-button"
										>
											<i className="fas fa-edit" /> Bulk Edit This Tag
										</Button>
									</form>
								</Col>
							</Row>
							<Row className="choice-row">
								<Col>
									<form className="d-flex justify-content-center form-inline">
										<Button
											color="danger"
											onClick={bulkDeleteTag}
											data-spec="manage-tags-delete-button"
										>
											<i className="fas fa-trash-alt" /> Bulk Delete This Tag
										</Button>{' '}
									</form>
								</Col>
							</Row>
							<Row>
								<Col>
									<p className="text-center">
										<button
											type="button"
											className="back-button"
											onClick={clearSelectedTag}
											data-spec="manage-tags-back-button"
										>
											<i className="fas fa-arrow-left" /> Select a different
											tag
										</button>
									</p>
								</Col>
							</Row>
						</div>
					)}
				</CardBody>
			</Card>
		</TabPane>
	);
};
ManageTagsPane.propTypes = propTypes;
export default ManageTagsPane;
