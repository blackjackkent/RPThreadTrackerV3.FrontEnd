import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';

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

export const initExportWindowValues = () => {
	Object.defineProperty(global.navigator, 'msSaveBlob', { value: undefined, writable: true });
	Object.defineProperty(global.navigator, 'webkitSaveBlob', { value: undefined, writable: true });
	Object.defineProperty(global.navigator, 'mozSaveBlob', { value: undefined, writable: true });
	Object.defineProperty(global.navigator, 'saveBlob', { value: undefined, writable: true });
	global.window.URL = null;
	global.window.webkitURL = null;
	global.window.mozURL = null;
	global.window.msURL = null;
	global.document.createElement = jest.fn();
};

export class SagaTestWrapper {
	constructor(sagaGenerator) {
		this.saga = expectSaga(sagaGenerator);
	}

	setup(matcher, result) {
		this.saga.provide([[matcher, result]]);
	}

	setupAll(setupArray) {
		const data = [];
		for (let i = 0; i < setupArray.length; i++) {
			data.push([setupArray[i].matcher, setupArray[i].result]);
		}
		this.saga.provide(data);
	}

	setupError(matcher, errorMessage, response) {
		const error = new Error(errorMessage);
		if (response) {
			error.response = response;
		}
		this.saga.provide([[matcher, throwError(error)]]);
	}

	setupFn(fn) {
		this.saga.provide({
			call(effect, next) { return fn(effect, next); }
		});
	}

	expectPut(action) {
		this.saga.put(action);
	}

	expectCall(fn) {
		this.saga.call.fn(fn);
	}

	execute(action) {
		this.saga.dispatch(action);
		return this.saga.silentRun();
	}
}
