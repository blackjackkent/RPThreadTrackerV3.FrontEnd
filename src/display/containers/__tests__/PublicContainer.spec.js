// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import PublicContainer from '../PublicContainer';
// #endregion imports

// #region mocks
jest.mock('../../views/public/Public', () => () => 'Public');
jest.mock('../../../infrastructure/withPageViewTracker', () => (WrappedComponent) => WrappedComponent);
// #endregion mocks

const createTestProps = (propOverrides) => ({
	match: {
		params: {
			slug: 'my-slug'
		}
	},
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = <PublicContainer {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});
