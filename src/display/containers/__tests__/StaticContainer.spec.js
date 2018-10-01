// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import StaticContainer from '../StaticContainer';
// #endregion imports

// #region mocks
jest.mock('../../views/login/Login', () => () => 'Login');
jest.mock('../../../infrastructure/withPageViewTracker', () => WrappedComponent => WrappedComponent);
jest.mock('../../views/forgot-password/ForgotPassword', () => () => 'ForgotPassword');
jest.mock('../../views/register/Register', () => () => 'Register');
jest.mock('../../views/reset-password/ResetPassword', () => () => 'ResetPassword');
// #endregion mocks

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const jsx = (<StaticContainer />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});
