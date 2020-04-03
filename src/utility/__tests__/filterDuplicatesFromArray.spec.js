import filterDuplicatesFromArray from '../filterDuplicatesFromArray';

describe('function', () => {
	it('should filter duplicate primitives', () => {
		const initial = ['test', 'test2', 'test3', 'test2'];
		const filtered = filterDuplicatesFromArray(initial);
		expect(filtered).toHaveLength(3);
		expect(filtered).toContain('test');
		expect(filtered).toContain('test2');
		expect(filtered).toContain('test3');
	});
	it('should filter duplicate objects without key', () => {
		const initial = [
			{
				prop1: 'test string',
				prop2: 25
			},
			{
				prop1: 'test string',
				prop2: 25
			},
			{
				prop1: 'another test string',
				prop2: 25
			}
		];
		const filtered = filterDuplicatesFromArray(initial);
		expect(filtered).toHaveLength(2);
	});
	it('should filter duplicate objects with key', () => {
		const initial = [
			{
				prop1: 'test string',
				prop2: 25
			},
			{
				prop1: 'test string',
				prop2: 25
			},
			{
				prop1: 'another test string',
				prop2: 25
			}
		];
		const filtered = filterDuplicatesFromArray(initial, 'prop2');
		expect(filtered).toHaveLength(1);
	});
});
