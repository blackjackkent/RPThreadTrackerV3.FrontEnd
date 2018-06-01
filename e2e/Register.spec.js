import puppeteer from 'puppeteer';
import config from '../config/config.test.json';

describe('Registration', () => {
	it('should allow registration with valid form', async () => {
		const browser = await puppeteer.launch({
			headless: false
		});
		const page = await browser.newPage();

		await page.goto(`${config.root}register`);
		await page.waitForSelector('[data-spec="email-field"]');

		const ticks = Date.now();
		const username = `blackjackkent${ticks}`;
		const email = `rosalind.m.wills+${ticks}@gmail.com`;
		const password = 'Test123a!';
		await page.click('[data-spec="email-field"]');
		await page.keyboard.type(email);
		await page.click('[data-spec="username-field"]');
		await page.keyboard.type(username);
		await page.click('[data-spec="password-field"]');
		await page.keyboard.type(password);
		await page.click('[data-spec="confirm-password-field"]');
		await page.keyboard.type(password);
		await page.click('.btn-primary');

		await page.waitForSelector('[data-spec="header-dropdown-username"]');
		const loggedInUsername = await page.$eval('[data-spec="header-dropdown-username"]', el => el.innerHTML);
		expect(loggedInUsername).toEqual(username);
		browser.close();
	}, 16000);
});
