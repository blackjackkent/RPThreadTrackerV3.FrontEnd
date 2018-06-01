// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../config/tests/helpers.unit';
import UpsertThreadForm from '../upsert-thread/UpsertThreadForm';
// #endregion imports

jest.mock('../../shared/character-select/CharacterSelect', () => 'CharacterSelect');

const createTestProps = propOverrides => ({
	threadToEdit: {},
	characters: [{
		characterId: 1,
		characterName: 'Character 1',
		urlIdentifier: 'character-1'
	}, {
		characterId: 2,
		characterName: 'Character 2',
		urlIdentifier: 'character-2'
	}, {
		characterId: 3,
		characterName: 'Character 3',
		urlIdentifier: 'character-3'
	}, {
		characterId: 4,
		characterName: 'Character 4',
		urlIdentifier: 'character-4'
	}, {
		characterId: 5,
		urlIdentifier: 'character-5'
	}],
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

const createTestPropsWithThread = propOverrides => createTestProps({
	threadToEdit: {
		userTitle: 'Test Thread',
		postId: '12345',
		characterId: 2,
		partnerUrlIdentifier: 'my-partner'
	},
	tagValues: ['tag1', 'tag2', 'tag3'],
	...propOverrides
});

describe('rendering', () => {
	it('should render valid snapshot', () => {
		const props = createTestProps();
		const jsx = (<UpsertThreadForm {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should render valid snapshot with thread', () => {
		const props = createTestPropsWithThread();
		const jsx = (<UpsertThreadForm {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should validate the user title field', () => {
		const props = createTestProps();
		const jsx = (<UpsertThreadForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'user-title-field');
		expect(field.props().validate.maxLength).toHaveProperty('value', 256);
		expect(field.props().validate.required).toHaveProperty('value', true);
	});
	it('should populate existing user title', () => {
		const props = createTestPropsWithThread();
		const jsx = (<UpsertThreadForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'user-title-field');
		expect(field).toHaveProp('value', 'Test Thread');
	});
	it('should validate post ID field', () => {
		const props = createTestProps();
		const jsx = (<UpsertThreadForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'post-id-field');
		expect(field.props().validate.number).toHaveProperty('value', true);
	});
	it('should populate existing post ID', () => {
		const props = createTestPropsWithThread();
		const jsx = (<UpsertThreadForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'post-id-field');
		expect(field).toHaveProp('value', '12345');
	});
	it('should validate partner url identifier field', () => {
		const props = createTestProps();
		const jsx = (<UpsertThreadForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'partner-url-identifier-field');
		expect(field.props().validate.maxLength).toHaveProperty('value', 256);
	});
	it('should populate existing partner url identifier', () => {
		const props = createTestPropsWithThread();
		const jsx = (<UpsertThreadForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'partner-url-identifier-field');
		expect(field).toHaveProp('value', 'my-partner');
	});
	it('should render partner url identifier tooltip when visible', () => {
		const props = createTestProps({ tooltipDisplayData: { partnerUrlIdentifier: true } });
		const props2 = createTestProps();
		const jsx = (<UpsertThreadForm {...props} />);
		const jsx2 = (<UpsertThreadForm {...props2} />);
		const element = shallow(jsx);
		const element2 = shallow(jsx2);
		const field = getSpecWrapper(element, 'partner-url-identifier-tooltip');
		const field2 = getSpecWrapper(element2, 'partner-url-identifier-tooltip');
		expect(field.props().visible).toBeTruthy();
		expect(field2.props().visible).toBeFalsy();
	});
	it('should populate existing tags', () => {
		const props = createTestPropsWithThread();
		const jsx = (<UpsertThreadForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'tags-field');
		expect(field).toHaveProp('values', ['tag1', 'tag2', 'tag3']);
	});
	it('should populate tag handlers value', () => {
		const handleTagAdded = jest.fn();
		const handleTagRemoved = jest.fn();
		const props = createTestProps({ handleTagAdded, handleTagRemoved });
		const jsx = (<UpsertThreadForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'tags-field');
		expect(field).toHaveProp('onItemAdded', handleTagAdded);
		expect(field).toHaveProp('onItemDeleted', handleTagRemoved);
	});
	it('should populate characters dropdown', () => {
		const props = createTestProps();
		const jsx = (<UpsertThreadForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'characters-field');
		expect(field.props().characters).toHaveLength(5);
	});
	it('should populate existing character ID', () => {
		const props = createTestPropsWithThread();
		const jsx = (<UpsertThreadForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'characters-field');
		expect(field.props().selectedCharacterId).toEqual(2);
	});
	it('should populate character select handler', () => {
		const selectCharacter = jest.fn();
		const props = createTestProps({ selectCharacter });
		const jsx = (<UpsertThreadForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'characters-field');
		expect(field.props().onSelectCharacter).toEqual(selectCharacter);
	});
	it('should not include null character value', () => {
		const selectCharacter = jest.fn();
		const props = createTestProps({ selectCharacter });
		const jsx = (<UpsertThreadForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'characters-field');
		expect(field.props().includeNullValue).toBeFalsy();
	});
});

describe('behavior', () => {
	it('should handle input change for user title', () => {
		const handleInputChange = jest.fn();
		const props = createTestProps({ handleInputChange });
		const jsx = (<UpsertThreadForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'user-title-field');
		field.simulate('change');
		expect(handleInputChange).toHaveBeenCalledTimes(1);
	});
	it('should handle input change for post id', () => {
		const handleInputChange = jest.fn();
		const props = createTestProps({ handleInputChange });
		const jsx = (<UpsertThreadForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'post-id-field');
		field.simulate('change');
		expect(handleInputChange).toHaveBeenCalledTimes(1);
	});
	it('should handle input change for partner url identifier', () => {
		const handleInputChange = jest.fn();
		const props = createTestProps({ handleInputChange });
		const jsx = (<UpsertThreadForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'partner-url-identifier-field');
		field.simulate('change');
		expect(handleInputChange).toHaveBeenCalledTimes(1);
	});
	it('should show partner url identifier tooltip on focus', () => {
		const showTooltip = jest.fn();
		const props = createTestProps({ showTooltip });
		const jsx = (<UpsertThreadForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'partner-url-identifier-field');
		field.simulate('focus');
		expect(showTooltip).toHaveBeenCalledTimes(1);
	});
	it('should hide partner url identifier tooltip on blur', () => {
		const hideTooltip = jest.fn();
		const props = createTestProps({ hideTooltip });
		const jsx = (<UpsertThreadForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'partner-url-identifier-field');
		field.simulate('blur');
		expect(hideTooltip).toHaveBeenCalledTimes(1);
	});
});
