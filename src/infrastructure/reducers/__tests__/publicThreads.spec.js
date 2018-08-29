import publicThreads from '../publicThreads';
import * as actions from '../../actions';

const defaultState = {
	view: {},
	threads: []
};

describe('action handling', () => {
	it('should set initial state', () => {
		const result = publicThreads(undefined, {});
		expect(result).toEqual(defaultState);
	});
	it('should handle FETCH_PUBLIC_THREADS', () => {
		const action = {
			type: actions.FETCH_PUBLIC_THREADS,
			data: 'test-slug'
		};
		const result = publicThreads({}, action);
		expect(result).toEqual({ view: { slug: 'test-slug' }, threads: [] });
	});
	it('should handle FETCHED_PUBLIC_THREADS_FAILURE', () => {
		const action = {
			type: actions.FETCHED_PUBLIC_THREADS_FAILURE
		};
		const result = publicThreads({}, action);
		expect(result).toEqual(defaultState);
	});
	it('should handle FETCHED_PUBLIC_THREADS_SUCCESS', () => {
		const action = {
			type: actions.FETCHED_PUBLIC_THREADS_SUCCESS,
			data: { threads: [{}, {}, {}], view: { slug: 'test-slug', id: 5 } }
		};
		const result = publicThreads(defaultState, action);
		expect(result).toEqual(action.data);
	});
});
