// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '~/testhelpers/helpers.unit';
import UpsertCharacterForm from '../UpsertCharacterForm';
// #endregion imports

const createTestProps = (propOverrides) => ({
	characterToEdit: {},
	handleInputChange: jest.fn(),
	tooltipDisplayData: {},
	showTooltip: jest.fn(),
	hideTooltip: jest.fn(),
	...propOverrides
});

const createTestPropsWithCharacter = (propOverrides) => createTestProps({
	characterToEdit: {
		characterName: 'John Smith',
		platformId: 2,
		urlIdentifier: 'my-test-character'
	},
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = <UpsertCharacterForm {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with character', () => {
			const props = createTestPropsWithCharacter();
			const jsx = <UpsertCharacterForm {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
	describe('content', () => {
		it('should populate existing character name', () => {
			const props = createTestPropsWithCharacter();
			const jsx = <UpsertCharacterForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'character-name-field');
			expect(field).toHaveProp('value', 'John Smith');
		});
		it('should populate platform ID and disable field', () => {
			const props = createTestPropsWithCharacter();
			const jsx = <UpsertCharacterForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'platform-id-field');
			expect(field).toHaveProp('value', 2);
			expect(field).toBeDisabled();
		});
		it('should populate existing url identifier', () => {
			const props = createTestPropsWithCharacter();
			const jsx = <UpsertCharacterForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'url-identifier-field');
			expect(field).toHaveProp('value', 'my-test-character');
		});
	});
	describe('tooltips', () => {
		it('should be rendered on URL identifier field when visible', () => {
			const props = createTestProps({
				tooltipDisplayData: {
					urlIdentifier: true
				}
			});
			const props2 = createTestProps();
			const jsx = <UpsertCharacterForm {...props} />;
			const jsx2 = <UpsertCharacterForm {...props2} />;
			const element = shallow(jsx);
			const element2 = shallow(jsx2);
			const field = getSpecWrapper(element, 'url-identifier-tooltip');
			const field2 = getSpecWrapper(element2, 'url-identifier-tooltip');
			expect(field.props().visible).toBeTruthy();
			expect(field2.props().visible).toBeFalsy();
		});
	});
});

describe('behavior', () => {
	describe('validation', () => {
		it('should validate the character name field', () => {
			const props = createTestProps();
			const jsx = <UpsertCharacterForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'character-name-field');
			expect(field.props().validate.maxLength).toHaveProperty('value', 256);
		});
		it('should validate URL identifier field', () => {
			const props = createTestProps();
			const jsx = <UpsertCharacterForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'url-identifier-field');
			expect(field.props().validate.required).toHaveProperty('value', true);
			expect(field.props().validate.pattern).toHaveProperty('value', /^[A-z\d-]+$/);
		});
	});
	describe('handleInputChange', () => {
		it('should be called when character name changes', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({
				handleInputChange
			});
			const jsx = <UpsertCharacterForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'character-name-field');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
		it('should be called when URL identifier changes', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({
				handleInputChange
			});
			const jsx = <UpsertCharacterForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'url-identifier-field');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
	});
	describe('showTooltip', () => {
		it('should be called when URL identifier field is focused', () => {
			const showTooltip = jest.fn();
			const props = createTestProps({
				showTooltip
			});
			const jsx = <UpsertCharacterForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'url-identifier-field');
			field.simulate('focus');
			expect(showTooltip).toHaveBeenCalledTimes(1);
		});
	});
	describe('hideTooltip', () => {
		it('should be called when url identifier field is blurred', () => {
			const hideTooltip = jest.fn();
			const props = createTestProps({
				hideTooltip
			});
			const jsx = <UpsertCharacterForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'url-identifier-field');
			field.simulate('blur');
			expect(hideTooltip).toHaveBeenCalledTimes(1);
		});
	});
});
