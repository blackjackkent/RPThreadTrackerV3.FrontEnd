// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../../../config/tests/helpers.unit';
import RandomThreadCard from '../RandomThreadCard';
// #endregion imports

// #region mocks
jest.mock('../RandomThreadDisplay', () => 'RandomThreadDisplay');
// #endregion mocks

const createTestProps = propOverrides => ({
	// common props
	generateRandomThread: jest.fn(),
	randomThread: {
		thread: { userTitle: 'Test Title' },
		status: {}
	},
	...propOverrides
});

describe('rendering', () => {
	it('should render valid snapshot', () => {
		const props = createTestProps();
		const jsx = (<RandomThreadCard {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should render display correctly', () => {
		const props = createTestProps();
		const jsx = (<RandomThreadCard {...props} />);
		const element = shallow(jsx);
		const display = getSpecWrapper(element, 'random-thread-display');
		expect(display).toExist();
		expect(display).toHaveProp({
			threadData: {
				thread: { userTitle: 'Test Title' },
				status: {}
			}
		});
	});
});

describe('behavior', () => {
	it('should trigger randomization on button click', () => {
		const props = createTestProps();
		const jsx = (<RandomThreadCard {...props} />);
		const element = shallow(jsx);
		const button = getSpecWrapper(element, 'random-thread-generator-button');
		button.simulate('click');
		expect(props.generateRandomThread).toHaveBeenCalledTimes(1);
	});
});
