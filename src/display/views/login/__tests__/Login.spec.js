// #region imports
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../Login';
import { render } from '~/testhelpers/helpers.integration';
// #endregion imports

jest.mock('~/utility', () => ({}));
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	Redirect: () => () => `redirect to `
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
afterEach(() => {
	server.resetHandlers();
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
			await waitFor(() => {
				expect(
					screen.getByText('Your username must be more than 3 characters.')
				).toBeInTheDocument();
			});
			userEvent.clear(usernameInput);
			userEvent.type(usernameInput, 'aaa');
			await waitFor(() => {
				expect(
					screen.queryByText('Your username must be more than 3 characters.')
				).not.toBeInTheDocument();
			});
		});
		it('should render error message when username is empty', async () => {
			render(<Login />);
			const usernameInput = screen.getByLabelText('Username');
			userEvent.type(usernameInput, '');
			userEvent.tab();
			await waitFor(() => {
				expect(screen.getByText('You must enter a username.')).toBeInTheDocument();
			});
			userEvent.clear(usernameInput);
			userEvent.type(usernameInput, 'aaa');
			await waitFor(() => {
				expect(screen.queryByText('You must enter a username.')).not.toBeInTheDocument();
			});
		});
		it('should render error message when password is empty', async () => {
			render(<Login />);
			const passwordInput = screen.getByLabelText('Password');
			userEvent.type(passwordInput, '');
			userEvent.tab();
			await waitFor(() => {
				expect(screen.getByText('You must enter a password.')).toBeInTheDocument();
			});
			userEvent.clear(passwordInput);
			userEvent.type(passwordInput, 'aaa');
			await waitFor(() => {
				expect(screen.queryByText('You must enter a password.')).not.toBeInTheDocument();
			});
		});
	});
	describe('loading', () => {
		it.only('should render loading indicator when request is in progress', async () => {
			render(<Login />);
			const loadingIndicator = screen.queryByRole('progressbar');
			expect(loadingIndicator).toBeNull();
			const usernameInput = screen.getByLabelText('Username');
			const passwordInput = screen.getByLabelText('Password');
			const submitInput = screen.getByRole('button', { name: 'Login' });
			userEvent.type(usernameInput, 'testUsername');
			userEvent.type(passwordInput, 'testPassword');
			userEvent.click(submitInput);
			await waitFor(() => {
				expect(screen.getByRole('progressbar')).toBeInTheDocument();
			});
		});
	});
	describe('error', () => {
		it.only('should hide loading indicator and render error message when request fails', async () => {
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
			await waitFor(() => {
				const loadingIndicator = screen.queryByRole('progressbar');
				expect(loadingIndicator).toBeNull();
				expect(screen.getByText('Invalid username or password.')).toBeInTheDocument();
			});
		});
	});
});
