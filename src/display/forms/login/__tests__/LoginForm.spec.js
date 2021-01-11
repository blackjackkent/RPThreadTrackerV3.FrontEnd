// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '~/testhelpers/helpers.unit';
import LoginForm from '../../../views/login/components/LoginForm';
// #endregion imports

const createTestProps = (propOverrides) => ({
	handleInputChange: jest.fn(),
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = <LoginForm {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('validation', () => {
		it('should validate the username field', () => {
			const props = createTestProps();
			const jsx = <LoginForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'username-field').find('AvField');
			expect(field.props().validate.required).toHaveProperty('value', true);
			expect(field.props().validate.minLength).toHaveProperty('value', 3);
			expect(field.props().validate.maxLength).toHaveProperty('value', 256);
		});
		it('should validate the password field', () => {
			const props = createTestProps();
			const jsx = <LoginForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'password-field').find('AvField');
			expect(field.props().validate.required).toHaveProperty('value', true);
		});
	});
	describe('handleInputChange', () => {
		it('should be called when username changes', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({
				handleInputChange
			});
			const jsx = <LoginForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'username-field').find('AvField');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
		it('should be called when password changes', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({
				handleInputChange
			});
			const jsx = <LoginForm {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'password-field').find('AvField');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
	});
});
