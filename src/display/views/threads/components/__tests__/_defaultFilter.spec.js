import defaultFilter from '../_defaultFilter';

describe('behavior', () => {
	it('should return true when filtering by pivot ID and row does not have property', () => {
		const filter = {
			pivotId: 'filterProperty',
			value: 'test'
		};
		const row = {
			anotherProperty: 1
		};
		const result = defaultFilter(filter, row);
		expect(result).toBe(true);
	});
	it('should return false when filtering by pivot ID and row property does not contain search string', () => {
		const filter = {
			pivotId: 'filterProperty',
			value: 'test'
		};
		const row = {
			filterProperty: 'tset'
		};
		const result = defaultFilter(filter, row);
		expect(result).toBe(false);
	});
	it('should return true when filtering by pivot ID and row contains search string (case-insensitive)', () => {
		const filter = {
			pivotId: 'filterProperty',
			value: 'test'
		};
		const row = {
			filterProperty: 'Test2'
		};
		const result = defaultFilter(filter, row);
		expect(result).toBe(true);
	});
	it('should return true when filtering by ID and row does not have property', () => {
		const filter = {
			id: 'filterProperty',
			value: 'test'
		};
		const row = {
			anotherProperty: 1
		};
		const result = defaultFilter(filter, row);
		expect(result).toBe(true);
	});
	it('should return false when filtering by ID and row property does not contain search string', () => {
		const filter = {
			id: 'filterProperty',
			value: 'test'
		};
		const row = {
			filterProperty: 'tset'
		};
		const result = defaultFilter(filter, row);
		expect(result).toBe(false);
	});
	it('should return true when filtering by ID and row contains search string (case-insensitive)', () => {
		const filter = {
			id: 'filterProperty',
			value: 'test'
		};
		const row = {
			filterProperty: 'Test2'
		};
		const result = defaultFilter(filter, row);
		expect(result).toBe(true);
	});
});
