// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../config/tests/helpers.unit';
import UpsertCharacterModal from '../UpsertCharacterModal';
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
	describe('snapshots', () => {
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
});

describe('behavior', () => {
	describe('submitUpsertCharacter', () => {
		it('should be called when form is submitted', () => {
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
	});
	describe('handleInputChange', () => {
		it('should handle text field update', () => {
			const submitUpsertCharacter = jest.fn();
			const event = { target: { type: 'text', name: 'characterName', value: 'My Character' } };
			const props = createTestProps({ submitUpsertCharacter });
			const jsx = (<UpsertCharacterModal {...props} />);
			const element = shallow(jsx);
			element.instance().handleInputChange(event);
			element.update();
			const form = getSpecWrapper(element, 'upsert-character-modal-form');
			form.prop('onValidSubmit')();
			expect(submitUpsertCharacter).toHaveBeenCalledTimes(1);
			expect(submitUpsertCharacter).toHaveBeenLastCalledWith({ characterId: 1, characterName: 'My Character' });
		});
		it('should handle checkbox field update', () => {
			const submitUpsertCharacter = jest.fn();
			const event = { target: { type: 'checkbox', name: 'isActive', checked: true } };
			const props = createTestProps({ submitUpsertCharacter });
			const jsx = (<UpsertCharacterModal {...props} />);
			const element = shallow(jsx);
			element.instance().handleInputChange(event);
			element.update();
			const form = getSpecWrapper(element, 'upsert-character-modal-form');
			form.prop('onValidSubmit')();
			expect(submitUpsertCharacter).toHaveBeenCalledTimes(1);
			expect(submitUpsertCharacter).toHaveBeenLastCalledWith({ characterId: 1, isActive: true });
		});
	});
	describe('componentWillReceiveProps', () => {
		it('should set character to edit', () => {
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
	});
	describe('closeUpsertCharacterModal', () => {
		it('should be triggered when modal is toggled', () => {
			const closeUpsertCharacterModal = jest.fn();
			const props = createTestProps({ closeUpsertCharacterModal });
			const jsx = (<UpsertCharacterModal {...props} />);
			const element = shallow(jsx);
			const modal = getSpecWrapper(element, 'upsert-character-modal');
			modal.prop('toggle')();
			expect(closeUpsertCharacterModal).toHaveBeenCalledTimes(1);
		});
		it('should be triggered when modal header is toggled', () => {
			const closeUpsertCharacterModal = jest.fn();
			const props = createTestProps({ closeUpsertCharacterModal });
			const jsx = (<UpsertCharacterModal {...props} />);
			const element = shallow(jsx);
			const header = getSpecWrapper(element, 'upsert-character-modal-header');
			header.prop('toggle')();
			expect(closeUpsertCharacterModal).toHaveBeenCalledTimes(1);
		});
		it('should be triggered when close button is clicked', () => {
			const closeUpsertCharacterModal = jest.fn();
			const props = createTestProps({ closeUpsertCharacterModal });
			const jsx = (<UpsertCharacterModal {...props} />);
			const element = shallow(jsx);
			const button = getSpecWrapper(element, 'upsert-character-modal-close-button');
			button.simulate('click');
			expect(closeUpsertCharacterModal).toHaveBeenCalledTimes(1);
		});
	});
});
