// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import NoRecentActivityMessage from '../NoRecentActivityMessage';
// #endregion imports

const createTestProps = (propOverrides) => ({
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = <NoRecentActivityMessage {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});
