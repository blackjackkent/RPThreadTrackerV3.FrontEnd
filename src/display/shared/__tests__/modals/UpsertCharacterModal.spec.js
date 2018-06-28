// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../config/tests/helpers.unit';
import UpsertCharacterModal from '../../modals/UpsertCharacterModal';
// #endregion imports

// #region mocks
jest.mock('../../../forms/upsert-character/UpsertCharacterForm', () => 'UpsertCharacterForm');
jest.mock('../../../forms/TooltipForm', () => 'TooltipForm');
// #endregion mocks

const createTestProps = propOverrides => ({
	isUpsertCharacterModalOpen: true,
	submitUpsertCharacter: jest.fn(),
	closeUpsertCharacterModal: jest.fn(),
	characterToEdit: { characterId: 1 },
	...propOverrides
});

describe('rendering', () => {
	it('should render valid snapshot', () => {
		const props = createTestProps();
		const jsx = (<UpsertCharacterModal {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should render valid snapshot if character is new', () => {
		const props = createTestProps({ characterToEdit: {} });
		const jsx = (<UpsertCharacterModal {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
});

describe('behavior', () => {
	it('should trigger upsert character action on form submit', () => {
		const submitUpsertCharacter = jest.fn();
		const characterToEdit = { characterId: 2 };
		const props = createTestProps({ submitUpsertCharacter, characterToEdit });
		const jsx = (<UpsertCharacterModal {...props} />);
		const element = shallow(jsx);
		const form = getSpecWrapper(element, 'upsert-character-modal-form');
		form.prop('onValidSubmit')();
		expect(submitUpsertCharacter).toHaveBeenCalledTimes(1);
		expect(submitUpsertCharacter).toHaveBeenLastCalledWith(characterToEdit);
	});
	it('should handle input change with text value', () => {
		const submitUpsertCharacter = jest.fn();
		const event = { target: { type: 'text', name: 'characterName', value: 'My Character' } };
		const props = createTestProps({ submitUpsertCharacter });
		const jsx = (<UpsertCharacterModal {...props} />);
		const element = shallow(jsx);
		element.instance().handleInputChange(event);
		const form = getSpecWrapper(element, 'upsert-character-modal-form');
		form.prop('onValidSubmit')();
		expect(submitUpsertCharacter).toHaveBeenCalledTimes(1);
		expect(submitUpsertCharacter).toHaveBeenLastCalledWith({ characterId: 1, characterName: 'My Character' });
	});
	it('should handle input change with checkbox value', () => {
		const submitUpsertCharacter = jest.fn();
		const event = { target: { type: 'checkbox', name: 'isActive', checked: true } };
		const props = createTestProps({ submitUpsertCharacter });
		const jsx = (<UpsertCharacterModal {...props} />);
		const element = shallow(jsx);
		element.instance().handleInputChange(event);
		const form = getSpecWrapper(element, 'upsert-character-modal-form');
		form.prop('onValidSubmit')();
		expect(submitUpsertCharacter).toHaveBeenCalledTimes(1);
		expect(submitUpsertCharacter).toHaveBeenLastCalledWith({ characterId: 1, isActive: true });
	});
	it('should set character to edit on receive props', () => {
		const submitUpsertCharacter = jest.fn();
		const characterToEdit = { characterId: 2 };
		const props = createTestProps({ submitUpsertCharacter });
		const jsx = (<UpsertCharacterModal {...props} />);
		const element = shallow(jsx);
		element.setProps({ characterToEdit });
		const form = getSpecWrapper(element, 'upsert-character-modal-form');
		form.prop('onValidSubmit')();
		expect(submitUpsertCharacter).toHaveBeenCalledTimes(1);
		expect(submitUpsertCharacter).toHaveBeenLastCalledWith(characterToEdit);
	});
	it('should close modal on modal toggle', () => {
		const closeUpsertCharacterModal = jest.fn();
		const props = createTestProps({ closeUpsertCharacterModal });
		const jsx = (<UpsertCharacterModal {...props} />);
		const element = shallow(jsx);
		const header = getSpecWrapper(element, 'upsert-character-modal');
		header.prop('toggle')();
		expect(closeUpsertCharacterModal).toHaveBeenCalledTimes(1);
	});
	it('should close modal on close button click', () => {
		const closeUpsertCharacterModal = jest.fn();
		const props = createTestProps({ closeUpsertCharacterModal });
		const jsx = (<UpsertCharacterModal {...props} />);
		const element = shallow(jsx);
		const button = getSpecWrapper(element, 'upsert-character-modal-close-button');
		button.simulate('click');
		expect(closeUpsertCharacterModal).toHaveBeenCalledTimes(1);
	});
});
