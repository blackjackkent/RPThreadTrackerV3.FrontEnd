// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '~/testhelpers/helpers.unit';
import UpsertThreadForm from '../UpsertThreadForm';
// #endregion imports

jest.mock('../../../shared/CharacterSelectItem', () => 'CharacterSelectItem');

const createTestProps = (propOverrides) => ({
	threadToEdit: {},
	characters: [
		{
			characterId: 1,
			characterName: 'Character 1',
			urlIdentifier: 'character-1'
		},
		{
			characterId: 2,
			characterName: 'Character 2',
			urlIdentifier: 'character-2'
		},
		{
			characterId: 3,
			characterName: 'Character 3',
			urlIdentifier: 'character-3'
		},
		{
			characterId: 4,
			characterName: 'Character 4',
			urlIdentifier: 'character-4'
		},
		{
			characterId: 5,
			urlIdentifier: 'character-5'
		}
	],
	handleInputChange: jest.fn(),
	tooltipDisplayData: {},
	showTooltip: jest.fn(),
	hideTooltip: jest.fn(),
	selectCharacter: jest.fn(),
	handleTagAdded: jest.fn(),
	handleTagRemoved: jest.fn(),
	tagValues: [],
	...propOverrides
});

const createTestPropsWithThread = (propOverrides) => createTestProps({
	threadToEdit: {
		userTitle: 'Test Thread',
		postId: '12345',
		characterId: 2,
		partnerUrlIdentifier: 'my-partner',
		description: 'Test Description'
	},
	tagValues: ['tag1', 'tag2', 'tag3'],
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = <UpsertThreadForm {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with thread', () => {
			const props = createTestPropsWithThread();
			const jsx = <UpsertThreadForm {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
	describe('content', () => {
		it('should populate existing user title', () => {
			const props = createTestPropsWithThread();
			const jsx = <UpsertThreadForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'user-title-field');
			expect(field).toHaveProp('value', 'Test Thread');
		});
		it('should populate existing post ID', () => {
			const props = createTestPropsWithThread();
			const jsx = <UpsertThreadForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'post-id-field');
			expect(field).toHaveProp('value', '12345');
		});
		it('should populate existing partner url identifier', () => {
			const props = createTestPropsWithThread();
			const jsx = <UpsertThreadForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'partner-url-identifier-field');
			expect(field).toHaveProp('value', 'my-partner');
		});
		it('should populate existing tags', () => {
			const props = createTestPropsWithThread();
			const jsx = <UpsertThreadForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'tags-field');
			expect(field).toHaveProp('values', ['tag1', 'tag2', 'tag3']);
		});
		it('should populate tag handlers value', () => {
			const handleTagAdded = jest.fn();
			const handleTagRemoved = jest.fn();
			const props = createTestProps({
				handleTagAdded,
				handleTagRemoved
			});
			const jsx = <UpsertThreadForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'tags-field');
			expect(field).toHaveProp('onItemAdded', handleTagAdded);
			expect(field).toHaveProp('onItemDeleted', handleTagRemoved);
		});
		it('should populate characters dropdown', () => {
			const props = createTestProps();
			const jsx = <UpsertThreadForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'character-select-field');
			expect(field.find('option')).toHaveLength(1);
			expect(field.find('CharacterSelectItem')).toHaveLength(5);
		});
		it('should populate existing character ID', () => {
			const props = createTestPropsWithThread();
			const jsx = <UpsertThreadForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'character-select-field');
			expect(field.props().value).toEqual(2);
		});
		it('should populate character select handler', () => {
			const selectCharacter = jest.fn();
			const props = createTestProps({
				selectCharacter
			});
			const jsx = <UpsertThreadForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'character-select-field');
			expect(field.props().onChange).toEqual(selectCharacter);
		});
	});
	describe('tooltips', () => {
		it('should be rendered on partner URL identifier field when visible', () => {
			const props = createTestProps({
				tooltipDisplayData: {
					partnerUrlIdentifier: true
				}
			});
			const props2 = createTestProps();
			const jsx = <UpsertThreadForm {...props} />;
			const jsx2 = <UpsertThreadForm {...props2} />;
			const element = shallow(jsx);
			const element2 = shallow(jsx2);
			const field = getSpecWrapper(element, 'partner-url-identifier-tooltip');
			const field2 = getSpecWrapper(element2, 'partner-url-identifier-tooltip');
			expect(field.props().visible).toBeTruthy();
			expect(field2.props().visible).toBeFalsy();
		});
	});
});

describe('behavior', () => {
	describe('validation', () => {
		it('should validate the user title field', () => {
			const props = createTestProps();
			const jsx = <UpsertThreadForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'user-title-field');
			expect(field.props().validate.maxLength).toHaveProperty('value', 256);
			expect(field.props().validate.required).toHaveProperty('value', true);
		});
		it('should validate post ID field', () => {
			const props = createTestProps();
			const jsx = <UpsertThreadForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'post-id-field');
			expect(field.props().validate.number).toHaveProperty('value', true);
		});
		it('should validate partner url identifier field', () => {
			const props = createTestProps();
			const jsx = <UpsertThreadForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'partner-url-identifier-field');
			expect(field.props().validate.maxLength).toHaveProperty('value', 256);
		});
	});
	describe('handleInputChange', () => {
		it('should be called when user title changes', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({
				handleInputChange
			});
			const jsx = <UpsertThreadForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'user-title-field');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
		it('should be called when post ID changes', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({
				handleInputChange
			});
			const jsx = <UpsertThreadForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'post-id-field');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
		it('should be called when partner URL identifier changes', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({
				handleInputChange
			});
			const jsx = <UpsertThreadForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'partner-url-identifier-field');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
		it('should be called when description changes', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({
				handleInputChange
			});
			const jsx = <UpsertThreadForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'description-field');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
	});
	describe('showTooltip', () => {
		it('should be called when partner URL identifer field is focused', () => {
			const showTooltip = jest.fn();
			const props = createTestProps({
				showTooltip
			});
			const jsx = <UpsertThreadForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'partner-url-identifier-field');
			field.simulate('focus');
			expect(showTooltip).toHaveBeenCalledTimes(1);
		});
	});
	describe('hideTooltip', () => {
		it('should hide partner url identifier tooltip on blur', () => {
			const hideTooltip = jest.fn();
			const props = createTestProps({
				hideTooltip
			});
			const jsx = <UpsertThreadForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'partner-url-identifier-field');
			field.simulate('blur');
			expect(hideTooltip).toHaveBeenCalledTimes(1);
		});
	});
});
