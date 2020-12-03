import flattenArrayOfArrays from '../flattenArrayOfArrays';

describe('function', () => {
	it('should return array if no sub-arrays', () => {
		const initial = ['test', 'test2', 'test3', 'test2'];
		const filtered = flattenArrayOfArrays(initial);
		expect(filtered).toHaveLength(4);
	});
	it('should flatten array of arrays to single array', () => {
		const initial = [
			['test', 'test2'],
			['test3', 'test2']
		];
		const filtered = flattenArrayOfArrays(initial);
		expect(filtered).toHaveLength(4);
	});
});
