import getValuesFromMultiSelect from '../getValuesFromMultiSelect';

describe('function', () => {
	it('should return empty array if select is null', () => {
		const result = getValuesFromMultiSelect(null);
		expect(result).toBeTruthy();
		expect(result).toHaveLength(0);
	});
	it('should return empty array if select options is null', () => {
		const result = getValuesFromMultiSelect({
			options: null
		});
		expect(result).toBeTruthy();
		expect(result).toHaveLength(0);
	});
	it('should return empty array if select options is empty', () => {
		const result = getValuesFromMultiSelect({
			options: []
		});
		expect(result).toBeTruthy();
		expect(result).toHaveLength(0);
	});
	it('should return selected items with text if no value prop', () => {
		const result = getValuesFromMultiSelect({
			options: [
				{
					text: '1text',
					selected: true
				},
				{
					text: '2text'
				},
				{
					text: '3text',
					selected: true
				}
			]
		});
		expect(result).toBeTruthy();
		expect(result).toHaveLength(2);
		expect(result).toContain('1text');
		expect(result).toContain('3text');
	});
	it('should return selected items with value prop if present', () => {
		const result = getValuesFromMultiSelect({
			options: [
				{
					text: '1text',
					value: 1,
					selected: true
				},
				{
					text: '2text',
					value: 2
				},
				{
					text: '3text',
					value: 3,
					selected: true
				}
			]
		});
		expect(result).toBeTruthy();
		expect(result).toHaveLength(2);
		expect(result).toContain(1);
		expect(result).toContain(3);
	});
});
