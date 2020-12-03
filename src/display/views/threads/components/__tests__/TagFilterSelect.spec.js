// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import TagFilterSelect from '../TagFilterSelect';
// #endregion imports

const createTestProps = (propOverrides) => ({
	tags: [
		{
			threadTagId: 1,
			tagText: 'tag1'
		},
		{
			threadTagId: 2,
			tagText: 'tag2'
		}
	],
	setFilteredTag: jest.fn(),
	...propOverrides
});
describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = <TagFilterSelect {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with tag selected', () => {
			const props = createTestProps({
				filteredTag: 'tag1'
			});
			const jsx = <TagFilterSelect {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
	describe('content', () => {
		it('should render option for each tag', () => {
			const props = createTestProps();
			const jsx = <TagFilterSelect {...props} />;
			const element = shallow(jsx);
			const options = element.find('option');
			expect(options).toHaveLength(3);
		});
	});
});

describe('behavior', () => {
	describe('setFilteredTag', () => {
		it('should be called with selected value', () => {
			const setFilteredTag = jest.fn();
			const event = {
				target: {
					value: 'tag3'
				}
			};
			const props = createTestProps({
				setFilteredTag
			});
			const jsx = <TagFilterSelect {...props} />;
			const element = shallow(jsx);
			const select = element.find('Input');
			select.simulate('change', event);
			expect(setFilteredTag).toHaveBeenCalledTimes(1);
			expect(setFilteredTag).toHaveBeenLastCalledWith('tag3');
		});
	});
});
