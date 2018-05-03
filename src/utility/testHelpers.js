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
