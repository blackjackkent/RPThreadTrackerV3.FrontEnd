import BasePage from './BasePage';
import config from '../../config/config.test.json';

class ForgotPasswordPage extends BasePage {
	async navigateAndWaitUntilLoaded() {
		await this.page.goto(`${config.root}forgotpassword`);
		await this.waitForDataSpec('email-field');
	}
	async fillInEmail(value) {
		await this.clickDataSpec('email-field');
		await this.page.keyboard.type(value);
	}
	async fillInExistingEmail() {
		await this.fillInEmail(config.email);
	}
	async getEmailErrorMessage() {
		const result = await this.getErrorMessageForDataSpec('email-field');
		return result;
	}
	async submit() {
		await this.page.click('.btn-primary');
	}
}

export default ForgotPasswordPage;
