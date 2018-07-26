// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../../config/tests/helpers.unit';
import ManagePublicViewsPane from '../ManagePublicViewsPane';
// #endregion imports

jest.mock('../public-views/PublicViewsTable', () => 'PublicViewsTable');

const createTestProps = propOverrides => ({
	isLoadingIconVisible: true,
	publicViews: [{}, {}],
	openUpsertPublicViewModal: jest.fn(),
	openDeletePublicViewModal: jest.fn(),
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const element = shallow(<ManagePublicViewsPane {...createTestProps()} />);
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('openUpsertPublicViewModal', () => {
		it('should be called when button is clicked', () => {
			const openUpsertPublicViewModal = jest.fn();
			const props = createTestProps({ openUpsertPublicViewModal });
			const element = shallow(<ManagePublicViewsPane {...props} />);
			const button = getSpecWrapper(element, 'create-public-view-button');
			button.simulate('click');
			expect(openUpsertPublicViewModal).toHaveBeenCalledTimes(1);
		});
	});
});
