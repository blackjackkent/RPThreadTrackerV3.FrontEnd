import * as actions from '../untrackThreadModal';

describe('closeUntrackThreadModal', () => {
	it('should create action with type', () => {
		const action = actions.closeUntrackThreadModal();
		expect(action.type).toBe('CLOSE_UNTRACK_THREAD_MODAL');
	});
});
describe('openUntrackThreadModal', () => {
	it('should create action with type and data', () => {
		const data = {
			threadId: 1
		};
		const action = actions.openUntrackThreadModal(data);
		expect(action.type).toBe('OPEN_UNTRACK_THREAD_MODAL');
		expect(action.data).toBe(data);
	});
});
