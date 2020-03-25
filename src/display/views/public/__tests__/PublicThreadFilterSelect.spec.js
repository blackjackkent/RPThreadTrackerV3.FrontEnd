// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import PublicThreadFilterSelect from '../PublicThreadFilterSelect';
// #endregion imports

const createTestProps = (propOverrides) => ({
	publicThreadFilter: 'ALL',
	setPublicThreadFilter: jest.fn(),
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const element = shallow(<PublicThreadFilterSelect {...createTestProps()} />);
			expect(element).toMatchSnapshot();
		});
	});
});
describe('behavior', () => {
	describe('setPublicThreadFilter', () => {
		it('should be triggered on select change', () => {
			const setPublicThreadFilter = jest.fn();
			const event = {
				target: {
					value: 'My Turn'
				}
			};
			const props = createTestProps({
				setPublicThreadFilter
			});
			const jsx = <PublicThreadFilterSelect {...props} />;
			const element = shallow(jsx);
			const select = element.find('Input');
			select.simulate('change', event);
			expect(setPublicThreadFilter).toHaveBeenCalledTimes(1);
			expect(setPublicThreadFilter).toHaveBeenLastCalledWith('My Turn');
		});
	});
});
