// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import LoadingIndicator from '../LoadingIndicator';
// #endregion imports

const createTestProps = (propOverrides) => ({
	...propOverrides
});
describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = <LoadingIndicator {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with passed props', () => {
			const props = createTestProps({
				style: {
					width: 60,
					height: 70,
					lineHeight: 10
				},
				className: 'my-test-class'
			});
			const jsx = <LoadingIndicator {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});
