// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '~/testhelpers/helpers.unit';
import UpsertPublicViewModal from '../UpsertPublicViewModal';
// #endregion imports

// #region mocks
jest.mock('../../../forms/upsert-public-view/UpsertPublicViewForm', () => 'UpsertPublicViewForm');
jest.mock('../../../forms/TooltipForm', () => 'TooltipForm');
jest.mock('../../../../utility', () => ({
	getValuesFromMultiSelect: (target) => target.multiValues
}));
// #endregion mocks

const createTestProps = (propOverrides) => ({
	isUpsertPublicViewModalOpen: true,
	submitUpsertPublicView: jest.fn(),
	closeUpsertPublicViewModal: jest.fn(),
	viewToEdit: {
		id: '1'
	},
	characters: [
		{
			characterId: 2
		},
		{
			characterId: 3
		}
	],
	tags: ['tag1', 'tag2'],
	columns: {
		TEST_COLUMN: {
			key: 'column1'
		}
	},
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = <UpsertPublicViewModal {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot if view is new', () => {
			const props = createTestProps({
				viewToEdit: {}
			});
			const jsx = <UpsertPublicViewModal {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('submitUpsertPublicView', () => {
		it('should be called when form is submitted', () => {
			const submitUpsertPublicView = jest.fn();
			const viewToEdit = {
				id: '2'
			};
			const props = createTestProps({
				submitUpsertPublicView,
				viewToEdit
			});
			const jsx = <UpsertPublicViewModal {...props} />;
			const element = shallow(jsx);
			const form = getSpecWrapper(element, 'upsert-public-view-modal-form');
			form.prop('onValidSubmit')();
			expect(submitUpsertPublicView).toHaveBeenCalledTimes(1);
			expect(submitUpsertPublicView).toHaveBeenLastCalledWith(viewToEdit);
		});
	});
	describe('handleInputChange', () => {
		it('should handle text field update', () => {
			const submitUpsertPublicView = jest.fn();
			const event = {
				target: {
					type: 'text',
					name: 'slug',
					value: 'my-slug'
				}
			};
			const props = createTestProps({
				submitUpsertPublicView
			});
			const jsx = <UpsertPublicViewModal {...props} />;
			const element = shallow(jsx);
			element.instance().handleInputChange(event);
			element.update();
			const form = getSpecWrapper(element, 'upsert-public-view-modal-form');
			form.prop('onValidSubmit')();
			expect(submitUpsertPublicView).toHaveBeenCalledTimes(1);
			expect(submitUpsertPublicView).toHaveBeenLastCalledWith({
				id: '1',
				slug: 'my-slug'
			});
		});
		it('should handle multiselect field update', () => {
			const submitUpsertPublicView = jest.fn();
			const event = {
				target: {
					type: 'select-multiple',
					name: 'columns',
					multiValues: ['value1', 'value2']
				}
			};
			const props = createTestProps({
				submitUpsertPublicView
			});
			const jsx = <UpsertPublicViewModal {...props} />;
			const element = shallow(jsx);
			element.instance().handleInputChange(event);
			element.update();
			const form = getSpecWrapper(element, 'upsert-public-view-modal-form');
			form.prop('onValidSubmit')();
			expect(submitUpsertPublicView).toHaveBeenCalledTimes(1);
			expect(submitUpsertPublicView).toHaveBeenLastCalledWith({
				id: '1',
				columns: ['value1', 'value2']
			});
		});
		it('should handle turnfilter checkbox update', () => {
			const submitUpsertPublicView = jest.fn();
			const event = {
				target: {
					type: 'checkbox',
					name: 'includeMyTurn',
					checked: true
				}
			};
			const props = createTestProps({
				submitUpsertPublicView
			});
			const jsx = <UpsertPublicViewModal {...props} />;
			const element = shallow(jsx);
			element.instance().handleInputChange(event);
			element.update();
			const form = getSpecWrapper(element, 'upsert-public-view-modal-form');
			form.prop('onValidSubmit')();
			expect(submitUpsertPublicView).toHaveBeenCalledTimes(1);
			expect(submitUpsertPublicView).toHaveBeenLastCalledWith({
				id: '1',
				turnFilter: {
					includeMyTurn: true
				}
			});
		});
		it('should handle turnfilter checkbox update if turnfilter is already partially set', () => {
			const submitUpsertPublicView = jest.fn();
			const viewToEdit = {
				id: '1',
				turnFilter: {
					includeTheirTurn: false
				}
			};
			const event = {
				target: {
					type: 'checkbox',
					name: 'includeMyTurn',
					checked: true
				}
			};
			const props = createTestProps({
				submitUpsertPublicView,
				viewToEdit
			});
			const jsx = <UpsertPublicViewModal {...props} />;
			const element = shallow(jsx);
			element.instance().handleInputChange(event);
			const form = getSpecWrapper(element, 'upsert-public-view-modal-form');
			form.prop('onValidSubmit')();
			expect(submitUpsertPublicView).toHaveBeenCalledTimes(1);
			expect(submitUpsertPublicView).toHaveBeenLastCalledWith({
				id: '1',
				turnFilter: {
					includeMyTurn: true,
					includeTheirTurn: false
				}
			});
		});
	});
	describe('componentWillReceiveProps', () => {
		it('should set view to edit', () => {
			const submitUpsertPublicView = jest.fn();
			const viewToEdit = {
				id: '2'
			};
			const props = createTestProps({
				submitUpsertPublicView
			});
			const jsx = <UpsertPublicViewModal {...props} />;
			const element = shallow(jsx);
			element.setProps({
				viewToEdit
			});
			const form = getSpecWrapper(element, 'upsert-public-view-modal-form');
			form.prop('onValidSubmit')();
			expect(submitUpsertPublicView).toHaveBeenCalledTimes(1);
			expect(submitUpsertPublicView).toHaveBeenLastCalledWith(viewToEdit);
		});
	});
	describe('closeUpsertPublicViewModal', () => {
		it('should be triggered when modal is toggled', () => {
			const closeUpsertPublicViewModal = jest.fn();
			const props = createTestProps({
				closeUpsertPublicViewModal
			});
			const jsx = <UpsertPublicViewModal {...props} />;
			const element = shallow(jsx);
			const modal = getSpecWrapper(element, 'upsert-public-view-modal');
			modal.prop('toggle')();
			expect(closeUpsertPublicViewModal).toHaveBeenCalledTimes(1);
		});
		it('should be triggered when modal header is toggled', () => {
			const closeUpsertPublicViewModal = jest.fn();
			const props = createTestProps({
				closeUpsertPublicViewModal
			});
			const jsx = <UpsertPublicViewModal {...props} />;
			const element = shallow(jsx);
			const header = getSpecWrapper(element, 'upsert-public-view-modal-header');
			header.prop('toggle')();
			expect(closeUpsertPublicViewModal).toHaveBeenCalledTimes(1);
		});
		it('should be triggered when close button is clicked', () => {
			const closeUpsertPublicViewModal = jest.fn();
			const props = createTestProps({
				closeUpsertPublicViewModal
			});
			const jsx = <UpsertPublicViewModal {...props} />;
			const element = shallow(jsx);
			const button = getSpecWrapper(element, 'upsert-public-view-modal-close-button');
			button.simulate('click');
			expect(closeUpsertPublicViewModal).toHaveBeenCalledTimes(1);
		});
	});
});
