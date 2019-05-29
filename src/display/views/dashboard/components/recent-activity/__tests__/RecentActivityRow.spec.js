// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '~/utility/helpers.unit';
import RecentActivityRow from '../RecentActivityRow';
// #endregion imports

const createTestProps = propOverrides => ({
	threadData: { status: { lastPostUrl: 'http://www.mylastpost.com', lastPosterUrlIdentifier: 'last-poster', lastPostDate: '1989-06-05 3:14PM' }, thread: { userTitle: 'Test Title' } },
	archiveThread: jest.fn(),
	openUntrackThreadModal: jest.fn(),
	markThreadQueued: jest.fn(),
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const element = shallow(<RecentActivityRow {...createTestProps()} />);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with null status', () => {
			const props = createTestProps({
				threadData: { status: null, thread: { userTitle: 'Test Title' } }
			});
			const element = shallow(<RecentActivityRow {...props} />);
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('openUntrackThreadModal', () => {
		it('should be called when untrack button is clicked', () => {
			const openUntrackThreadModal = jest.fn();
			const props = createTestProps({ openUntrackThreadModal });
			const element = shallow(<RecentActivityRow {...props} />);
			const button = getSpecWrapper(element, 'recent-activity-row-untrack-button');
			button.simulate('click');
			expect(openUntrackThreadModal).toHaveBeenCalledTimes(1);
			expect(openUntrackThreadModal).toHaveBeenLastCalledWith({ userTitle: 'Test Title' });
		});
	});
	describe('archiveThread', () => {
		it('should be called when archive button is clicked', () => {
			const archiveThread = jest.fn();
			const props = createTestProps({ archiveThread });
			const element = shallow(<RecentActivityRow {...props} />);
			const button = getSpecWrapper(element, 'recent-activity-row-archive-button');
			button.simulate('click');
			expect(archiveThread).toHaveBeenCalledTimes(1);
			expect(archiveThread).toHaveBeenLastCalledWith({ userTitle: 'Test Title' });
		});
	});
	describe('markThreadQueued', () => {
		it('should be called when mark queued button is clicked', () => {
			const markThreadQueued = jest.fn();
			const props = createTestProps({ markThreadQueued });
			const element = shallow(<RecentActivityRow {...props} />);
			const button = getSpecWrapper(element, 'recent-activity-row-queue-button');
			button.simulate('click');
			expect(markThreadQueued).toHaveBeenCalledTimes(1);
			expect(markThreadQueued).toHaveBeenLastCalledWith({ userTitle: 'Test Title' });
		});
	});
});
