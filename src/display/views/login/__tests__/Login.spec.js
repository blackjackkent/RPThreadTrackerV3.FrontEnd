// #region imports
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../Login';
import { render } from '~/testhelpers/helpers.integration';
// #endregion imports

const server = setupServer(
	rest.get('/api/auth/token', (req, res, ctx) => {
		return res(ctx.json({ greeting: 'hello there' }));
	})
);

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
	});
});
