// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '~/utility/helpers.unit';
import AtAGlanceCard from '../AtAGlanceCard';
// #endregion imports

// #region mocks
jest.mock('../DashboardSummaryWidget', () => 'DashboardSummaryWidget');
// #endregion mocks

const createTestProps = propOverrides => ({
	// common props
	showDashboardThreadDistribution: true,
	showDashboardThreadDistributionToggle: jest.fn(),
	myTurnThreads: [{}],
	theirTurnThreads: [{}, {}],
	activeThreads: [{}, {}, {}, {}, {}, {}],
	queuedThreads: [{}, {}, {}],
	isLoadingIconVisible: false,
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = (<AtAGlanceCard {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
	describe('toggle', () => {
		it('should be checked if showDashboardThreadDistribution is true', () => {
			const props = createTestProps();
			const jsx = (<AtAGlanceCard {...props} />);
			const element = shallow(jsx);
			const toggle = getSpecWrapper(element, 'at-a-glance-card-toggle');
			expect(toggle).toHaveProp('checked', true);
		});
		it('should not be checked if showDashboardThreadDistribution is false', () => {
			const props = createTestProps({ showDashboardThreadDistribution: false });
			const jsx = (<AtAGlanceCard {...props} />);
			const element = shallow(jsx);
			const toggle = getSpecWrapper(element, 'at-a-glance-card-toggle');
			expect(toggle).toHaveProp('checked', false);
		});
	});
	describe('visibility', () => {
		it('should render card body visible if showDashboardThreadDistribution is true', () => {
			const props = createTestProps();
			const jsx = (<AtAGlanceCard {...props} />);
			const element = shallow(jsx);
			const body = getSpecWrapper(element, 'at-a-glance-card-body');
			expect(body).toHaveClassName('card-body');
		});
		it('should render card body hidden if showDashboardThreadDistribution is false', () => {
			const props = createTestProps({ showDashboardThreadDistribution: false });
			const jsx = (<AtAGlanceCard {...props} />);
			const element = shallow(jsx);
			const body = getSpecWrapper(element, 'at-a-glance-card-body');
			expect(body).toHaveClassName('d-none');
		});
	});
	describe('loading icon', () => {
		it('should be indicated in prop when threads are loading', () => {
			const props = createTestProps({ isLoadingIconVisible: true });
			const jsx = (<AtAGlanceCard {...props} />);
			const element = shallow(jsx);
			const myTurn = getSpecWrapper(element, 'at-a-glance-my-turn-widget');
			const theirTurn = getSpecWrapper(element, 'at-a-glance-their-turn-widget');
			const queued = getSpecWrapper(element, 'at-a-glance-queued-widget');
			expect(myTurn).toHaveProp('isLoadingIconVisible', true);
			expect(theirTurn).toHaveProp('isLoadingIconVisible', true);
			expect(queued).toHaveProp('isLoadingIconVisible', true);
		});
	});
});

describe('behavior', () => {
	describe('showDashboardThreadDistributionToggle', () => {
		it('should set card visibility on toggle change', () => {
			const showDashboardThreadDistributionToggle = jest.fn();
			const props = createTestProps({ showDashboardThreadDistributionToggle });
			const jsx = (<AtAGlanceCard {...props} />);
			const element = shallow(jsx);
			const toggle = getSpecWrapper(element, 'at-a-glance-card-toggle');
			toggle.simulate('change');
			expect(showDashboardThreadDistributionToggle).toHaveBeenCalledTimes(1);
		});
	});
});
