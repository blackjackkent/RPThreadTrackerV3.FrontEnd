import React from 'react';
import PropTypes from 'prop-types';
import {
	TabPane, Col, Row, Button, CardHeader, CardBody, Label
} from 'reactstrap';
import Card from '../../../shared/styled/Card';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import Autosuggest from 'react-autosuggest';
import LoadingIndicator from '../../../shared/loading/LoadingIndicator'

const propTypes = {
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	isLoadingIconVisible: PropTypes.bool.isRequired
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
			updatedValue: null,
			suggestions: []
		};
		this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
		this.onAutosuggestChange = this.onAutosuggestChange.bind(this);
		this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
		this.getSuggestions = this.getSuggestions.bind(this);
		this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
		this.clearSelectedTag = this.clearSelectedTag.bind(this);
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
		this.setState({ selectedValue: data.suggestionValue })
	}
	getSuggestions(value) {
		const inputValue = value.trim().toLowerCase();
		const inputLength = inputValue.length;
		if (inputLength === 0) {
			return this.props.tags.sort().slice(0, 9);
		}
		return this.props.tags.filter(tag => tag.toLowerCase().includes(inputValue)).sort();
	};
	onNewTagValueChange(event) {
		this.setState({ updatedValue: event.target.value });
	}
	clearSelectedTag() {
		this.setState({ selectedValue: null });
	}
	render() {
		const {
			isLoadingIconVisible,
			tags
		} = this.props;
		const autosuggestProps = {
			placeholder: 'Enter the tag you wish to edit',
			value: this.state.autosuggestValue,
			onChange: this.onAutosuggestChange,
			className: 'form-control'
		}
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
						{isLoadingIconVisible &&
							<LoadingIndicator />
						}
						{!isLoadingIconVisible && !this.state.selectedValue &&
							<Row className="form-group">
								<Col>
									<Autosuggest
										name="autosuggest"
										suggestions={this.state.suggestions}
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
						}
						{!isLoadingIconVisible && this.state.selectedValue &&
							<div>
								<Row>
									<Col>
										<p className="text-center">How do you wish to modify the tag <strong>{this.state.selectedValue}</strong>?</p>
									</Col>
								</Row>
								<Row className="choice-row">
									<Col>
										<form className="d-flex justify-content-center form-inline">
											<Label htmlFor="updatedValue">Update it to:</Label>{' '}
											<input
												name="updatedValue"
												placeholder="New tag"
												data-spec="updated-value-field"
												id="manage-tags-updated-value-input"
												type="text"
												className="form-control"
												value={this.state.updatedValue}
											/>
											<Button color="primary">
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
											<Button color="danger">
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
											<button className="back-button" onClick={this.clearSelectedTag}>
												<i className="fas fa-arrow-left" /> Select a different tag
											</button>
										</p>
									</Col>
								</Row>
							</div>
						}
					</CardBody>
				</Card >
			</TabPane >
		);
	}
};
ManageTagsPane.propTypes = propTypes;
ManageTagsPane.defaultProps = defaultProps;
export default ManageTagsPane;
