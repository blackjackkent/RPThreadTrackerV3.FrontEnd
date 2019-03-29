import React from 'react';
import PropTypes from 'prop-types';
import {
	TabPane, Col, Row, Button, CardHeader, CardBody, Label
} from 'reactstrap';
import Autosuggest from 'react-autosuggest';
import Card from '../../../shared/styled/Card';
import LoadingIndicator from '../../../shared/loading/LoadingIndicator';

const propTypes = {
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	isLoadingIconVisible: PropTypes.bool.isRequired,
	openBulkUpdateTagModal: PropTypes.func.isRequired,
	openBulkDeleteTagModal: PropTypes.func.isRequired
};
const defaultProps = {
	username: ''
};

const autosuggestItem = suggestion => (
	<div>
		{suggestion}
	</div>
);
const getSuggestionValue = suggestion => suggestion;
class ManageTagsPane extends React.Component {
	constructor() {
		super();
		this.state = {
			autosuggestValue: '',
			selectedValue: null,
			updatedValue: '',
			suggestions: []
		};
		this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
		this.onAutosuggestChange = this.onAutosuggestChange.bind(this);
		this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
		this.getSuggestions = this.getSuggestions.bind(this);
		this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
		this.onNewTagValueChange = this.onNewTagValueChange.bind(this);
		this.clearSelectedTag = this.clearSelectedTag.bind(this);
		this.bulkUpdateTag = this.bulkUpdateTag.bind(this);
	}

	onAutosuggestChange(event, { newValue }) {
		this.setState({ autosuggestValue: newValue });
	}

	onSuggestionsFetchRequested({ value }) {
		this.setState({ suggestions: this.getSuggestions(value) });
	}

	onSuggestionsClearRequested() {
		this.setState({ suggestions: [] });
	}

	onSuggestionSelected(e, data) {
		this.setState({ selectedValue: data.suggestionValue });
	}

	getSuggestions(value) {
		const { tags } = this.props;
		const inputValue = value.trim().toLowerCase();
		const inputLength = inputValue.length;
		if (inputLength === 0) {
			return tags.sort().slice(0, 9);
		}
		return tags.filter(tag => tag.toLowerCase().includes(inputValue)).sort();
	}

	onNewTagValueChange(event) {
		this.setState({ updatedValue: event.target.value });
	}

	clearSelectedTag() {
		this.setState({ selectedValue: null });
	}

	bulkUpdateTag() {
		const { selectedValue, updatedValue } = this.state;
		const { openBulkUpdateTagModal } = this.props;
		openBulkUpdateTagModal(selectedValue, updatedValue);
		this.setState({ selectedValue: null, autosuggestValue: '', updatedValue: '' });
	}

	bulkDeleteTag() {
		const { selectedValue } = this.state;
		const { openBulkDeleteTagModal } = this.props;
		openBulkDeleteTagModal(selectedValue);
		this.setState({ selectedValue: null, autosuggestValue: '', updatedValue: '' });
	}

	render() {
		const {
			isLoadingIconVisible
		} = this.props;
		const {
			updatedValue,
			selectedValue,
			suggestions,
			autosuggestValue
		} = this.state;
		const autosuggestProps = {
			placeholder: 'Enter the tag you wish to edit',
			value: autosuggestValue,
			onChange: this.onAutosuggestChange,
			className: 'form-control'
		};
		return (
			<TabPane tabId="tags" className="manage-tags-pane">
				<Card>
					<CardHeader>
						<i
							className="fas fa-eye"
						/> Manage Tags
					</CardHeader>
					<CardBody className="card-body">

						<Row>
							<Col>
								<p className="text-center">
									Here you can manage the tags you have added to threads in RPThreadTracker.{' '}
									Enter a tag below to update that tag for all threads, or to remove it from{' '}
									all threads it is assigned to.
								</p>
							</Col>
						</Row>
						{isLoadingIconVisible
							&& (
								<LoadingIndicator />
							)
						}
						{!isLoadingIconVisible
							&& !selectedValue
							&& (
								<Row className="form-group">
									<Col>
										<Autosuggest
											name="autosuggest"
											suggestions={suggestions}
											onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
											onSuggestionsClearRequested={this.onSuggestionsClearRequested}
											onSuggestionSelected={this.onSuggestionSelected}
											renderSuggestion={autosuggestItem}
											inputProps={autosuggestProps}
											getSuggestionValue={getSuggestionValue}
											shouldRenderSuggestions={() => true}
										/>
									</Col>
								</Row>
							)
						}
						{!isLoadingIconVisible
							&& selectedValue
							&& (
								<div>
									<Row>
										<Col>
											<p className="text-center">How do you wish to modify the tag <strong>{selectedValue}</strong>?</p>
										</Col>
									</Row>
									<Row className="choice-row">
										<Col>
											<form
												onSubmit={(e) => { e.preventDefault(); }}
												className="d-flex justify-content-center form-inline"
											>
												<Label htmlFor="updatedValue">Update it to:</Label>{' '}
												<input
													name="updatedValue"
													placeholder="New tag"
													data-spec="updated-value-field"
													id="manage-tags-updated-value-input"
													type="text"
													className="form-control"
													onChange={this.onNewTagValueChange}
													value={updatedValue}
												/>
												<Button
													color="primary"
													onClick={() => this.bulkUpdateTag()}
													disabled={!updatedValue}
												>
													<i
														className="fas fa-edit"
													/>{' '}
													Bulk Edit This Tag
												</Button>{' '}
											</form>
										</Col>
									</Row>
									<Row className="choice-row">
										<Col>
											<form className="d-flex justify-content-center form-inline">
												<Button
													color="danger"
													onClick={() => this.bulkDeleteTag()}
												>
													<i
														className="fas fa-trash-alt"
													/>{' '}
													Bulk Delete This Tag
												</Button>{' '}
											</form>
										</Col>
									</Row>
									<Row>
										<Col>
											<p className="text-center">
												<button type="button" className="back-button" onClick={this.clearSelectedTag}>
													<i className="fas fa-arrow-left" /> Select a different tag
												</button>
											</p>
										</Col>
									</Row>
								</div>
							)
						}
					</CardBody>
				</Card>
			</TabPane>
		);
	}
}
ManageTagsPane.propTypes = propTypes;
ManageTagsPane.defaultProps = defaultProps;
export default ManageTagsPane;
