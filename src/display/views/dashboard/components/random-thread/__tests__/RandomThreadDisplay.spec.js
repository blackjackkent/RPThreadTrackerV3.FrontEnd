// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import RandomThreadDisplay from '../RandomThreadDisplay';
// #endregion imports

const getValidProps = () => ({
	thread: {
		userTitle: 'Test Title'
	},
	status: {
		lastPostUrl: 'testurl',
		lastPosterUrlIdentifier: 'demouser'
	}
});
const getNullStatusProps = () => ({
	thread: {
		userTitle: 'Test Title'
	},
	status: null
});
const getNullThreadProps = () => ({
	thread: null
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot when thread is null', () => {
			const element = shallow(<RandomThreadDisplay threadData={getNullThreadProps()} />);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot without status', () => {
			const element = shallow(<RandomThreadDisplay threadData={getNullStatusProps()} />);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with status', () => {
			const element = shallow(<RandomThreadDisplay threadData={getValidProps()} />);
			expect(element).toMatchSnapshot();
		});
	});
});
