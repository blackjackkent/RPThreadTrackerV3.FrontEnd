import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import AsideContainer from '../AsideContainer';
import NewsItem from '~/types/news/NewsItem';

jest.useFakeTimers().setSystemTime(new Date('2023-01-03T12:00:00.00Z'));
const defaultTestData: NewsItem[] = [
	{
		postId: '1',
		postDate: '2023-01-01T02:08:32.95Z',
		postTitle: 'Test Post 1',
		postUrl: 'http://test.tumblr.com/post/12345'
	},
	{
		postId: '2',
		postDate: '2023-01-02T02:08:32.95Z',
		postTitle: 'Test Post 2',
		postUrl: 'http://test.tumblr.com/post/23456'
	},

	{
		postId: '3',
		postDate: '2023-01-03T02:08:32.95Z',
		postTitle: 'Test Post 3',
		postUrl: 'http://test.tumblr.com/post/34567'
	},

	{
		postId: '4',
		postDate: '2023-01-04T02:08:32.95Z',
		postTitle: 'Test Post 4',
		postUrl: 'http://test.tumblr.com/post/45678'
	}
];
const server = setupServer(
	rest.get('http://baseclienturl/api/news', (req, res, ctx) => {
		// respond using a mocked JSON body
		return res(ctx.json(defaultTestData));
	})
);

// establish API mocking before all tests
beforeAll(() => server.listen());
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers());
// clean up once the tests are done
afterAll(() => server.close());

test('loads and displays news', async () => {
	// ARRANGE
	const { getByRole, getByTestId, queryAllByRole } = render(<AsideContainer />);

	// ACT
	await screen.findByRole('heading');

	// ASSERT
	expect(screen.getByRole('heading')).toHaveTextContent('hello there');
	expect(screen.getByRole('button')).toBeDisabled();
});
