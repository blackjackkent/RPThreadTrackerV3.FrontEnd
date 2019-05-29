// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '~/utility/helpers.unit';
import GenericConfirmationModal from '../GenericConfirmationModal';
// #endregion imports

const createTestProps = propOverrides => ({
	isModalOpen: true,
	submitCallback: jest.fn(),
	closeCallback: jest.fn(),
	headerText: 'Test Header',
	bodyText: (<span>Test Body</span>),
	data: ['my', 'data'],
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = (<GenericConfirmationModal {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with non-default props', () => {
			const props = createTestProps({
				submitButtonText: 'Test OK',
				closeButtonText: 'Test Cancel'
			});
			const jsx = (<GenericConfirmationModal {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('submitCallback', () => {
		it('should be triggered with data when submit button is clicked', () => {
			const submitCallback = jest.fn();
			const props = createTestProps({ submitCallback });
			const jsx = (<GenericConfirmationModal {...props} />);
			const element = shallow(jsx);
			const button = getSpecWrapper(element, 'generic-confirmation-ok-button');
			button.simulate('click');
			expect(submitCallback).toHaveBeenCalledTimes(1);
			expect(submitCallback).toHaveBeenCalledWith(['my', 'data']);
		});
	});
	describe('closeCallback', () => {
		it('should be triggered when modal is toggled', () => {
			const closeCallback = jest.fn();
			const props = createTestProps({ closeCallback });
			const jsx = (<GenericConfirmationModal {...props} />);
			const element = shallow(jsx);
			const modal = getSpecWrapper(element, 'generic-confirmation-modal');
			modal.prop('toggle')();
			expect(closeCallback).toHaveBeenCalledTimes(1);
		});
		it('should close modal on modal header toggle', () => {
			const closeCallback = jest.fn();
			const props = createTestProps({ closeCallback });
			const jsx = (<GenericConfirmationModal {...props} />);
			const element = shallow(jsx);
			const header = getSpecWrapper(element, 'generic-confirmation-modal-header');
			header.prop('toggle')();
			expect(closeCallback).toHaveBeenCalledTimes(1);
		});
		it('should be triggered when cancel button is clicked', () => {
			const closeCallback = jest.fn();
			const props = createTestProps({ closeCallback });
			const jsx = (<GenericConfirmationModal {...props} />);
			const element = shallow(jsx);
			const button = getSpecWrapper(element, 'generic-confirmation-cancel-button');
			button.simulate('click');
			expect(closeCallback).toHaveBeenCalledTimes(1);
		});
	});
});
