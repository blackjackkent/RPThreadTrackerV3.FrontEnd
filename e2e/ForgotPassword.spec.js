import ForgotPasswordPage from './pages/ForgotPasswordPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';

let forgotPasswordPage;
beforeEach(async () => {
	forgotPasswordPage = new ForgotPasswordPage(page);
	await forgotPasswordPage.navigateAndWaitUntilLoaded();
}, 16000);
describe('Forgot Password', () => {
	it('should prevent form submission with empty email', async () => {
		await forgotPasswordPage.submit();

		const message = await forgotPasswordPage.getEmailErrorMessage();
		expect(message).toEqual('You must enter an email.');
	}, 30000);
	it('should prevent form submission with invalid email', async () => {
		await forgotPasswordPage.fillInEmail('aaaa');
		await forgotPasswordPage.submit();

		const message = await forgotPasswordPage.getEmailErrorMessage();
		expect(message).toEqual('Please enter a valid email.');
	}, 30000);
	it('should allow forgot password request with valid email', async () => {
		const registerPage = new RegisterPage(page);
		await registerPage.navigateAndWaitUntilLoaded();
		const ticks = Date.now();
		await registerPage.register(ticks);
		const dashboardPage = new DashboardPage(page);
		await dashboardPage.getLoggedInUsername();

		await forgotPasswordPage.navigateAndWaitUntilLoaded();
		await forgotPasswordPage.fillInEmail(`demouser+${ticks}@gmail.com`);
		await forgotPasswordPage.submit();

		const toastTitle = await forgotPasswordPage.getToastTitle();
		expect(toastTitle).toEqual('Please check your email for a link to reset your password.');
	}, 30000);
	it('should allow forgot password request with nonexistent email', async () => {
		const ticks = Date.now();

		await forgotPasswordPage.navigateAndWaitUntilLoaded();
		await forgotPasswordPage.fillInEmail(`demouser+${ticks}@gmail.com`);
		await forgotPasswordPage.submit();

		const toastTitle = await forgotPasswordPage.getToastTitle();
		expect(toastTitle).toEqual('Please check your email for a link to reset your password.');
	}, 30000);
});
