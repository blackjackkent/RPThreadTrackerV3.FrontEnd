// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import ThreadTableTagDisplay from '../ThreadTableTagDisplay';
// #endregion imports

const createTestProps = propOverrides => ({
	tags: [{ threadTagId: 1, tagText: 'tag1' }, { threadTagId: 2, tagText: 'tag2' }],
	...propOverrides
});
describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = (<ThreadTableTagDisplay {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with no tags', () => {
			const props = createTestProps({ tags: [] });
			const jsx = (<ThreadTableTagDisplay {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});
