import BasePage from './BasePage';
import config from '../../config/config.test.json';

class ResetPasswordPage extends BasePage {
	async navigateAndWaitUntilLoaded(email = '', token = '') {
		await this.page.goto(`${config.root}resetpassword?email=${encodeURIComponent(email)}&token=${token}`);
		await this.waitForDataSpec('new-password-field');
	}
	async fillInPassword(value) {
		await this.clickDataSpec('new-password-field');
		await this.page.keyboard.type(value);
	}
	async fillInConfirmPassword(value) {
		await this.clickDataSpec('confirm-new-password-field');
		await this.page.keyboard.type(value);
	}
	async getPasswordErrorMessage() {
		const result = await this.getErrorMessageForDataSpec('new-password-field');
		return result;
	}
	async getConfirmPasswordErrorMessage() {
		const result = await this.getErrorMessageForDataSpec('confirm-new-password-field');
		return result;
	}
	async getServerErrorMessage() {
		await this.waitForDataSpec('reset-password-server-error');
		const message = await this.$evalDataSpec('reset-password-server-error', el => el.innerHTML);
		return message;
	}
	async submit() {
		await this.page.click('.btn-primary');
	}
}

export default ResetPasswordPage;
