// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '~/testhelpers/helpers.unit';
import RandomThreadCard from '../RandomThreadCard';
// #endregion imports

// #region mocks
jest.mock('../RandomThreadDisplay', () => 'RandomThreadDisplay');
// #endregion mocks

const createTestProps = (propOverrides) => ({
	// common props
	generateRandomThread: jest.fn(),
	randomThread: {
		thread: {
			userTitle: 'Test Title'
		},
		status: {}
	},
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = <RandomThreadCard {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('generateRandomThread', () => {
		it('should be triggered on button click', () => {
			const generateRandomThread = jest.fn();
			const props = createTestProps({
				generateRandomThread
			});
			const jsx = <RandomThreadCard {...props} />;
			const element = shallow(jsx);
			const button = getSpecWrapper(element, 'random-thread-generator-button');
			button.simulate('click');
			expect(generateRandomThread).toHaveBeenCalledTimes(1);
		});
	});
});
