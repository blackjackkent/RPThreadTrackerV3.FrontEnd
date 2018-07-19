// #region imports
import PublicViewName from '../PublicViewName';
// #endregion imports

describe('data', () => {
	const column = PublicViewName();
	it('should be configured correctly', () => {
		expect(column.Header).toBe('View Name');
		expect(column.accessor).toBe('name');
	});
});
