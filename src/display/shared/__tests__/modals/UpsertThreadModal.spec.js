// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../config/tests/helpers.unit';
import UpsertThreadModal from '../../modals/UpsertThreadModal';
// #endregion imports

// #region mocks
jest.mock('../../../forms/upsert-thread/UpsertThreadForm', () => 'UpsertThreadForm');
jest.mock('../../../forms/TooltipForm', () => 'TooltipForm');
// #endregion mocks

const createTestProps = propOverrides => ({
	isUpsertThreadModalOpen: true,
	submitUpsertThread: jest.fn(),
	closeUpsertThreadModal: jest.fn(),
	threadToEdit: { threadId: 1 },
	characters: [{ characterId: 1 }, { characterId: 2 }],
	...propOverrides
});

describe('rendering', () => {
	it('should render valid snapshot', () => {
		const props = createTestProps();
		const jsx = (<UpsertThreadModal {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should render valid snapshot if thread is new', () => {
		const props = createTestProps({ threadToEdit: {} });
		const jsx = (<UpsertThreadModal {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should render valid snapshot if thread has tags', () => {
		const threadToEdit = { threadId: 1, threadTags: [{ tagText: 'tag1' }, { tagText: 'tag2' }] };
		const props = createTestProps({ threadToEdit });
		const jsx = (<UpsertThreadModal {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
		const form = element.find('TooltipForm');
		expect(form.prop('tagValues')).toHaveLength(2);
	});
});

describe('behavior', () => {
	it('should trigger upsert thread action on form submit', () => {
		const submitUpsertThread = jest.fn();
		const threadToEdit = { threadId: 2 };
		const props = createTestProps({ submitUpsertThread, threadToEdit });
		const jsx = (<UpsertThreadModal {...props} />);
		const element = shallow(jsx);
		const form = getSpecWrapper(element, 'upsert-thread-modal-form');
		form.prop('onValidSubmit')();
		expect(submitUpsertThread).toHaveBeenCalledTimes(1);
		expect(submitUpsertThread).toHaveBeenLastCalledWith(threadToEdit);
	});
	it('should handle input change with text value', () => {
		const submitUpsertThread = jest.fn();
		const event = { target: { type: 'text', name: 'userTitle', value: 'My Thread' } };
		const props = createTestProps({ submitUpsertThread });
		const jsx = (<UpsertThreadModal {...props} />);
		const element = shallow(jsx);
		element.instance().handleInputChange(event);
		const form = getSpecWrapper(element, 'upsert-thread-modal-form');
		form.prop('onValidSubmit')();
		expect(submitUpsertThread).toHaveBeenLastCalledWith({ threadId: 1, userTitle: 'My Thread' });
	});
	it('should handle input change with checkbox value', () => {
		const submitUpsertThread = jest.fn();
		const event = { target: { type: 'checkbox', name: 'isArchived', checked: true } };
		const props = createTestProps({ submitUpsertThread });
		const jsx = (<UpsertThreadModal {...props} />);
		const element = shallow(jsx);
		element.instance().handleInputChange(event);
		const form = getSpecWrapper(element, 'upsert-thread-modal-form');
		form.prop('onValidSubmit')();
		expect(submitUpsertThread).toHaveBeenLastCalledWith({ threadId: 1, isArchived: true });
	});
	it('should set thread to edit on receive props with character ID if present', () => {
		const submitUpsertThread = jest.fn();
		const threadToEdit = { threadId: 2, characterId: 2 };
		const props = createTestProps({ submitUpsertThread });
		const jsx = (<UpsertThreadModal {...props} />);
		const element = shallow(jsx);
		element.setProps({ threadToEdit });
		const form = getSpecWrapper(element, 'upsert-thread-modal-form');
		form.prop('onValidSubmit')();
		expect(submitUpsertThread).toHaveBeenLastCalledWith(threadToEdit);
	});
	it('should set thread to edit on receive props with character ID from list if not present', () => {
		const submitUpsertThread = jest.fn();
		const threadToEdit = { threadId: 2 };
		const props = createTestProps({ submitUpsertThread });
		const jsx = (<UpsertThreadModal {...props} />);
		const element = shallow(jsx);
		element.setProps({ threadToEdit });
		const form = getSpecWrapper(element, 'upsert-thread-modal-form');
		form.prop('onValidSubmit')();
		expect(submitUpsertThread).toHaveBeenLastCalledWith({ threadId: 2, characterId: 1 });
	});
	it('should set thread to edit on receive props with null character ID if not present and list empty', () => {
		const submitUpsertThread = jest.fn();
		const threadToEdit = { threadId: 2 };
		const characters = [];
		const props = createTestProps({ submitUpsertThread, characters });
		const jsx = (<UpsertThreadModal {...props} />);
		const element = shallow(jsx);
		element.setProps({ threadToEdit });
		const form = getSpecWrapper(element, 'upsert-thread-modal-form');
		form.prop('onValidSubmit')();
		expect(submitUpsertThread).toHaveBeenLastCalledWith(threadToEdit);
	});
	it('should close modal on modal toggle', () => {
		const closeUpsertThreadModal = jest.fn();
		const props = createTestProps({ closeUpsertThreadModal });
		const jsx = (<UpsertThreadModal {...props} />);
		const element = shallow(jsx);
		const modal = getSpecWrapper(element, 'upsert-thread-modal');
		modal.prop('toggle')();
		expect(closeUpsertThreadModal).toHaveBeenCalledTimes(1);
	});
	it('should close modal on modal toggle', () => {
		const closeUpsertThreadModal = jest.fn();
		const props = createTestProps({ closeUpsertThreadModal });
		const jsx = (<UpsertThreadModal {...props} />);
		const element = shallow(jsx);
		const header = getSpecWrapper(element, 'upsert-thread-modal-header');
		header.prop('toggle')();
		expect(closeUpsertThreadModal).toHaveBeenCalledTimes(1);
	});
	it('should close modal on close button click', () => {
		const closeUpsertThreadModal = jest.fn();
		const props = createTestProps({ closeUpsertThreadModal });
		const jsx = (<UpsertThreadModal {...props} />);
		const element = shallow(jsx);
		const button = getSpecWrapper(element, 'upsert-thread-modal-close-button');
		button.simulate('click');
		expect(closeUpsertThreadModal).toHaveBeenCalledTimes(1);
	});
	it('should remove tag on handleTagRemoved', () => {
		const submitUpsertThread = jest.fn();
		const threadToEdit = { threadId: 1, threadTags: [{ tagText: 'Test Tag 1' }, { tagText: 'Test Tag 2' }] };
		const props = createTestProps({ threadToEdit, submitUpsertThread });
		const jsx = (<UpsertThreadModal {...props} />);
		const element = shallow(jsx);
		element.instance().handleTagRemoved('Test Tag 1');
		const form = getSpecWrapper(element, 'upsert-thread-modal-form');
		form.prop('onValidSubmit')();
		expect(submitUpsertThread).toHaveBeenLastCalledWith({ threadId: 1, threadTags: [{ tagText: 'Test Tag 2' }] });
	});
	it('should ignore handleTagRemoved if the tag does not exist', () => {
		const submitUpsertThread = jest.fn();
		const threadToEdit = { threadId: 1, threadTags: [{ tagText: 'Test Tag 1' }, { tagText: 'Test Tag 2' }] };
		const props = createTestProps({ threadToEdit, submitUpsertThread });
		const jsx = (<UpsertThreadModal {...props} />);
		const element = shallow(jsx);
		element.instance().handleTagRemoved('Test Tag 3');
		const form = getSpecWrapper(element, 'upsert-thread-modal-form');
		form.prop('onValidSubmit')();
		expect(submitUpsertThread).toHaveBeenLastCalledWith({ threadId: 1, threadTags: [{ tagText: 'Test Tag 1' }, { tagText: 'Test Tag 2' }] });
	});
	it('should add tag on handleTagAdded', () => {
		const submitUpsertThread = jest.fn();
		const threadToEdit = { threadId: 1, threadTags: [{ tagText: 'Test Tag 1' }, { tagText: 'Test Tag 2' }] };
		const props = createTestProps({ threadToEdit, submitUpsertThread });
		const jsx = (<UpsertThreadModal {...props} />);
		const element = shallow(jsx);
		element.instance().handleTagAdded('Test Tag 3');
		const form = getSpecWrapper(element, 'upsert-thread-modal-form');
		form.prop('onValidSubmit')();
		expect(submitUpsertThread).toHaveBeenLastCalledWith({ threadId: 1, threadTags: [{ tagText: 'Test Tag 1' }, { tagText: 'Test Tag 2' }, { tagText: 'Test Tag 3' }] });
	});
	it('should ignore handleTagAdded if the tag already exists', () => {
		const submitUpsertThread = jest.fn();
		const threadToEdit = { threadId: 1, threadTags: [{ tagText: 'Test Tag 1' }, { tagText: 'Test Tag 2' }] };
		const props = createTestProps({ threadToEdit, submitUpsertThread });
		const jsx = (<UpsertThreadModal {...props} />);
		const element = shallow(jsx);
		element.instance().handleTagAdded('Test Tag 2');
		const form = getSpecWrapper(element, 'upsert-thread-modal-form');
		form.prop('onValidSubmit')();
		expect(submitUpsertThread).toHaveBeenLastCalledWith({ threadId: 1, threadTags: [{ tagText: 'Test Tag 1' }, { tagText: 'Test Tag 2' }] });
	});
	it('should set character ID on selectCharacter', () => {
		const submitUpsertThread = jest.fn();
		const threadToEdit = { threadId: 1, characterId: 2 };
		const props = createTestProps({ threadToEdit, submitUpsertThread });
		const jsx = (<UpsertThreadModal {...props} />);
		const element = shallow(jsx);
		element.instance().selectCharacter(1);
		const form = getSpecWrapper(element, 'upsert-thread-modal-form');
		form.prop('onValidSubmit')();
		expect(submitUpsertThread).toHaveBeenLastCalledWith({ threadId: 1, characterId: 1 });
	});
	it('should do nothing on selectCharacter if ID has not changed', () => {
		const submitUpsertThread = jest.fn();
		const threadToEdit = { threadId: 1, characterId: 1 };
		const props = createTestProps({ threadToEdit, submitUpsertThread });
		const jsx = (<UpsertThreadModal {...props} />);
		const element = shallow(jsx);
		element.instance().selectCharacter(1);
		const form = getSpecWrapper(element, 'upsert-thread-modal-form');
		form.prop('onValidSubmit')();
		expect(submitUpsertThread).toHaveBeenLastCalledWith({ threadId: 1, characterId: 1 });
	});
});
