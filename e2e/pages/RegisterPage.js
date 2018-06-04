import BasePage from './BasePage';
import config from '../../config/config.test.json';

class RegisterPage extends BasePage {
	async waitUntilLoaded() {
		await this.page.goto(`${config.root}register`);
		await this.waitForDataSpec('email-field');
	}
	async fillInUsername(value) {
		await this.clickDataSpec('username-field');
		await this.page.keyboard.type(value);
	}
	async fillInExistingUsername() {
		await this.fillInUsername(config.username);
	}
	async fillInEmail(value) {
		await this.clickDataSpec('email-field');
		await this.page.keyboard.type(value);
	}
	async fillInPassword(value) {
		await this.clickDataSpec('password-field');
		await this.page.keyboard.type(value);
	}
	async fillInConfirmPassword(value) {
		await this.clickDataSpec('confirm-password-field');
		await this.page.keyboard.type(value);
	}
	async getUsernameErrorMessage() {
		const result = await this.getErrorMessageForDataSpec('username-field');
		return result;
	}
	async getEmailErrorMessage() {
		const result = await this.getErrorMessageForDataSpec('email-field');
		return result;
	}
	async getPasswordErrorMessage() {
		const result = await this.getErrorMessageForDataSpec('password-field');
		return result;
	}
	async getConfirmPasswordErrorMessage() {
		const result = await this.getErrorMessageForDataSpec('confirm-password-field');
		return result;
	}
	async getErrorMessageForDataSpec(value) {
		await this.page.waitForSelector(`[data-spec="${value}"] .form-control-feedback`);
		const message = await this.page.$eval(`[data-spec="${value}"] .form-control-feedback`, el => el.innerHTML);
		return message;
	}
	async submit() {
		await this.page.click('.btn-primary');
	}
}

export default RegisterPage;
