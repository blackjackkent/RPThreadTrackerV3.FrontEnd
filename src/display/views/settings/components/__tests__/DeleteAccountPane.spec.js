// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '~/testhelpers/helpers.unit';
import DeleteAccountPane from '../DeleteAccountPane';
// #endregion imports

const createTestProps = (propOverrides) => ({
	onDeleteAccountClicked: jest.fn(),
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const element = shallow(<DeleteAccountPane {...createTestProps()} />);
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('onDeleteAccountClicked', () => {
		it('should be called when button is clicked', () => {
			const onDeleteAccountClicked = jest.fn();
			const props = createTestProps({
				onDeleteAccountClicked
			});
			const element = shallow(<DeleteAccountPane {...props} />);
			const btn = getSpecWrapper(element, 'delete-account-button');
			btn.simulate('click');
			expect(onDeleteAccountClicked).toHaveBeenCalledTimes(1);
		});
	});
});
