// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../config/tests/helpers.unit';
import GenericConfirmationModal from '../../modals/GenericConfirmationModal';
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

describe('behavior', () => {
	it('should trigger OK handler on click and submit data', () => {
		const submitCallback = jest.fn();
		const props = createTestProps({ submitCallback });
		const jsx = (<GenericConfirmationModal {...props} />);
		const element = shallow(jsx);
		const button = getSpecWrapper(element, 'generic-confirmation-ok-button');
		button.simulate('click');
		expect(submitCallback).toHaveBeenCalledTimes(1);
		expect(submitCallback).toHaveBeenCalledWith(['my', 'data']);
	});
	it('should trigger cancel handler on click', () => {
		const closeCallback = jest.fn();
		const props = createTestProps({ closeCallback });
		const jsx = (<GenericConfirmationModal {...props} />);
		const element = shallow(jsx);
		const button = getSpecWrapper(element, 'generic-confirmation-cancel-button');
		button.simulate('click');
		expect(closeCallback).toHaveBeenCalledTimes(1);
	});
});
