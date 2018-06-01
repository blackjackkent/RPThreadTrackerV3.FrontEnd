import puppeteer from 'puppeteer';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';

describe('Registration', () => {
	it('should allow registration with valid form', async () => {
		const browser = await puppeteer.launch({
			headless: false
		});
		const tab = await browser.newPage();
		tab.setViewport({ width: 1920, height: 1080 });
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
		browser.close();
	}, 16000);
});
