// #region imports
import React from 'react';
import { shallow, mount } from 'enzyme';
import CheckboxTable from '../CheckboxTable';
// #endregion imports

const createTestProps = (propOverrides) => ({
	columns: [
		{
			key: 'column1'
		},
		{
			key: 'column2'
		}
	],
	data: [
		{
			_id: 1,
			testProp: 'test1'
		},
		{
			_id: 2,
			testProp: 'test2'
		},
		{
			_id: 3,
			testProp: 'test3'
		}
	],
	defaultFilterMethod: jest.fn(),
	defaultSorted: [
		{
			id: 'status.lastPostDate',
			desc: true
		}
	],
	getTdProps: () => ({}),
	noDataText: 'No Data Text',
	onSelectionChanged: jest.fn(),
	SubComponent: () => 'Subcomponent',
	defaultPageSize: 10,
	onPageSizeChange: jest.fn(),
	...propOverrides
});
describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = <CheckboxTable {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});
describe('behavior', () => {
	describe('toggleSelection', () => {
		it('should trigger onSelectionChanged when item is added', () => {
			const onSelectionChanged = jest.fn();
			const props = createTestProps({
				onSelectionChanged
			});
			const jsx = <CheckboxTable {...props} />;
			const element = shallow(jsx);
			element.instance().toggleSelection('select-1', null, {
				_id: 1,
				testProp: 'test1'
			});
			element.instance().toggleSelection('select-2', null, {
				_id: 2,
				testProp: 'test2'
			});
			expect(onSelectionChanged).toHaveBeenCalledTimes(2);
			expect(onSelectionChanged).toHaveBeenLastCalledWith([
				{
					_id: 1,
					testProp: 'test1'
				},
				{
					_id: 2,
					testProp: 'test2'
				}
			]);
		});
		it('should trigger onSelectionChanged when item is removed', () => {
			const onSelectionChanged = jest.fn();
			const props = createTestProps({
				onSelectionChanged
			});
			const jsx = <CheckboxTable {...props} />;
			const element = shallow(jsx);
			element.instance().toggleSelection('select-1', null, {
				_id: 1,
				testProp: 'test1'
			});
			element.instance().toggleSelection('select-2', null, {
				_id: 2,
				testProp: 'test2'
			});
			element.instance().toggleSelection('select-1', null, {
				_id: 1,
				testProp: 'test1'
			});
			expect(onSelectionChanged).toHaveBeenCalledTimes(3);
			expect(onSelectionChanged).toHaveBeenLastCalledWith([
				{
					_id: 2,
					testProp: 'test2'
				}
			]);
		});
		it('should set select-all checkbox checked when selected items length equals row length', () => {
			const onSelectionChanged = jest.fn();
			const props = createTestProps({
				onSelectionChanged
			});
			const jsx = <CheckboxTable {...props} />;
			const element = shallow(jsx);
			element.instance().toggleSelection(1, null, {
				_id: 1,
				testProp: 'test1'
			});
			element.instance().toggleSelection(2, null, {
				_id: 2,
				testProp: 'test2'
			});
			element.instance().toggleSelection(3, null, {
				_id: 3,
				testProp: 'test3'
			});
			element.update();
			expect(element.find('RTSelectTable').props().selectAll).toBe(true);
		});
		it('should select item when row is clicked, forwarding to callbacks from props', () => {
			const onSelectionChanged = jest.fn();
			const originalOnClick = jest.fn();
			const props = createTestProps({
				onSelectionChanged,
				getTdProps: jest.fn(() => ({
					onClick: originalOnClick
				}))
			});
			const state = {};
			const rowInfo = { original: props.data[0] };
			const column = {};
			const instance = {};
			const event = {};
			const handleOriginal = jest.fn();
			const jsx = <CheckboxTable {...props} />;
			const element = shallow(jsx);
			const tdProps = element.instance().getTdProps(state, rowInfo, column, instance);
			tdProps.onClick(event, handleOriginal);
			expect(props.getTdProps).toBeCalledWith(state, rowInfo, column, instance);
			expect(originalOnClick).toBeCalledWith(event, handleOriginal);
			expect(onSelectionChanged).toHaveBeenCalledTimes(1);
			expect(onSelectionChanged).toHaveBeenLastCalledWith([{ _id: 1, testProp: 'test1' }]);
		});
		it('should color selected rows', () => {
			const props = createTestProps({});
			const rowInfo = { original: props.data[0] };
			const jsx = <CheckboxTable {...props} />;
			const element = shallow(jsx);
			const tdProps = element.instance().getTdProps({}, rowInfo, {}, {});
			tdProps.onClick({}, jest.fn());
			const trProps = element.instance().getTrProps({}, rowInfo);
			expect(typeof trProps.style.backgroundColor).toBe('string');
		});
		it('should not toggle selection when an expander cell is clicked', () => {
			const onSelectionChanged = jest.fn();
			const props = createTestProps({
				onSelectionChanged,
				getTdProps: jest.fn(() => ({
					onClick: jest.fn(),
				}))
			});
			const state = {};
			const rowInfo = { original: props.data[0] };
			const column = { Expander: {} };
			const instance = {};
			const event = {};
			const jsx = <CheckboxTable {...props} />;
			const element = shallow(jsx);
			const tdProps = element.instance().getTdProps(state, rowInfo, column, instance);
			tdProps.onClick(event, jest.fn());
			expect(onSelectionChanged).not.toHaveBeenCalled();
		});
		it('should set select-all checkbox checked when selected items length equals row length', () => {});
	});
	describe('toggleAll', () => {
		it('should set all items selected when selectAll is false', () => {
			const onSelectionChanged = jest.fn();
			const props = createTestProps({
				onSelectionChanged
			});
			const jsx = <CheckboxTable {...props} />;
			const element = mount(jsx);
			element.instance().toggleAll();
			element.update();
			expect(onSelectionChanged).toHaveBeenCalledTimes(1);
			expect(onSelectionChanged).toHaveBeenLastCalledWith([
				{
					_id: 3,
					testProp: 'test3'
				},
				{
					_id: 2,
					testProp: 'test2'
				},
				{
					_id: 1,
					testProp: 'test1'
				}
			]);
			expect(element.find('RTSelectTable').props().selectAll).toBe(true);
		});
		it('should set all items unselected when selectAll is true', () => {
			const onSelectionChanged = jest.fn();
			const props = createTestProps({
				onSelectionChanged
			});
			const jsx = <CheckboxTable {...props} />;
			const element = mount(jsx);
			element.instance().toggleAll();
			element.instance().toggleAll();
			element.update();
			expect(onSelectionChanged).toHaveBeenCalledTimes(2);
			expect(onSelectionChanged).toHaveBeenLastCalledWith([]);
			expect(element.find('RTSelectTable').props().selectAll).toBe(false);
		});
	});
	describe('isSelected', () => {
		it('should return true if item is selected', () => {
			const props = createTestProps();
			const jsx = <CheckboxTable {...props} />;
			const element = mount(jsx);
			element.instance().toggleSelection(1, null, {
				_id: 1,
				testProp: 'test1'
			});
			const isSelected = element.instance().isSelected(1);
			expect(isSelected).toBe(true);
		});
		it('should return false if item is not selected', () => {
			const props = createTestProps();
			const jsx = <CheckboxTable {...props} />;
			const element = mount(jsx);
			element.instance().toggleSelection(1, null, {
				_id: 1,
				testProp: 'test1'
			});
			const isSelected = element.instance().isSelected(2);
			expect(isSelected).toBe(false);
		});
	});
	describe('selection highlighting', () => {
		it('should not color unselected rows', () => {
			const props = createTestProps({});
			const rowInfo = {
				original: props.data[0]
			};
			const jsx = <CheckboxTable {...props} />;
			const element = shallow(jsx);
			const trProps = element.instance().getTrProps({}, rowInfo);
			expect(trProps.style).not.toBeDefined();
		});
		it('should color selected rows', () => {
			const props = createTestProps({});
			const rowInfo = {
				original: props.data[0]
			};
			const jsx = <CheckboxTable {...props} />;
			const element = shallow(jsx);
			element.instance().toggleSelection(1, null, {
				_id: 1,
				testProp: 'test1'
			});
			const trProps = element.instance().getTrProps({}, rowInfo);
			expect(trProps.style.backgroundColor).toBe('rgba(64, 140, 228, 0.5)');
		});
		it('should color selected rows with light theme', () => {
			const props = createTestProps({ useLightTheme: true });
			const rowInfo = {
				original: props.data[0]
			};
			const jsx = <CheckboxTable {...props} />;
			const element = shallow(jsx);
			element.instance().toggleSelection(1, null, {
				_id: 1,
				testProp: 'test1'
			});
			const trProps = element.instance().getTrProps({}, rowInfo);
			expect(trProps.style.backgroundColor).toBe('rgba(64, 140, 228, 0.3)');
		});
	});
	describe('clearSelection', () => {
		it('should clear all selected items', () => {
			const onSelectionChanged = jest.fn();
			const props = createTestProps({
				onSelectionChanged
			});
			const jsx = <CheckboxTable {...props} />;
			const element = shallow(jsx);
			element.instance().toggleSelection(1, null, {
				_id: 1,
				testProp: 'test1'
			});
			element.instance().toggleSelection(2, null, {
				_id: 2,
				testProp: 'test2'
			});
			element.instance().clearSelection();
			expect(onSelectionChanged).toHaveBeenCalledTimes(3);
			expect(onSelectionChanged).toHaveBeenLastCalledWith([]);
		});
	});
});
