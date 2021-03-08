// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import NoCharactersMessage from '../shared/NoCharactersMessage';
// #endregion imports

const createTestProps = (propOverrides) => ({
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = <NoCharactersMessage {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});
