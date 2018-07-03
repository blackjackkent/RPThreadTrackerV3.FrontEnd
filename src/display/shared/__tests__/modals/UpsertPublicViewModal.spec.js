// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../config/tests/helpers.unit';
import UpsertPublicViewModal from '../../modals/UpsertPublicViewModal';
// #endregion imports

// #region mocks
jest.mock('../../../forms/upsert-public-view/UpsertPublicViewForm', () => 'UpsertPublicViewForm');
jest.mock('../../../forms/TooltipForm', () => 'TooltipForm');
jest.mock('../../../../utility', () => ({
	getValuesFromMultiSelect: target => target.multiValues
}));
// #endregion mocks

const createTestProps = propOverrides => ({
	isUpsertPublicViewModalOpen: true,
	submitUpsertPublicView: jest.fn(),
	closeUpsertPublicViewModal: jest.fn(),
	viewToEdit: { id: 1 },
	characters: [{ characterId: 2 }, { characterId: 3 }],
	tags: ['tag1', 'tag2'],
	columns: { TEST_COLUMN: { key: 'column1' } },
	...propOverrides
});

describe('rendering', () => {
	it('should render valid snapshot', () => {
		const props = createTestProps();
		const jsx = (<UpsertPublicViewModal {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should render valid snapshot if view is new', () => {
		const props = createTestProps({ viewToEdit: {} });
		const jsx = (<UpsertPublicViewModal {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
});

describe('behavior', () => {
	it('should trigger upsert view action on form submit', () => {
		const submitUpsertPublicView = jest.fn();
		const viewToEdit = { id: 2 };
		const props = createTestProps({ submitUpsertPublicView, viewToEdit });
		const jsx = (<UpsertPublicViewModal {...props} />);
		const element = shallow(jsx);
		const form = getSpecWrapper(element, 'upsert-public-view-modal-form');
		form.prop('onValidSubmit')();
		expect(submitUpsertPublicView).toHaveBeenCalledTimes(1);
		expect(submitUpsertPublicView).toHaveBeenLastCalledWith(viewToEdit);
	});
	it('should handle input change with text value', () => {
		const submitUpsertPublicView = jest.fn();
		const event = { target: { type: 'text', name: 'slug', value: 'my-slug' } };
		const props = createTestProps({ submitUpsertPublicView });
		const jsx = (<UpsertPublicViewModal {...props} />);
		const element = shallow(jsx);
		element.instance().handleInputChange(event);
		const form = getSpecWrapper(element, 'upsert-public-view-modal-form');
		form.prop('onValidSubmit')();
		expect(submitUpsertPublicView).toHaveBeenCalledTimes(1);
		expect(submitUpsertPublicView).toHaveBeenLastCalledWith({ id: 1, slug: 'my-slug' });
	});
	it('should handle input change with multiselect', () => {
		const submitUpsertPublicView = jest.fn();
		const event = { target: { type: 'select-multiple', name: 'columns', multiValues: ['value1', 'value2'] } };
		const props = createTestProps({ submitUpsertPublicView });
		const jsx = (<UpsertPublicViewModal {...props} />);
		const element = shallow(jsx);
		element.instance().handleInputChange(event);
		const form = getSpecWrapper(element, 'upsert-public-view-modal-form');
		form.prop('onValidSubmit')();
		expect(submitUpsertPublicView).toHaveBeenCalledTimes(1);
		expect(submitUpsertPublicView)
			.toHaveBeenLastCalledWith({ id: 1, columns: ['value1', 'value2'] });
	});
	it('should handle input change with checkbox value as turnFilter setting', () => {
		const submitUpsertPublicView = jest.fn();
		const event = { target: { type: 'checkbox', name: 'includeMyTurn', checked: true } };
		const props = createTestProps({ submitUpsertPublicView });
		const jsx = (<UpsertPublicViewModal {...props} />);
		const element = shallow(jsx);
		element.instance().handleInputChange(event);
		const form = getSpecWrapper(element, 'upsert-public-view-modal-form');
		form.prop('onValidSubmit')();
		expect(submitUpsertPublicView).toHaveBeenCalledTimes(1);
		expect(submitUpsertPublicView)
			.toHaveBeenLastCalledWith({ id: 1, turnFilter: { includeMyTurn: true } });
	});
	it('should handle input change with checkbox value as turnFilter setting if turnfilter is already partially set', () => {
		const submitUpsertPublicView = jest.fn();
		const viewToEdit = { id: 1, turnFilter: { includeTheirTurn: false } };
		const event = { target: { type: 'checkbox', name: 'includeMyTurn', checked: true } };
		const props = createTestProps({ submitUpsertPublicView, viewToEdit });
		const jsx = (<UpsertPublicViewModal {...props} />);
		const element = shallow(jsx);
		element.instance().handleInputChange(event);
		const form = getSpecWrapper(element, 'upsert-public-view-modal-form');
		form.prop('onValidSubmit')();
		expect(submitUpsertPublicView).toHaveBeenCalledTimes(1);
		expect(submitUpsertPublicView)
			.toHaveBeenLastCalledWith({
				id: 1,
				turnFilter: { includeMyTurn: true, includeTheirTurn: false }
			});
	});
	it('should set view to edit on receive props', () => {
		const submitUpsertPublicView = jest.fn();
		const viewToEdit = { id: 2 };
		const props = createTestProps({ submitUpsertPublicView });
		const jsx = (<UpsertPublicViewModal {...props} />);
		const element = shallow(jsx);
		element.setProps({ viewToEdit });
		const form = getSpecWrapper(element, 'upsert-public-view-modal-form');
		form.prop('onValidSubmit')();
		expect(submitUpsertPublicView).toHaveBeenCalledTimes(1);
		expect(submitUpsertPublicView).toHaveBeenLastCalledWith(viewToEdit);
	});
	it('should close modal on modal toggle', () => {
		const closeUpsertPublicViewModal = jest.fn();
		const props = createTestProps({ closeUpsertPublicViewModal });
		const jsx = (<UpsertPublicViewModal {...props} />);
		const element = shallow(jsx);
		const modal = getSpecWrapper(element, 'upsert-public-view-modal');
		modal.prop('toggle')();
		expect(closeUpsertPublicViewModal).toHaveBeenCalledTimes(1);
	});
	it('should close modal on modal toggle', () => {
		const closeUpsertPublicViewModal = jest.fn();
		const props = createTestProps({ closeUpsertPublicViewModal });
		const jsx = (<UpsertPublicViewModal {...props} />);
		const element = shallow(jsx);
		const header = getSpecWrapper(element, 'upsert-public-view-modal-header');
		header.prop('toggle')();
		expect(closeUpsertPublicViewModal).toHaveBeenCalledTimes(1);
	});
	it('should close modal on close button click', () => {
		const closeUpsertPublicViewModal = jest.fn();
		const props = createTestProps({ closeUpsertPublicViewModal });
		const jsx = (<UpsertPublicViewModal {...props} />);
		const element = shallow(jsx);
		const button = getSpecWrapper(element, 'upsert-public-view-modal-close-button');
		button.simulate('click');
		expect(closeUpsertPublicViewModal).toHaveBeenCalledTimes(1);
	});
});
