import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../../utility/testHelpers';
import RandomThreadCard from '../RandomThreadCard';

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
		const jsx = (<RandomThreadCard {...createTestProps() } />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should render component header', () => {
		const props = createTestProps();
		const jsx = (<RandomThreadCard {...props} />);
		const element = shallow(jsx);
		const header = getSpecWrapper(element, 'random-thread-generator-header');
		expect(header).toExist();
	});
	it('should render correct card icon', () => {
		const props = createTestProps();
		const jsx = (<RandomThreadCard {...props} />);
		const element = shallow(jsx);
		const icon = getSpecWrapper(element, 'random-thread-generator-icon');
		expect(icon).toExist();
		expect(icon).toHaveClassName('fa-random');
	});
	it('should render button correctly', () => {
		const props = createTestProps();
		const jsx = (<RandomThreadCard {...props} />);
		const element = shallow(jsx);
		const button = getSpecWrapper(element, 'random-thread-generator-button');
		expect(button).toExist();
		expect(button).toHaveText('Generate');
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
		expect(props.generateRandomThread).toHaveBeenCalledWith();
	});
});
