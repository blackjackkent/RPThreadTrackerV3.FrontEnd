import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import config from '../config/config.test.json';
import RegisterPage from './pages/RegisterPage';

let loginPage;
beforeEach(async () => {
	loginPage = new LoginPage(page);
	await loginPage.navigateAndWaitUntilLoaded();
}, 16000);
describe('Login', () => {
	it('should prevent form submission with empty username', async () => {
		await loginPage.fillInUsername('');
		await loginPage.fillInPassword(config.password);
		await loginPage.submit();

		const message = await loginPage.getUsernameErrorMessage();
		expect(message).toEqual('You must enter a username.');
	}, 30000);
	it('should prevent form submission with invalid username', async () => {
		await loginPage.fillInUsername('aa');
		await loginPage.fillInPassword(config.password);
		await loginPage.submit();

		const message = await loginPage.getUsernameErrorMessage();
		expect(message).toEqual('Your username must be more than 3 characters.');
	}, 30000);
	it('should prevent form submission with empty password', async () => {
		await loginPage.fillInUsername(config.email);
		await loginPage.fillInPassword('');
		await loginPage.submit();

		const message = await loginPage.getPasswordErrorMessage();
		expect(message).toEqual('You must enter a password.');
	}, 30000);
	it('should prevent login with invalid authentication of username', async () => {
		const ticks = Date.now();
		const username = config.username + ticks;
		const { password } = config;

		await loginPage.fillInUsername(username);
		await loginPage.fillInPassword(password);
		await loginPage.submit();

		const message = await loginPage.getServerErrorMessage();
		expect(message).toContain('Invalid username or password.');
	}, 30000);
	it('should prevent login with invalid authentication of password', async () => {
		const ticks = Date.now();
		const { username } = config;
		const password = config.password + ticks;

		await loginPage.fillInUsername(username);
		await loginPage.fillInPassword(password);
		await loginPage.submit();

		const message = await loginPage.getServerErrorMessage();
		expect(message).toContain('Invalid username or password.');
	}, 30000);
	it('should allow login with valid form and username', async () => {
		await loginPage.fillInUsername(config.username);
		await loginPage.fillInPassword(config.password);
		await loginPage.submit();

		const dashboardPage = new DashboardPage(page);
		const loggedInUsername = await dashboardPage.getLoggedInUsername();
		expect(loggedInUsername).toEqual(config.username);
	}, 30000);
	it('should allow login with valid form and email', async () => {
		await loginPage.fillInUsername(config.email);
		await loginPage.fillInPassword(config.password);
		await loginPage.submit();

		const dashboardPage = new DashboardPage(page);
		const loggedInUsername = await dashboardPage.getLoggedInUsername();
		expect(loggedInUsername).toEqual(config.username);
	}, 30000);
	it('should allow login with newly registered account', async () => {
		const registerPage = new RegisterPage(page);
		await registerPage.navigateAndWaitUntilLoaded();
		const ticks = Date.now();
		await registerPage.register(ticks);
		const dashboardPage = new DashboardPage(page);
		await dashboardPage.getLoggedInUsername();

		await loginPage.navigateAndWaitUntilLoaded();
		await loginPage.fillInUsername(`demouser-${ticks}`);
		await loginPage.fillInPassword(config.password);
		await loginPage.submit();

		const loggedInUsername = await dashboardPage.getLoggedInUsername();
		expect(loggedInUsername).toEqual(`demouser-${ticks}`);
	}, 30000);
});
