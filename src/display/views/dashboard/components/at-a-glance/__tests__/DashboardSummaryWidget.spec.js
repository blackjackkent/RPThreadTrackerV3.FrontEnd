// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../../../config/tests/helpers.unit';
import DashboardSummaryWidget from '../DashboardSummaryWidget';
// #endregion imports

// #region mocks
jest.mock('../../../../../shared/LoadingIndicator', () => 'LoadingIndicator');
// #endregion mocks

const createTestProps = propOverrides => ({
	header: 33,
	icon: 'icon-list',
	isLoadingIconVisible: false,
	...propOverrides
});

describe('rendering', () => {
	it('should render valid snapshot', () => {
		const props = createTestProps();
		const jsx = (<DashboardSummaryWidget {...props}>Test</DashboardSummaryWidget>);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should render valid snapshot with loading indicator', () => {
		const props = createTestProps({ isLoadingIconVisible: true });
		const jsx = (<DashboardSummaryWidget {...props}>Test</DashboardSummaryWidget>);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should render with props', () => {
		const props = createTestProps();
		const jsx = (<DashboardSummaryWidget {...props}>Test</DashboardSummaryWidget>);
		const element = shallow(jsx);
		expect(getSpecWrapper(element, 'dashboard-summary-widget-header')).toHaveText('33');
		expect(getSpecWrapper(element, 'dashboard-summary-widget-body')).toHaveText('Test');
		expect(getSpecWrapper(element, 'dashboard-summary-widget-icon')).toHaveClassName('icon-list');
		expect(getSpecWrapper(element, 'dashboard-summary-widget-loading')).toHaveLength(0);
	});
	it('should render loading icon', () => {
		const props = createTestProps({ isLoadingIconVisible: true });
		const jsx = (<DashboardSummaryWidget {...props}>Test</DashboardSummaryWidget>);
		const element = shallow(jsx);
		expect(getSpecWrapper(element, 'dashboard-summary-widget-loading')).toHaveLength(1);
	});
});
