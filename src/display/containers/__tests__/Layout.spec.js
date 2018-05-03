import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper, shallowWithState } from '../../../utility/testHelpers';
import Layout from '../Layout';

const createTestProps = propOverrides => ({
	fetchUser: jest.fn(),
	fetchNews: jest.fn(),
	...propOverrides
});

const createTestState = stateOverrides => ({
	user: { id: '' },
	news: [],
	...stateOverrides
});

describe('rendering', () => {
	it('should render valid snapshot when loading', () => {
		const props = createTestProps();
		const state = createTestState();
		const jsx = (<Layout {...props} />);
		const element = shallowWithState(jsx, state).dive('Layout');
		expect(element).toMatchSnapshot();
	});
	it('should render valid snapshot with loading indicator', () => {
		const props = createTestProps();
		const state = createTestState({ user: { id: '12345' } });
		const jsx = (<Layout {...props} />);
		const element = shallowWithState(jsx, state).dive('Layout');
		expect(element).toMatchSnapshot();
	});
	it('should render loading indicator if user not loaded', () => {
		const props = createTestProps();
		const state = createTestState();
		const jsx = (<Layout {...props} />);
		const element = shallowWithState(jsx, state).dive('Layout');
		expect(getSpecWrapper(element, 'layout-loader')).toHaveLength(1);
		expect(getSpecWrapper(element, 'layout-app')).toHaveLength(0);
		expect(getSpecWrapper(element, 'layout-toastr')).toHaveLength(0);
		expect(getSpecWrapper(element, 'layout-header')).toHaveLength(0);
		expect(getSpecWrapper(element, 'layout-sidebar')).toHaveLength(0);
		expect(getSpecWrapper(element, 'layout-breadcrumb')).toHaveLength(0);
		expect(getSpecWrapper(element, 'layout-container')).toHaveLength(0);
		expect(getSpecWrapper(element, 'layout-aside')).toHaveLength(0);
		expect(getSpecWrapper(element, 'layout-footer')).toHaveLength(0);
		expect(getSpecWrapper(element, 'layout-modals')).toHaveLength(0);
	});
	it('should render app if user is loaded', () => {
		const props = createTestProps();
		const state = createTestState({ user: { id: '12345' } });
		const jsx = (<Layout {...props} />);
		const element = shallowWithState(jsx, state).dive('Layout');
		expect(getSpecWrapper(element, 'layout-loader')).toHaveLength(0);
		expect(getSpecWrapper(element, 'layout-app')).toHaveLength(1);
		expect(getSpecWrapper(element, 'layout-toastr')).toHaveLength(1);
		expect(getSpecWrapper(element, 'layout-header')).toHaveLength(1);
		expect(getSpecWrapper(element, 'layout-sidebar')).toHaveLength(1);
		expect(getSpecWrapper(element, 'layout-breadcrumb')).toHaveLength(1);
		expect(getSpecWrapper(element, 'layout-container')).toHaveLength(1);
		expect(getSpecWrapper(element, 'layout-aside')).toHaveLength(1);
		expect(getSpecWrapper(element, 'layout-footer')).toHaveLength(1);
		expect(getSpecWrapper(element, 'layout-modals')).toHaveLength(1);
	});
});
