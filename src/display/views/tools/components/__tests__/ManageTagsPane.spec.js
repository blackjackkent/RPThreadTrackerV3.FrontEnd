// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '~/testhelpers/helpers.unit';
import ManageTagsPane from '../ManageTagsPane';
// #endregion imports

jest.mock('../../../../shared/styled/Card', () => 'Card');
jest.mock('../../../../shared/loading/LoadingIndicator', () => 'LoadingIndicator');

const createTestProps = propOverrides => ({
	isLoadingIconVisible: false,
	tags: ['tag1', 'tag2'],
	openBulkUpdateTagModal: jest.fn(),
	openBulkDeleteTagModal: jest.fn(),
	...propOverrides
});

const setupWithSelectedTag = (tag, propOverrides) => {
	const element = shallow(<ManageTagsPane {...createTestProps(propOverrides)} />);
	const autosuggest = getSpecWrapper(element, 'manage-tags-autosuggest');
	autosuggest.props().onSuggestionSelected({}, { suggestionValue: tag });
	return element;
};

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const element = shallow(<ManageTagsPane {...createTestProps()} />);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when loading indicator is visible', () => {
			const element = shallow(<ManageTagsPane
				{...createTestProps({ isLoadingIconVisible: true })}
			/>);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when tag is selected', () => {
			const element = setupWithSelectedTag('test tag');
			expect(element).toMatchSnapshot();
		});
		it('should render autosuggest item format', () => {
			const element = shallow(<ManageTagsPane {...createTestProps()} />);
			const autosuggest = getSpecWrapper(element, 'manage-tags-autosuggest');
			const result = autosuggest.props().renderSuggestion('test tag');
			expect(result).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	it('should do nothing when submitting tag-selected form with enter', () => {
		const element = setupWithSelectedTag('test tag');
		const submitEvent = { preventDefault: jest.fn() };
		const form = getSpecWrapper(element, 'manage-tags-action-form');
		form.prop('onSubmit')(submitEvent);
		expect(submitEvent.preventDefault).toHaveBeenCalledTimes(1);
	});
	describe('onSuggestionsFetchRequested', () => {
		it('should return sorted values when no input', () => {
			const tags = [
				'tagb', 'tag7', 'tag9', 'tag4', 'tag2', 'tag5', 'tag1', 'tag3', 'tag6', 'tag8', 'taga'
			];
			const element = shallow(<ManageTagsPane {...createTestProps({ tags })} />);
			let autosuggest = getSpecWrapper(element, 'manage-tags-autosuggest');
			autosuggest.props().onSuggestionsFetchRequested({ value: '' });
			element.update();
			autosuggest = getSpecWrapper(element, 'manage-tags-autosuggest');
			expect(autosuggest.props().suggestions).toHaveLength(11);
			expect(autosuggest.props().suggestions).toEqual(
				['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7', 'tag8', 'tag9', 'taga', 'tagb']
			);
		});
		it('should return case-insensitive matching values when input', () => {
			const tags = [
				'tagb', 'tag7', 'tag9', 'tag4', 'tag2', 'tag5', 'tag1', 'tag3', 'tag6', 'tag8', 'taga'
			];
			const element = shallow(<ManageTagsPane {...createTestProps({ tags })} />);
			let autosuggest = getSpecWrapper(element, 'manage-tags-autosuggest');
			autosuggest.props().onSuggestionsFetchRequested({ value: 'G9' });
			element.update();
			autosuggest = getSpecWrapper(element, 'manage-tags-autosuggest');
			expect(autosuggest.props().suggestions).toHaveLength(1);
			expect(autosuggest.props().suggestions).toEqual(
				['tag9']
			);
		});
	});
	describe('shouldRenderSuggestions', () => {
		it('always returns true', () => {
			const element = shallow(<ManageTagsPane {...createTestProps()} />);
			const autosuggest = getSpecWrapper(element, 'manage-tags-autosuggest');
			const result = autosuggest.props().shouldRenderSuggestions();
			expect(result).toBe(true);
		});
	});
	describe('onAutosuggestChange', () => {
		it('should set autosuggest value', () => {
			const element = shallow(<ManageTagsPane {...createTestProps()} />);
			let autosuggest = getSpecWrapper(element, 'manage-tags-autosuggest');
			autosuggest.props().inputProps.onChange({}, { newValue: 'updated value' });
			element.update();
			autosuggest = getSpecWrapper(element, 'manage-tags-autosuggest');
			expect(autosuggest.props().inputProps.value).toEqual('updated value');
		});
	});
	describe('onSuggestionsClearRequested', () => {
		it('should set visible suggestions to empty list', () => {
			const tags = [
				'tagb', 'tag7', 'tag9', 'tag4', 'tag2', 'tag5', 'tag1', 'tag3', 'tag6', 'tag8', 'taga'
			];
			const element = shallow(<ManageTagsPane {...createTestProps({ tags })} />);
			let autosuggest = getSpecWrapper(element, 'manage-tags-autosuggest');
			autosuggest.props().onSuggestionsFetchRequested({ value: '' });
			autosuggest.props().onSuggestionsClearRequested();
			autosuggest = getSpecWrapper(element, 'manage-tags-autosuggest');
			expect(autosuggest.props().suggestions).toHaveLength(0);
		});
	});
	describe('onNewTagValueChange', () => {
		it('should set value of new tag input', () => {
			const event = { target: { value: 'updated tag value' } };
			const element = setupWithSelectedTag('test tag');
			let input = getSpecWrapper(element, 'updated-value-field');
			input.simulate('change', event);
			element.update();
			input = getSpecWrapper(element, 'updated-value-field');
			expect(input.props().value).toEqual('updated tag value');
		});
	});
	describe('clearSelectedTag', () => {
		it('should return to autosuggest view', () => {
			const openBulkUpdateTagModal = jest.fn();
			const openBulkDeleteTagModal = jest.fn();
			const element = setupWithSelectedTag('test tag', { openBulkDeleteTagModal, openBulkUpdateTagModal });
			const backButton = getSpecWrapper(element, 'manage-tags-back-button');
			backButton.simulate('click');
			element.update();
			const autosuggest = getSpecWrapper(element, 'manage-tags-autosuggest');
			expect(autosuggest.exists()).toBe(true);
			expect(autosuggest.props().inputProps.value).toEqual('');
			expect(openBulkUpdateTagModal).toHaveBeenCalledTimes(0);
			expect(openBulkDeleteTagModal).toHaveBeenCalledTimes(0);
		});
	});
	describe('bulkUpdateTag', () => {
		it('should trigger action and reset state', () => {
			const openBulkUpdateTagModal = jest.fn();
			const element = setupWithSelectedTag('test tag', { openBulkUpdateTagModal });
			const updateButton = getSpecWrapper(element, 'manage-tags-update-button');
			updateButton.simulate('click');
			expect(openBulkUpdateTagModal).toHaveBeenCalledTimes(1);
			element.update();
			const autosuggest = getSpecWrapper(element, 'manage-tags-autosuggest');
			expect(autosuggest.exists()).toBe(true);
			expect(autosuggest.props().inputProps.value).toEqual('');
		});
	});
	describe('bulkDeleteTag', () => {
		it('should trigger action and reset state', () => {
			const openBulkDeleteTagModal = jest.fn();
			const element = setupWithSelectedTag('test tag', { openBulkDeleteTagModal });
			const deleteButton = getSpecWrapper(element, 'manage-tags-delete-button');
			deleteButton.simulate('click');
			expect(openBulkDeleteTagModal).toHaveBeenCalledTimes(1);
			element.update();
			const autosuggest = getSpecWrapper(element, 'manage-tags-autosuggest');
			expect(autosuggest.exists()).toBe(true);
			expect(autosuggest.props().inputProps.value).toEqual('');
		});
	});
});
