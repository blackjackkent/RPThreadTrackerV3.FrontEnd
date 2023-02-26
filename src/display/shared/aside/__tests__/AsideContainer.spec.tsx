import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import AsideContainer from '../AsideContainer';

test('loads and displays greeting', async () => {
	// ARRANGE
	render(<AsideContainer />);

	// ACT
	await userEvent.click(screen.getByText('Load Greeting'));
	await screen.findByRole('heading');

	// ASSERT
	expect(screen.getByRole('heading')).toHaveTextContent('hello there');
	expect(screen.getByRole('button')).toBeDisabled();
});
