import ResetPasswordPage from './pages/ResetPasswordPage';
import config from '../config/config.test.json';

let resetPasswordPage;
beforeEach(async () => {
	resetPasswordPage = new ResetPasswordPage(page);
	await resetPasswordPage.navigateAndWaitUntilLoaded();
}, 16000);
describe('Login', () => {
	it('should prevent form submission with empty password', async () => {
		const password = 'Test123a!';

		await resetPasswordPage.fillInConfirmPassword(password);
		await resetPasswordPage.submit();

		const message = await resetPasswordPage.getPasswordErrorMessage();
		expect(message).toEqual('You must enter a password.');
	}, 15000);
	it('should prevent form submission with invalid password', async () => {
		await resetPasswordPage.fillInPassword('aaaaa');
		await resetPasswordPage.fillInConfirmPassword('aaaaa');
		await resetPasswordPage.submit();

		const message = await resetPasswordPage.getPasswordErrorMessage();
		expect(message).toEqual('Your password must be longer than 6 characters.');
	}, 15000);
	it('should prevent form submission with empty confirm password', async () => {
		const password = 'Test123a!';

		await resetPasswordPage.fillInPassword(password);
		await resetPasswordPage.submit();

		const message = await resetPasswordPage.getConfirmPasswordErrorMessage();
		expect(message).toEqual('You must confirm your password.');
	}, 15000);
	it('should prevent form submission with non-matching passwords', async () => {
		const password = 'Test123a!';

		await resetPasswordPage.fillInPassword('Test123a');
		await resetPasswordPage.fillInConfirmPassword(password);
		await resetPasswordPage.submit();

		const message = await resetPasswordPage.getConfirmPasswordErrorMessage();
		expect(message).toEqual('Your passwords must match.');
	}, 15000);
	it('should prevent registration without email', async () => {
		await resetPasswordPage.fillInPassword(config.password);
		await resetPasswordPage.fillInConfirmPassword(config.password);
		await resetPasswordPage.submit();

		const message = await resetPasswordPage.getServerErrorMessage();
		expect(message).toContain('This reset token is invalid. Please request a new password reset link.');
	}, 15000);
	it('should prevent registration without token', async () => {
		await resetPasswordPage.navigateAndWaitUntilLoaded(config.email);
		await resetPasswordPage.fillInPassword(config.password);
		await resetPasswordPage.fillInConfirmPassword(config.password);
		await resetPasswordPage.submit();

		const message = await resetPasswordPage.getServerErrorMessage();
		expect(message).toContain('This reset token is invalid. Please request a new password reset link.');
	}, 15000);
	it('should prevent registration with invalid token', async () => {
		await resetPasswordPage.navigateAndWaitUntilLoaded(config.email, '123456');
		await resetPasswordPage.fillInPassword(config.password);
		await resetPasswordPage.fillInConfirmPassword(config.password);
		await resetPasswordPage.submit();

		const message = await resetPasswordPage.getServerErrorMessage();
		expect(message).toContain('This reset token is invalid. Please request a new password reset link.');
	}, 15000);
});
