// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import TooltipForm from '../TooltipForm';
// #endregion imports

const createTestProps = propOverrides => ({
	Renderable: () => 'RenderableElement',
	...propOverrides
});

describe('rendering', () => {
	it('should render valid snapshot', () => {
		const props = createTestProps();
		const jsx = (<TooltipForm {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should hide tooltips by default', () => {
		const props = createTestProps();
		const jsx = (<TooltipForm {...props} />);
		const element = shallow(jsx);
		expect(element.props().tooltipDisplayData['my-element']).toBeFalsy();
	});
	it('should set tooltip visible for field', () => {
		const props = createTestProps();
		const jsx = (<TooltipForm {...props} />);
		const element = shallow(jsx);
		element.instance().showTooltip({ target: { name: 'my-element' } });
		expect(element.update().props().tooltipDisplayData).toHaveProperty('my-element', true);
	});
	it('should set tooltip hidden for field', () => {
		const props = createTestProps();
		const jsx = (<TooltipForm {...props} />);
		const element = shallow(jsx);
		element.instance().hideTooltip({ target: { name: 'my-element' } });
		expect(element.update().props().tooltipDisplayData).toHaveProperty('my-element', false);
	});
	it('should pass props to renderable component', () => {
		const props = createTestProps({ 'data-random': 'random' });
		const jsx = (<TooltipForm {...props} />);
		const element = shallow(jsx);
		expect(element).toHaveProp('data-random', 'random');
		expect(element).toHaveProp('showTooltip', element.instance().showTooltip);
		expect(element).toHaveProp('hideTooltip', element.instance().hideTooltip);
	});
});
