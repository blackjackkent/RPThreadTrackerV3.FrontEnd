import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';

let registerPage;
beforeEach(async () => {
	registerPage = new RegisterPage(page);
	await registerPage.waitUntilLoaded();
}, 16000);
describe('Registration', () => {
	it('should prevent form submission with empty username', async () => {
		const ticks = Date.now();
		const email = `rosalind.m.wills+${ticks}@gmail.com`;
		const password = 'Test123a!';

		await registerPage.fillInEmail(email);
		await registerPage.fillInPassword(password);
		await registerPage.fillInConfirmPassword(password);
		await registerPage.submit();

		const message = await registerPage.getUsernameErrorMessage();
		expect(message).toEqual('You must enter a username.');
	}, 15000);
	it('should prevent form submission with invalid username', async () => {
		const ticks = Date.now();
		const username = 'aa';
		const email = `rosalind.m.wills+${ticks}@gmail.com`;
		const password = 'Test123a!';

		await registerPage.fillInUsername(username);
		await registerPage.fillInEmail(email);
		await registerPage.fillInPassword(password);
		await registerPage.fillInConfirmPassword(password);
		await registerPage.submit();

		const message = await registerPage.getUsernameErrorMessage();
		expect(message).toEqual('Your username must be more than 3 characters.');
	}, 15000);
	it('should prevent form submission with empty email', async () => {
		const ticks = Date.now();
		const username = `blackjackkent${ticks}`;
		const password = 'Test123a!';

		await registerPage.fillInUsername(username);
		await registerPage.fillInPassword(password);
		await registerPage.fillInConfirmPassword(password);
		await registerPage.submit();

		const message = await registerPage.getEmailErrorMessage();
		expect(message).toEqual('You must enter an email.');
	}, 15000);
	it('should prevent form submission with invalid email', async () => {
		const ticks = Date.now();
		const username = `blackjackkent${ticks}`;
		const email = 'aaa';
		const password = 'Test123a!';

		await registerPage.fillInUsername(username);
		await registerPage.fillInEmail(email);
		await registerPage.fillInPassword(password);
		await registerPage.fillInConfirmPassword(password);
		await registerPage.submit();

		const message = await registerPage.getEmailErrorMessage();
		expect(message).toEqual('Please enter a valid email.');
	}, 15000);
	it('should prevent form submission with empty password', async () => {
		const ticks = Date.now();
		const username = `blackjackkent${ticks}`;
		const email = `rosalind.m.wills+${ticks}@gmail.com`;
		const password = 'Test123a!';

		await registerPage.fillInUsername(username);
		await registerPage.fillInEmail(email);
		await registerPage.fillInConfirmPassword(password);
		await registerPage.submit();

		const message = await registerPage.getPasswordErrorMessage();
		expect(message).toEqual('You must enter a password.');
	}, 15000);
	it('should prevent form submission with invalid password', async () => {
		const ticks = Date.now();
		const username = `blackjackkent${ticks}`;
		const email = `rosalind.m.wills+${ticks}@gmail.com`;
		const password = 'Test123a!';

		await registerPage.fillInUsername(username);
		await registerPage.fillInEmail(email);
		await registerPage.fillInPassword('aaaaa');
		await registerPage.fillInConfirmPassword('aaaaa');
		await registerPage.submit();

		const message = await registerPage.getPasswordErrorMessage();
		expect(message).toEqual('Your password must be longer than 6 characters.');
	}, 15000);
	it('should prevent form submission with empty confirm password', async () => {
		const ticks = Date.now();
		const username = `blackjackkent${ticks}`;
		const email = `rosalind.m.wills+${ticks}@gmail.com`;
		const password = 'Test123a!';

		await registerPage.fillInUsername(username);
		await registerPage.fillInEmail(email);
		await registerPage.fillInPassword(password);
		await registerPage.submit();

		const message = await registerPage.getConfirmPasswordErrorMessage();
		expect(message).toEqual('You must confirm your password.');
	}, 15000);
	it('should prevent form submission with non-matching passwords', async () => {
		const ticks = Date.now();
		const username = `blackjackkent${ticks}`;
		const email = `rosalind.m.wills+${ticks}@gmail.com`;
		const password = 'Test123a!';

		await registerPage.fillInUsername(username);
		await registerPage.fillInEmail(email);
		await registerPage.fillInPassword('Test123a');
		await registerPage.fillInConfirmPassword(password);
		await registerPage.submit();

		const message = await registerPage.getConfirmPasswordErrorMessage();
		expect(message).toEqual('Your passwords must match.');
	}, 15000);
	it('should allow registration with valid form', async () => {
		const ticks = Date.now();
		const username = `blackjackkent${ticks}`;
		const email = `rosalind.m.wills+${ticks}@gmail.com`;
		const password = 'Test123a!';

		await registerPage.fillInUsername(username);
		await registerPage.fillInEmail(email);
		await registerPage.fillInPassword(password);
		await registerPage.fillInConfirmPassword(password);
		await registerPage.submit();

		const dashboardPage = new DashboardPage(page);
		const loggedInUsername = await dashboardPage.getLoggedInUsername();
		expect(loggedInUsername).toEqual(username);
	}, 15000);
});
