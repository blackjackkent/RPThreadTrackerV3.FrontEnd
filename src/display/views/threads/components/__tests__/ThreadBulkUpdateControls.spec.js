// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../../config/tests/helpers.unit';
import ThreadBulkUpdateControls from '../ThreadBulkUpdateControls';
// #endregion imports

const createTestProps = propOverrides => ({
	isArchive: false,
	isQueue: false,
	selectedThreadCount: 5,
	executeBulkAction: jest.fn(),
	bulkToggleThreadsAreMarkedQueued: jest.fn(),
	bulkToggleThreadsAreArchived: jest.fn(),
	openBulkUntrackThreadsModal: jest.fn(),
	...propOverrides
});
describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = (<ThreadBulkUpdateControls {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot on archive page', () => {
			const props = createTestProps({ isArchive: true });
			const jsx = (<ThreadBulkUpdateControls {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot on queue page', () => {
			const props = createTestProps({ isQueue: true });
			const jsx = (<ThreadBulkUpdateControls {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
	describe('content', () => {
		it('should have enabled button when items selected', () => {
			const props = createTestProps();
			const jsx = (<ThreadBulkUpdateControls {...props} />);
			const element = shallow(jsx);
			const button = getSpecWrapper(element, 'thread-bulk-update-controls-submit-button');
			expect(button).not.toBeDisabled();
		});
		it('should have disabled button when no items selected', () => {
			const props = createTestProps({ selectedThreadCount: 0 });
			const jsx = (<ThreadBulkUpdateControls {...props} />);
			const element = shallow(jsx);
			const button = getSpecWrapper(element, 'thread-bulk-update-controls-submit-button');
			expect(button).toBeDisabled();
		});
	});
});

describe('behavior', () => {
	describe('handleInputChange/submitBulkAction', () => {
		it('should trigger mark-queued bulk action when mark-queued option selected', () => {
			const bulkToggleThreadsAreMarkedQueued = jest.fn();
			const executeBulkAction = jest.fn();
			const changeEvent = { target: { value: 'toggle-queued' } };
			const submitEvent = { preventDefault: jest.fn() };
			const props = createTestProps({ bulkToggleThreadsAreMarkedQueued, executeBulkAction });
			const jsx = (<ThreadBulkUpdateControls {...props} />);
			const element = shallow(jsx);
			const select = getSpecWrapper(element, 'thread-bulk-update-controls-select');
			const form = getSpecWrapper(element, 'thread-bulk-update-controls-form');
			select.simulate('change', changeEvent);
			form.simulate('submit', submitEvent);
			expect(executeBulkAction).toHaveBeenCalledTimes(1);
			expect(executeBulkAction).toHaveBeenLastCalledWith(bulkToggleThreadsAreMarkedQueued);
		});
		it('should trigger archive bulk action when archive option selected', () => {
			const bulkToggleThreadsAreArchived = jest.fn();
			const executeBulkAction = jest.fn();
			const changeEvent = { target: { value: 'toggle-archived' } };
			const submitEvent = { preventDefault: jest.fn() };
			const props = createTestProps({ bulkToggleThreadsAreArchived, executeBulkAction });
			const jsx = (<ThreadBulkUpdateControls {...props} />);
			const element = shallow(jsx);
			const select = getSpecWrapper(element, 'thread-bulk-update-controls-select');
			const form = getSpecWrapper(element, 'thread-bulk-update-controls-form');
			select.simulate('change', changeEvent);
			form.simulate('submit', submitEvent);
			expect(executeBulkAction).toHaveBeenCalledTimes(1);
			expect(executeBulkAction).toHaveBeenLastCalledWith(bulkToggleThreadsAreArchived);
		});
		it('should trigger untrack bulk action when untrack option selected', () => {
			const openBulkUntrackThreadsModal = jest.fn();
			const executeBulkAction = jest.fn();
			const changeEvent = { target: { value: 'untrack' } };
			const submitEvent = { preventDefault: jest.fn() };
			const props = createTestProps({ openBulkUntrackThreadsModal, executeBulkAction });
			const jsx = (<ThreadBulkUpdateControls {...props} />);
			const element = shallow(jsx);
			const select = getSpecWrapper(element, 'thread-bulk-update-controls-select');
			const form = getSpecWrapper(element, 'thread-bulk-update-controls-form');
			select.simulate('change', changeEvent);
			form.simulate('submit', submitEvent);
			expect(executeBulkAction).toHaveBeenCalledTimes(1);
			expect(executeBulkAction).toHaveBeenLastCalledWith(openBulkUntrackThreadsModal);
		});
	});
});
