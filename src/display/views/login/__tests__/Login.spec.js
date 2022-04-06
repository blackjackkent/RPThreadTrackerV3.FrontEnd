// #region imports
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../Login';
import { render } from '~/testhelpers/helpers.integration';
import cache from '~/infrastructure/cache';
// #endregion imports

jest.mock('~/utility', () => ({}));
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'), // import and retain the original functionalities
	Redirect: (data) => `Redirect to ${data.to}`
}));
jest.mock('~/infrastructure/cache', () => ({
	set: jest.fn()
}));
const server = setupServer(
	rest.post(`${API_BASE_URL}api/auth/token`, (req, res, ctx) => {
		return res(
			ctx.json({
				token: {
					token: 'test-token',
					expiry: 1234
				},
				refreshToken: {
					token: 'test-refresh-token',
					expiry: 4567
				}
			})
		);
	})
);
beforeAll(() => server.listen());
beforeEach(() => {
	server.resetHandlers();
	jest.clearAllMocks();
});
afterAll(() => {
	server.close();
});

describe('rendering', () => {
	describe('validation', () => {
		it('should render error message when username is too short', async () => {
			render(<Login />);
			const usernameInput = screen.getByLabelText('Username');
			userEvent.type(usernameInput, 'aa');
			userEvent.tab();
			const errorMessage = await screen.findByText(
				'Your username must be more than 3 characters.'
			);
			userEvent.clear(usernameInput);
			userEvent.type(usernameInput, 'aaa');
			await waitForElementToBeRemoved(errorMessage);
		});
		it('should render error message when username is empty', async () => {
			render(<Login />);
			const usernameInput = screen.getByLabelText('Username');
			userEvent.type(usernameInput, '');
			userEvent.tab();
			const errorMessage = await screen.findByText('You must enter a username.');
			userEvent.clear(usernameInput);
			userEvent.type(usernameInput, 'aaa');
			await waitForElementToBeRemoved(errorMessage);
		});
		it('should render error message when password is empty', async () => {
			render(<Login />);
			const passwordInput = screen.getByLabelText('Password');
			userEvent.type(passwordInput, '');
			userEvent.tab();
			const errorMessage = await screen.findByText('You must enter a password.');
			userEvent.clear(passwordInput);
			userEvent.type(passwordInput, 'aaa');
			await waitForElementToBeRemoved(errorMessage);
		});
	});
	describe('submission', () => {
		it('should init navigation when request is successful', async () => {
			render(<Login />);
			const usernameInput = screen.getByLabelText('Username');
			const passwordInput = screen.getByLabelText('Password');
			const submitInput = screen.getByRole('button', { name: 'Login' });
			userEvent.type(usernameInput, 'testUsername');
			userEvent.type(passwordInput, 'testPassword');
			userEvent.click(submitInput);
			const loadingBar = await screen.findByRole('progressbar');
			await waitForElementToBeRemoved(loadingBar);
			await screen.findByText('Redirect to /dashboard');
			expect(cache.set).toBeCalledTimes(2);
			expect(cache.set).toBeCalledWith('accessToken', 'test-token');
			expect(cache.set).toBeCalledWith('refreshToken', 'test-refresh-token');
		});
		it('should hide loading indicator and render error message when request fails', async () => {
			server.use(
				rest.post(`${API_BASE_URL}api/auth/token`, (req, res, ctx) => {
					return res(ctx.status(400), ctx.json('Invalid username or password.'));
				})
			);
			render(<Login />);
			const usernameInput = screen.getByLabelText('Username');
			const passwordInput = screen.getByLabelText('Password');
			const submitInput = screen.getByRole('button', { name: 'Login' });
			userEvent.type(usernameInput, 'testUsername');
			userEvent.type(passwordInput, 'testPassword');
			userEvent.click(submitInput);
			const loadingBar = await screen.findByRole('progressbar');
			await waitForElementToBeRemoved(loadingBar);
			await screen.findByText('Invalid username or password.');
		});
	});
});
