import * as actions from '../bulkUntrackThreadsModal';

describe('closeBulkUntrackThreadsModal', () => {
	it('should create action with type', () => {
		const action = actions.closeBulkUntrackThreadsModal();
		expect(action.type).toBe('CLOSE_BULK_UNTRACK_THREADS_MODAL');
	});
});
describe('openBulkUntrackThreadsModal', () => {
	it('should create action with type and data', () => {
		const data = [{}, {}, {}];
		const action = actions.openBulkUntrackThreadsModal(data);
		expect(action.type).toBe('OPEN_BULK_UNTRACK_THREADS_MODAL');
		expect(action.data).toBe(data);
	});
});
