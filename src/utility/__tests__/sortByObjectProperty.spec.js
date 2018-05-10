import sortByObjectProperty from '../sortByObjectProperty';

describe('function', () => {
	it('should return empty array if collection is null', () => {
		const result = sortByObjectProperty(null);
		expect(result).toBeTruthy();
		expect(result).toHaveLength(0);
	});
	it('should sort array by property', () => {
		const initial = [
			{
				sortProp: 'bat',
				otherProp: 'test'
			},
			{
				sortProp: 'cat',
				otherProp: 'test'
			},
			{
				sortProp: 'dog',
				otherProp: 'test'
			},
			{
				sortProp: 'bat',
				otherProp: 'test'
			},
			{
				sortProp: 'ant',
				otherProp: 'test'
			}
		];
		const result = sortByObjectProperty(initial, 'sortProp');
		expect(result[0].sortProp).toEqual('ant');
		expect(result[1].sortProp).toEqual('bat');
		expect(result[2].sortProp).toEqual('bat');
		expect(result[3].sortProp).toEqual('cat');
		expect(result[4].sortProp).toEqual('dog');
	});
});
