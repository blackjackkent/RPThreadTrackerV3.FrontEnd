import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';

export const DATA_SPEC_ATTRIBUTE_NAME = 'data-spec';

export const getSpecWrapper = (componentWrapper, specName) => {
	const specWrappers = componentWrapper.find(`[${DATA_SPEC_ATTRIBUTE_NAME}="${specName}"]`);
	return specWrappers;
};

export const shallowWithState = (component, state) => {
	const store = createMockStore(state);
	const context = {
		store
	};
	return shallow(component, { context });
};

export const initMockDateNow = () => {
	const DATE_TO_USE = new Date('June 5, 1989 03:24:00');
	const MockDate = Date;
	global.Date = jest.fn(() => DATE_TO_USE);
	global.Date.UTC = MockDate.UTC;
	global.Date.parse = MockDate.parse;
	global.Date.now = MockDate.now;
	return DATE_TO_USE;
};
