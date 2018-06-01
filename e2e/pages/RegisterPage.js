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
	async submit() {
		await this.page.click('.btn-primary');
	}
}

export default RegisterPage;
