// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../config/tests/helpers.unit';
import UpsertPublicViewForm from '../UpsertPublicViewForm';
// #endregion imports

const createTestProps = propOverrides => ({
	viewToEdit: {},
	characters: [{
		characterId: 1,
		characterName: 'Character 1',
		urlIdentifier: 'character-1'
	}, {
		characterId: 2,
		characterName: 'Character 2',
		urlIdentifier: 'character-2'
	}, {
		characterId: 3,
		characterName: 'Character 3',
		urlIdentifier: 'character-3'
	}, {
		characterId: 4,
		characterName: 'Character 4',
		urlIdentifier: 'character-4'
	}, {
		characterId: 5,
		urlIdentifier: 'character-5'
	}],
	tags: ['tag1', 'tag2', 'tag3', 'tag4'],
	columns: {
		COLUMN1: { key: 'column1', name: 'Column 1' },
		COLUMN2: { key: 'column2', name: 'Column 2' },
		COLUMN3: { key: 'column3', name: 'Column 3' }
	},
	handleInputChange: jest.fn(),
	tooltipDisplayData: {},
	showTooltip: jest.fn(),
	hideTooltip: jest.fn(),
	...propOverrides
});

const createTestPropsWithView = propOverrides => createTestProps({
	viewToEdit: {
		name: 'Test View',
		slug: 'test-slug',
		columns: ['column1', 'column2'],
		sortKey: 'column1',
		sortDescending: true,
		turnFilter: {},
		characterIds: [1, 2, 3],
		tags: ['tag1', 'tag2']
	},
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with view', () => {
			const props = createTestPropsWithView();
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should validate the view name field', () => {
			const props = createTestProps();
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'view-name-field');
			expect(field.props().validate.maxLength).toHaveProperty('value', 256);
			expect(field.props().validate.required).toHaveProperty('value', true);
		});
	});
	describe('content', () => {
		it('should populate existing view name', () => {
			const props = createTestPropsWithView();
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'view-name-field');
			expect(field).toHaveProp('value', 'Test View');
		});
		it('should populate existing view slug', () => {
			const props = createTestPropsWithView();
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'view-slug-field');
			expect(field).toHaveProp('value', 'test-slug');
		});
		it('should populate view columns field options', () => {
			const props = createTestProps();
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'view-columns-field');
			expect(field.children()).toHaveLength(3);
		});
		it('should populate view columns field value', () => {
			const props = createTestPropsWithView();
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'view-columns-field');
			expect(field.props().value).toHaveLength(2);
			expect(field.props().value).toContain('column1');
			expect(field.props().value).toContain('column2');
		});
		it('should populate sort key field options plus unselected', () => {
			const props = createTestProps();
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'sort-key-field');
			expect(field.children()).toHaveLength(4);
		});
		it('should populate sort key field value', () => {
			const props = createTestPropsWithView();
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'sort-key-field');
			expect(field.props().value).toEqual('column1');
		});
		it('should populate sort descending field value', () => {
			const props = createTestPropsWithView({ sortDescending: true });
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'sort-descending-field');
			expect(field.props().value).toEqual(true);
		});
		it('should leave turn filter fields unchecked if turn filter is undefined', () => {
			const props = createTestPropsWithView();
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const myTurnField = getSpecWrapper(element, 'include-my-turn-field');
			const theirTurnField = getSpecWrapper(element, 'include-their-turn-field');
			const queuedField = getSpecWrapper(element, 'include-queued-field');
			const archivedField = getSpecWrapper(element, 'include-archived-field');
			expect(myTurnField.props().checked).toBeFalsy();
			expect(theirTurnField.props().checked).toBeFalsy();
			expect(queuedField.props().checked).toBeFalsy();
			expect(archivedField.props().checked).toBeFalsy();
		});
		it('should populate include my turn checkbox', () => {
			const props = createTestPropsWithView();
			props.viewToEdit.turnFilter = {
				includeMyTurn: true
			};
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const myTurnField = getSpecWrapper(element, 'include-my-turn-field');
			const theirTurnField = getSpecWrapper(element, 'include-their-turn-field');
			const queuedField = getSpecWrapper(element, 'include-queued-field');
			const archivedField = getSpecWrapper(element, 'include-archived-field');
			expect(myTurnField.props().checked).toBeTruthy();
			expect(theirTurnField.props().checked).toBeFalsy();
			expect(queuedField.props().checked).toBeFalsy();
			expect(archivedField.props().checked).toBeFalsy();
		}); it('should populate include their turn checkbox', () => {
			const props = createTestPropsWithView();
			props.viewToEdit.turnFilter = {
				includeTheirTurn: true
			};
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const myTurnField = getSpecWrapper(element, 'include-my-turn-field');
			const theirTurnField = getSpecWrapper(element, 'include-their-turn-field');
			const queuedField = getSpecWrapper(element, 'include-queued-field');
			const archivedField = getSpecWrapper(element, 'include-archived-field');
			expect(myTurnField.props().checked).toBeFalsy();
			expect(theirTurnField.props().checked).toBeTruthy();
			expect(queuedField.props().checked).toBeFalsy();
			expect(archivedField.props().checked).toBeFalsy();
		});
		it('should populate include queued checkbox', () => {
			const props = createTestPropsWithView();
			props.viewToEdit.turnFilter = {
				includeQueued: true
			};
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const myTurnField = getSpecWrapper(element, 'include-my-turn-field');
			const theirTurnField = getSpecWrapper(element, 'include-their-turn-field');
			const queuedField = getSpecWrapper(element, 'include-queued-field');
			const archivedField = getSpecWrapper(element, 'include-archived-field');
			expect(myTurnField.props().checked).toBeFalsy();
			expect(theirTurnField.props().checked).toBeFalsy();
			expect(queuedField.props().checked).toBeTruthy();
			expect(archivedField.props().checked).toBeFalsy();
		});
		it('should populate include archived checkbox', () => {
			const props = createTestPropsWithView();
			props.viewToEdit.turnFilter = {
				includeArchived: true
			};
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const myTurnField = getSpecWrapper(element, 'include-my-turn-field');
			const theirTurnField = getSpecWrapper(element, 'include-their-turn-field');
			const queuedField = getSpecWrapper(element, 'include-queued-field');
			const archivedField = getSpecWrapper(element, 'include-archived-field');
			expect(myTurnField.props().checked).toBeFalsy();
			expect(theirTurnField.props().checked).toBeFalsy();
			expect(queuedField.props().checked).toBeFalsy();
			expect(archivedField.props().checked).toBeTruthy();
		});
		it('should populate view characters field options', () => {
			const props = createTestProps();
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'view-characters-field');
			expect(field.children()).toHaveLength(5);
		});
		it('should populate view characters field value', () => {
			const props = createTestPropsWithView();
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'view-characters-field');
			expect(field.props().value).toHaveLength(3);
			expect(field.props().value).toContain(1);
			expect(field.props().value).toContain(2);
			expect(field.props().value).toContain(3);
		});
		it('should populate view tags field options', () => {
			const props = createTestProps();
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'view-tags-field');
			expect(field.children()).toHaveLength(4);
		});
		it('should populate view tags field value', () => {
			const props = createTestPropsWithView();
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'view-tags-field');
			expect(field.props().value).toHaveLength(2);
			expect(field.props().value).toContain('tag1');
			expect(field.props().value).toContain('tag2');
		});
	});
	describe('tooltips', () => {
		it('should be rendered on view slug field when visible', () => {
			const props = createTestProps({ tooltipDisplayData: { slug: true } });
			const props2 = createTestProps();
			const jsx = (<UpsertPublicViewForm {...props} />);
			const jsx2 = (<UpsertPublicViewForm {...props2} />);
			const element = shallow(jsx);
			const element2 = shallow(jsx2);
			const field = getSpecWrapper(element, 'view-slug-tooltip');
			const field2 = getSpecWrapper(element2, 'view-slug-tooltip');
			expect(field.props().visible).toBeTruthy();
			expect(field2.props().visible).toBeFalsy();
		});
		it('should be rendered on view columns field when visible', () => {
			const props = createTestProps({ tooltipDisplayData: { columns: true } });
			const props2 = createTestProps();
			const jsx = (<UpsertPublicViewForm {...props} />);
			const jsx2 = (<UpsertPublicViewForm {...props2} />);
			const element = shallow(jsx);
			const element2 = shallow(jsx2);
			const field = getSpecWrapper(element, 'view-columns-tooltip');
			const field2 = getSpecWrapper(element2, 'view-columns-tooltip');
			expect(field.props().visible).toBeTruthy();
			expect(field2.props().visible).toBeFalsy();
		});
		it('should be rendered on view characters field when visible', () => {
			const props = createTestProps({ tooltipDisplayData: { characterIds: true } });
			const props2 = createTestProps();
			const jsx = (<UpsertPublicViewForm {...props} />);
			const jsx2 = (<UpsertPublicViewForm {...props2} />);
			const element = shallow(jsx);
			const element2 = shallow(jsx2);
			const field = getSpecWrapper(element, 'view-characters-tooltip');
			const field2 = getSpecWrapper(element2, 'view-characters-tooltip');
			expect(field.props().visible).toBeTruthy();
			expect(field2.props().visible).toBeFalsy();
		});
		it('should be rendered on view tags field when visible', () => {
			const props = createTestProps({ tooltipDisplayData: { tags: true } });
			const props2 = createTestProps();
			const jsx = (<UpsertPublicViewForm {...props} />);
			const jsx2 = (<UpsertPublicViewForm {...props2} />);
			const element = shallow(jsx);
			const element2 = shallow(jsx2);
			const field = getSpecWrapper(element, 'view-tags-tooltip');
			const field2 = getSpecWrapper(element2, 'view-tags-tooltip');
			expect(field.props().visible).toBeTruthy();
			expect(field2.props().visible).toBeFalsy();
		});
	});
});

describe('behavior', () => {
	describe('validation', () => {
		it('should validate view slug field', () => {
			const props = createTestProps();
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'view-slug-field');
			expect(field.props().validate.required).toHaveProperty('value', true);
			expect(field.props().validate.pattern).toHaveProperty('value', /^[A-z\d-]+$/);
		});
		it('should validate view columns field', () => {
			const props = createTestProps();
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'view-columns-field');
			expect(field.props().validate.required).toHaveProperty('value', true);
		});
		it('should validate sort key field', () => {
			const props = createTestProps();
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'sort-key-field');
			expect(field.props().validate.required).toHaveProperty('value', true);
		});
		it('should validate view characters field', () => {
			const props = createTestProps();
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'view-characters-field');
			expect(field.props().validate.required).toHaveProperty('value', true);
		});
	});
	describe('handleInputChange', () => {
		it('should be called when view name changes', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({ handleInputChange });
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'view-name-field');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
		it('should be called when view slug changes', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({ handleInputChange });
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'view-slug-field');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
		it('should be called when view columns change', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({ handleInputChange });
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'view-columns-field');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
		it('should be called when sort key changes', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({ handleInputChange });
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'sort-key-field');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
		it('should be called when sort descending changes', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({ handleInputChange });
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'sort-descending-field');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
		it('should be called when include my turn changes', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({ handleInputChange });
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'include-my-turn-field');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
		it('should be called when include their turn changes', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({ handleInputChange });
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'include-their-turn-field');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
		it('should be called when include queued changes', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({ handleInputChange });
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'include-queued-field');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
		it('should be called when include archived changes', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({ handleInputChange });
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'include-archived-field');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
		it('should be called when view characters change', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({ handleInputChange });
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'view-characters-field');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
		it('should be called when view tags change', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({ handleInputChange });
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'view-tags-field');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
	});
	describe('showTooltip', () => {
		it('should be called when view slug field is focused', () => {
			const showTooltip = jest.fn();
			const props = createTestProps({ showTooltip });
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'view-slug-field');
			field.simulate('focus');
			expect(showTooltip).toHaveBeenCalledTimes(1);
		});
		it('should be called when view columns field is focused', () => {
			const showTooltip = jest.fn();
			const props = createTestProps({ showTooltip });
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'view-columns-field');
			field.simulate('focus');
			expect(showTooltip).toHaveBeenCalledTimes(1);
		});
		it('should be called when view characters field is focused', () => {
			const showTooltip = jest.fn();
			const props = createTestProps({ showTooltip });
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'view-characters-field');
			field.simulate('focus');
			expect(showTooltip).toHaveBeenCalledTimes(1);
		});
		it('should be called when view tags field is focused', () => {
			const showTooltip = jest.fn();
			const props = createTestProps({ showTooltip });
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'view-tags-field');
			field.simulate('focus');
			expect(showTooltip).toHaveBeenCalledTimes(1);
		});
	});
	describe('hideTooltip', () => {
		it('should be called when view slug field is blurred', () => {
			const hideTooltip = jest.fn();
			const props = createTestProps({ hideTooltip });
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'view-slug-field');
			field.simulate('blur');
			expect(hideTooltip).toHaveBeenCalledTimes(1);
		});
		it('should be called when view columns field is blurred', () => {
			const hideTooltip = jest.fn();
			const props = createTestProps({ hideTooltip });
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'view-columns-field');
			field.simulate('blur');
			expect(hideTooltip).toHaveBeenCalledTimes(1);
		});
		it('should be called when view characters field is blurred', () => {
			const hideTooltip = jest.fn();
			const props = createTestProps({ hideTooltip });
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'view-characters-field');
			field.simulate('blur');
			expect(hideTooltip).toHaveBeenCalledTimes(1);
		});
		it('should be called when view tags field is blurred', () => {
			const hideTooltip = jest.fn();
			const props = createTestProps({ hideTooltip });
			const jsx = (<UpsertPublicViewForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'view-tags-field');
			field.simulate('blur');
			expect(hideTooltip).toHaveBeenCalledTimes(1);
		});
	});
});
