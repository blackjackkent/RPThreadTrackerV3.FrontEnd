// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../config/tests/helpers.unit';
import UpsertThreadModal from '../UpsertThreadModal';
// #endregion imports

// #region mocks
jest.mock('../../../forms/upsert-thread/UpsertThreadForm', () => 'UpsertThreadForm');
jest.mock('../../../forms/TooltipForm', () => 'TooltipForm');
jest.mock('../../styled/Modal', () => 'Modal');
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
	describe('snapshots', () => {
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
});

describe('behavior', () => {
	describe('submitUpsertThread', () => {
		it('should be called when form is submitted', () => {
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
	});
	describe('handleInputChange', () => {
		it('should handle text field update', () => {
			const submitUpsertThread = jest.fn();
			const event = { target: { type: 'text', name: 'userTitle', value: 'My Thread' } };
			const props = createTestProps({ submitUpsertThread });
			const jsx = (<UpsertThreadModal {...props} />);
			const element = shallow(jsx);
			element.instance().handleInputChange(event);
			element.update();
			const form = getSpecWrapper(element, 'upsert-thread-modal-form');
			form.prop('onValidSubmit')();
			expect(submitUpsertThread).toHaveBeenLastCalledWith({ threadId: 1, userTitle: 'My Thread' });
		});
		it('should handle checkbox field input', () => {
			const submitUpsertThread = jest.fn();
			const event = { target: { type: 'checkbox', name: 'isArchived', checked: true } };
			const props = createTestProps({ submitUpsertThread });
			const jsx = (<UpsertThreadModal {...props} />);
			const element = shallow(jsx);
			element.instance().handleInputChange(event);
			element.update();
			const form = getSpecWrapper(element, 'upsert-thread-modal-form');
			form.prop('onValidSubmit')();
			expect(submitUpsertThread).toHaveBeenLastCalledWith({ threadId: 1, isArchived: true });
		});
	});
	describe('componentWillReceiveProps', () => {
		it('should set thread to edit', () => {
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
		it('should set thread to edit with null character ID if character ID not present on thread', () => {
			const submitUpsertThread = jest.fn();
			const threadToEdit = { threadId: 2 };
			const props = createTestProps({ submitUpsertThread });
			const jsx = (<UpsertThreadModal {...props} />);
			const element = shallow(jsx);
			element.setProps({ threadToEdit });
			const form = getSpecWrapper(element, 'upsert-thread-modal-form');
			form.prop('onValidSubmit')();
			expect(submitUpsertThread).toHaveBeenLastCalledWith(threadToEdit);
		});
	});
	describe('closeUpsertThreadModal', () => {
		it('should be triggered when modal is toggled', () => {
			const closeUpsertThreadModal = jest.fn();
			const props = createTestProps({ closeUpsertThreadModal });
			const jsx = (<UpsertThreadModal {...props} />);
			const element = shallow(jsx);
			const modal = getSpecWrapper(element, 'upsert-thread-modal');
			modal.prop('toggle')();
			expect(closeUpsertThreadModal).toHaveBeenCalledTimes(1);
		});
		it('should be triggered when modal header is toggled', () => {
			const closeUpsertThreadModal = jest.fn();
			const props = createTestProps({ closeUpsertThreadModal });
			const jsx = (<UpsertThreadModal {...props} />);
			const element = shallow(jsx);
			const header = getSpecWrapper(element, 'upsert-thread-modal-header');
			header.prop('toggle')();
			expect(closeUpsertThreadModal).toHaveBeenCalledTimes(1);
		});
		it('should be triggered when close button is clicked', () => {
			const closeUpsertThreadModal = jest.fn();
			const props = createTestProps({ closeUpsertThreadModal });
			const jsx = (<UpsertThreadModal {...props} />);
			const element = shallow(jsx);
			const button = getSpecWrapper(element, 'upsert-thread-modal-close-button');
			button.simulate('click');
			expect(closeUpsertThreadModal).toHaveBeenCalledTimes(1);
		});
	});
	describe('handleTagRemoved', () => {
		it('should remove tag', () => {
			const submitUpsertThread = jest.fn();
			const threadToEdit = { threadId: 1, threadTags: [{ tagText: 'Test Tag 1' }, { tagText: 'Test Tag 2' }] };
			const props = createTestProps({ threadToEdit, submitUpsertThread });
			const jsx = (<UpsertThreadModal {...props} />);
			const element = shallow(jsx);
			element.instance().handleTagRemoved('Test Tag 1');
			element.update();
			const form = getSpecWrapper(element, 'upsert-thread-modal-form');
			form.prop('onValidSubmit')();
			expect(submitUpsertThread).toHaveBeenLastCalledWith({ threadId: 1, threadTags: [{ tagText: 'Test Tag 2' }] });
		});
		it('should instantiate threadTags before attempting remove if it does not exist', () => {
			const submitUpsertThread = jest.fn();
			const threadToEdit = { threadId: 1 };
			const props = createTestProps({ threadToEdit, submitUpsertThread });
			const jsx = (<UpsertThreadModal {...props} />);
			const element = shallow(jsx);
			element.instance().handleTagRemoved('Test Tag 1');
			element.update();
			const form = getSpecWrapper(element, 'upsert-thread-modal-form');
			form.prop('onValidSubmit')();
			expect(submitUpsertThread).toHaveBeenLastCalledWith({ threadId: 1, threadTags: [] });
		});
		it('should do nothing if tag does not exist in threadTags', () => {
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
	});
	describe('handleTagAdded', () => {
		it('should add tag', () => {
			const submitUpsertThread = jest.fn();
			const threadToEdit = { threadId: 1, threadTags: [{ tagText: 'Test Tag 1' }, { tagText: 'Test Tag 2' }] };
			const props = createTestProps({ threadToEdit, submitUpsertThread });
			const jsx = (<UpsertThreadModal {...props} />);
			const element = shallow(jsx);
			element.instance().handleTagAdded('Test Tag 3');
			element.update();
			const form = getSpecWrapper(element, 'upsert-thread-modal-form');
			form.prop('onValidSubmit')();
			expect(submitUpsertThread).toHaveBeenLastCalledWith({ threadId: 1, threadTags: [{ tagText: 'Test Tag 1' }, { tagText: 'Test Tag 2' }, { tagText: 'Test Tag 3' }] });
		});
		it('should instantiate threadTags before adding if array does not exist', () => {
			const submitUpsertThread = jest.fn();
			const threadToEdit = { threadId: 1 };
			const props = createTestProps({ threadToEdit, submitUpsertThread });
			const jsx = (<UpsertThreadModal {...props} />);
			const element = shallow(jsx);
			element.instance().handleTagAdded('Test Tag 1');
			element.update();
			const form = getSpecWrapper(element, 'upsert-thread-modal-form');
			form.prop('onValidSubmit')();
			expect(submitUpsertThread).toHaveBeenLastCalledWith({ threadId: 1, threadTags: [{ tagText: 'Test Tag 1' }] });
		});
		it('should do nothing if the tag already exists in threadTags', () => {
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
	});
	describe('selectCharacter', () => {
		it('should set character ID', () => {
			const event = { target: { value: 5 } };
			const submitUpsertThread = jest.fn();
			const threadToEdit = { threadId: 1, characterId: 2 };
			const props = createTestProps({ threadToEdit, submitUpsertThread });
			const jsx = (<UpsertThreadModal {...props} />);
			const element = shallow(jsx);
			element.instance().selectCharacter(event);
			element.update();
			const form = getSpecWrapper(element, 'upsert-thread-modal-form');
			form.prop('onValidSubmit')();
			expect(submitUpsertThread).toHaveBeenLastCalledWith({ threadId: 1, characterId: 5 });
		});
		it('should do nothing if ID has not changed', () => {
			const event = { target: { value: 1 } };
			const submitUpsertThread = jest.fn();
			const threadToEdit = { threadId: 1, characterId: 1 };
			const props = createTestProps({ threadToEdit, submitUpsertThread });
			const jsx = (<UpsertThreadModal {...props} />);
			const element = shallow(jsx);
			element.instance().selectCharacter(event);
			const form = getSpecWrapper(element, 'upsert-thread-modal-form');
			form.prop('onValidSubmit')();
			expect(submitUpsertThread).toHaveBeenLastCalledWith({ threadId: 1, characterId: 1 });
		});
	});
});
