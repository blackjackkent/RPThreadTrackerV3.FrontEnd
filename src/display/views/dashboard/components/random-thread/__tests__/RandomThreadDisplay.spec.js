// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../../utility/testHelpers';
import RandomThreadDisplay from '../RandomThreadDisplay';
// #endregion imports

const getValidProps = () => ({ thread: { userTitle: 'Test Title' }, status: { LastPostUrl: 'testurl', LastPosterUrlIdentifier: 'blackjackkent' } });
const getNullStatusProps = () => ({ thread: { userTitle: 'Test Title' }, status: null });
const getNullThreadProps = () => ({ thread: null });

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
	describe('when thread null', () => {
		it('should display paragraph', () => {
			const element = shallow(<RandomThreadDisplay threadData={getNullThreadProps()} />);
			const wrapper = getSpecWrapper(element, 'random-thread-result');
			expect(wrapper).toExist();
			expect(wrapper.find('p')).toHaveText('Pick a random thread to respond to!');
		});
	});
	describe('when no status', () => {
		it('should render display container', () => {
			const element = shallow(<RandomThreadDisplay threadData={getNullStatusProps()} />);
			const wrapper = getSpecWrapper(element, 'random-thread-result');
			expect(wrapper).toExist();
		});
		it('should display thread title', () => {
			const element = shallow(<RandomThreadDisplay threadData={getNullStatusProps()} />);
			const paragraph = getSpecWrapper(element, 'random-thread-title');
			expect(paragraph).toHaveText('Test Title');
		});
		it('should display awaiting starter', () => {
			const element = shallow(<RandomThreadDisplay threadData={getNullStatusProps()} />);
			const subtitle = getSpecWrapper(element, 'random-thread-subtitle');
			expect(subtitle).toHaveText('Awaiting Starter');
		});
	});
	describe('when status', () => {
		it('should render display container', () => {
			const element = shallow(<RandomThreadDisplay threadData={getValidProps()} />);
			const wrapper = getSpecWrapper(element, 'random-thread-result');
			expect(wrapper).toExist();
		});
		it('should display thread title', () => {
			const element = shallow(<RandomThreadDisplay threadData={getValidProps()} />);
			const paragraph = getSpecWrapper(element, 'random-thread-title');
			expect(paragraph).toIncludeText('Test Title');
			expect(paragraph.find('a')).toHaveProp({ href: 'testurl' });
			expect(paragraph.find('i')).toHaveClassName('fa-external-link-alt');
		});
		it('should display thread subtitle', () => {
			const element = shallow(<RandomThreadDisplay threadData={getValidProps()} />);
			const subtitle = getSpecWrapper(element, 'random-thread-subtitle');
			expect(subtitle).toIncludeText('Last Post by');
			expect(subtitle).toIncludeText('blackjackkent');
			expect(subtitle.find('a')).toHaveProp({ href: 'testurl' });
		});
	});
});
