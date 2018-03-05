import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import RandomThreadDisplay from '../RandomThreadDisplay';

describe('RandomThreadDisplay', () => {
	test('renders empty message when thread is null', () => {
		const jsx = (<RandomThreadDisplay threadData={{ thread: null }} />);
		const element = shallow(jsx);
		const tree = renderer.create(jsx).toJSON();
		expect(element.text()).toEqual('Pick a random thread to respond to!');
		expect(element.find('a').length).toEqual(0);
		expect(tree).toMatchSnapshot();
	});
	test('renders without status', () => {
		const jsx = (<RandomThreadDisplay threadData={{ thread: { userTitle: 'Test Title' }, status: null }} />);
		const element = shallow(jsx);
		const tree = renderer.create(jsx).toJSON();
		expect(element.text()).toContain('Test Title');
		expect(element.text()).toContain('Awaiting Starter');
		expect(element.find('a').length).toEqual(0);
		expect(tree).toMatchSnapshot();
	});
	test('renders with status', () => {
		const jsx = (<RandomThreadDisplay threadData={{ thread: { userTitle: 'Test Title' }, status: { LastPostUrl: 'testurl', LastPosterUrlIdentifier: 'blackjackkent' } }} />);
		const element = shallow(jsx);
		const tree = renderer.create(jsx).toJSON();
		expect(element.text()).toContain('Test Title');
		expect(element.text()).toContain('Last Post by');
		expect(element.text()).toContain('blackjackkent');
		expect(element.find('a[href="testurl"]').length).toEqual(2);
		expect(tree).toMatchSnapshot();
	});
});
