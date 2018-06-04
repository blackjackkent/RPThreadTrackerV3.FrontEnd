import ForgotPasswordPage from './pages/ForgotPasswordPage';

let forgotPasswordPage;
beforeEach(async () => {
	forgotPasswordPage = new ForgotPasswordPage(page);
	await forgotPasswordPage.navigateAndWaitUntilLoaded();
}, 16000);
describe.only('Forgot Password', () => {
	it('should prevent form submission with empty email', async () => {
		await forgotPasswordPage.submit();

		const message = await forgotPasswordPage.getEmailErrorMessage();
		expect(message).toEqual('You must enter an email.');
	}, 15000);

});
