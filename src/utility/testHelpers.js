import { shallow, mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
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

export const mountWithState = (component, state) => {
	const store = createMockStore(state);
	return mount(<Provider store={store}>{component}</Provider>);
};
