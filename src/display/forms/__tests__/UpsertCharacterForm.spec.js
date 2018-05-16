// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../utility/testHelpers';
import UpsertCharacterForm from '../upsert-character/UpsertCharacterForm';
// #endregion imports

const createTestProps = propOverrides => ({
	characterToEdit: {},
	handleInputChange: jest.fn(),
	tooltipDisplayData: {},
	showTooltip: jest.fn(),
	hideTooltip: jest.fn(),
	...propOverrides
});

const createTestPropsWithCharacter = propOverrides => createTestProps({
	characterToEdit: {
		characterName: 'John Smith',
		platformId: 2,
		urlIdentifier: 'my-test-character'
	},
	...propOverrides
});

describe('rendering', () => {
	it('should render valid snapshot', () => {
		const props = createTestProps();
		const jsx = (<UpsertCharacterForm {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should render valid snapshot with character', () => {
		const props = createTestPropsWithCharacter();
		const jsx = (<UpsertCharacterForm {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should validate the character name field', () => {
		const props = createTestProps();
		const jsx = (<UpsertCharacterForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'character-name-field');
		expect(field.props().validate.maxLength).toHaveProperty('value', 256);
	});
	it('should populate existing character name', () => {
		const props = createTestPropsWithCharacter();
		const jsx = (<UpsertCharacterForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'character-name-field');
		expect(field).toHaveProp('value', 'John Smith');
	});
	it('should populate platform ID and disable field', () => {
		const props = createTestPropsWithCharacter();
		const jsx = (<UpsertCharacterForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'platform-id-field');
		expect(field).toHaveProp('value', 2);
		expect(field).toBeDisabled();
	});
	it('should validate URL identifier field', () => {
		const props = createTestProps();
		const jsx = (<UpsertCharacterForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'url-identifier-field');
		expect(field.props().validate.required).toHaveProperty('value', true);
		expect(field.props().validate.pattern).toHaveProperty('value', /^[A-z\d-]+$/);
	});
	it('should populate existing url identifier', () => {
		const props = createTestPropsWithCharacter();
		const jsx = (<UpsertCharacterForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'url-identifier-field');
		expect(field).toHaveProp('value', 'my-test-character');
	});
	it('should render url identifier tooltip when visible', () => {
		const props = createTestProps({ tooltipDisplayData: { urlIdentifier: true } });
		const props2 = createTestProps();
		const jsx = (<UpsertCharacterForm {...props} />);
		const jsx2 = (<UpsertCharacterForm {...props2} />);
		const element = shallow(jsx);
		const element2 = shallow(jsx2);
		const field = getSpecWrapper(element, 'url-identifier-tooltip');
		const field2 = getSpecWrapper(element2, 'url-identifier-tooltip');
		expect(field.props().visible).toBeTruthy();
		expect(field2.props().visible).toBeFalsy();
	});
});

describe('behavior', () => {
	it('should handle input change for character name', () => {
		const handleInputChange = jest.fn();
		const props = createTestProps({ handleInputChange });
		const jsx = (<UpsertCharacterForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'character-name-field');
		field.simulate('change');
		expect(handleInputChange).toHaveBeenCalledTimes(1);
	});
	it('should handle input change for url identifier', () => {
		const handleInputChange = jest.fn();
		const props = createTestProps({ handleInputChange });
		const jsx = (<UpsertCharacterForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'url-identifier-field');
		field.simulate('change');
		expect(handleInputChange).toHaveBeenCalledTimes(1);
	});
	it('should show url identifier tooltip on focus', () => {
		const showTooltip = jest.fn();
		const props = createTestProps({ showTooltip });
		const jsx = (<UpsertCharacterForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'url-identifier-field');
		field.simulate('focus');
		expect(showTooltip).toHaveBeenCalledTimes(1);
	});
	it('should hide url identifier tooltip on blur', () => {
		const hideTooltip = jest.fn();
		const props = createTestProps({ hideTooltip });
		const jsx = (<UpsertCharacterForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'url-identifier-field');
		field.simulate('blur');
		expect(hideTooltip).toHaveBeenCalledTimes(1);
	});
});
