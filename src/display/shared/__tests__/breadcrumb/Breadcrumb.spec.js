// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumb from '../../breadcrumb/Breadcrumb';
// #endregion imports

jest.mock('../../breadcrumb/Breadcrumbs', () => () => 'Breadcrumbs');
jest.mock('../../LoadingIndicator', () => () => 'LoadingIndicator');

const createTestProps = propOverrides => ({
	isLoadingIconVisible: false,
	...propOverrides
});
describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = (<Breadcrumb {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
	describe('props', () => {
		it('should be passed to child', () => {
			const props = createTestProps({ 'data-random': 'random' });
			const jsx = (<Breadcrumb {...props} />);
			const element = shallow(jsx);
			const route = element.find('Route');
			expect(route).toHaveProp('data-random', 'random');
		});
	});
});
