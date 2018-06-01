import puppeteer from 'puppeteer';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';

let browser;
let tab;
beforeEach(async () => {
	browser = await puppeteer.launch({
		headless: false
	});
	tab = await browser.newPage();
	tab.setViewport({ width: 1920, height: 1080 });
});
afterEach(async () => {
	browser.close();
});
describe('Registration', () => {
	it('should allow registration with valid form', async () => {
		const registerPage = new RegisterPage(tab);
		await registerPage.waitUntilLoaded();

		const ticks = Date.now();
		const username = `blackjackkent${ticks}`;
		const email = `rosalind.m.wills+${ticks}@gmail.com`;
		const password = 'Test123a!';

		await registerPage.fillInUsername(username);
		await registerPage.fillInEmail(email);
		await registerPage.fillInPassword(password);
		await registerPage.fillInConfirmPassword(password);
		await registerPage.submit();

		const dashboardPage = new DashboardPage(tab);
		const loggedInUsername = await dashboardPage.getLoggedInUsername();
		expect(loggedInUsername).toEqual(username);
	}, 16000);
});
