import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import config from '../config/config.test.json';

let dashboardPage;
beforeAll(async () => {
	await page.setViewport({ width: 1920, height: 1080 });
	const loginPage = new LoginPage(page);
	await loginPage.navigateAndWaitUntilLoaded();
	await loginPage.login();
	dashboardPage = new DashboardPage(page);
	await dashboardPage.getLoggedInUsername();
});
describe('Dashboard', () => {
	it('should display correct all threads count', async () => {
		var expectedValue = config.expectedMyTurnThreadCount + config.expectedTheirTurnThreadCount + config.expectedQueuedThreadCount;

		await dashboardPage.navigateAndWaitUntilThreadsLoaded();

		const text = await dashboardPage.getAtAGlanceWidgetCount('active');
		expect(text).toEqual(expectedValue.toString());
	}, 30000);
	it('should display correct my turn threads count', async () => {
		var expectedValue = config.expectedMyTurnThreadCount;

		await dashboardPage.navigateAndWaitUntilThreadsLoaded();

		const text = await dashboardPage.getAtAGlanceWidgetCount('my-turn');
		expect(text).toEqual(expectedValue.toString());
	}, 30000);
	it('should display correct their turn threads count', async () => {
		var expectedValue = config.expectedTheirTurnThreadCount;

		await dashboardPage.navigateAndWaitUntilThreadsLoaded();

		const text = await dashboardPage.getAtAGlanceWidgetCount('their-turn');
		expect(text).toEqual(expectedValue.toString());
	}, 30000);
	it('should display correct queued threads count', async () => {
		var expectedValue = config.expectedQueuedThreadCount;

		console.log('before navigation');
		await dashboardPage.navigateAndWaitUntilThreadsLoaded();

		const text = await dashboardPage.getAtAGlanceWidgetCount('queued');
		expect(text).toEqual(expectedValue.toString());
	}, 30000);
});
