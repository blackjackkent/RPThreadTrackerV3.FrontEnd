// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../config/tests/helpers.unit';
import Header from '../../header/Header';
// #endregion imports

// #region mocks
jest.mock('../../header/components', () => ({
	HeaderLogoBlock: () => 'HeaderLogoBlock',
	HeaderButton: () => 'HeaderButton',
	HeaderAsideToggle: () => 'HeaderAsideToggle',
	HeaderDropdown: () => 'HeaderDropdown'
}));
jest.mock('../../LoadingIndicator', () => 'LoadingIndicator');
// #endregion mocks

const createTestProps = propOverrides => ({
	asideToggle: jest.fn(),
	headerDropdownToggle: jest.fn(),
	isHeaderDropdownOpen: true,
	logout: jest.fn(),
	mobileSidebarToggle: jest.fn(),
	newsUnreadCount: 2,
	openUpsertCharacterModal: jest.fn(),
	openNewThreadModal: jest.fn(),
	sidebarToggle: jest.fn(),
	isSidebarOpen: true,
	isMobileSidebarOpen: true,
	isLoadingIconVisible: true,
	isNewsAsideOpen: true,
	user: {
		id: '12345'
	},
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = (<Header {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot without loading indicator', () => {
			const props = createTestProps({ isLoadingIconVisible: false });
			const jsx = (<Header {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
	describe('loading indicator', () => {
		it('should be visible when isLoadingIndicatorVisible is true', () => {
			const props = createTestProps();
			const jsx = (<Header {...props} />);
			const element = shallow(jsx);
			expect(getSpecWrapper(element, 'header-loading-indicator')).toHaveLength(1);
		});
		it('should be hidden when isLoadingIndicatorVisible is false', () => {
			const props = createTestProps({ isLoadingIconVisible: false });
			const jsx = (<Header {...props} />);
			const element = shallow(jsx);
			expect(getSpecWrapper(element, 'header-loading-indicator')).toHaveLength(0);
		});
	});
});

describe('behavior', () => {
	describe('openUpsertCharacterModal', () => {
		it('should be called when upsert character modal button is clicked', () => {
			const openUpsertCharacterModal = jest.fn();
			const props = createTestProps({ openUpsertCharacterModal });
			const jsx = (<Header {...props} />);
			const element = shallow(jsx);
			const button = getSpecWrapper(element, 'header-open-upsert-character-modal-button');
			button.simulate('click');
			expect(openUpsertCharacterModal).toHaveBeenCalledTimes(1);
			expect(openUpsertCharacterModal).toHaveBeenCalledWith();
		});
	});
	describe('openUpsertThreadModal', () => {
		it('should be called when upsert thread modal button is clicked', () => {
			const openNewThreadModal = jest.fn();
			const props = createTestProps({ openNewThreadModal });
			const jsx = (<Header {...props} />);
			const element = shallow(jsx);
			const button = getSpecWrapper(element, 'header-open-upsert-thread-modal-button');
			button.simulate('click');
			expect(openNewThreadModal).toHaveBeenCalledTimes(1);
			expect(openNewThreadModal).toHaveBeenCalledWith();
		});
	});
});
