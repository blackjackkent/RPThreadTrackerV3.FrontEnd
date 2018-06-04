import BasePage from './BasePage';
import config from '../../config/config.test.json';

class LoginPage extends BasePage {
	async navigateAndWaitUntilLoaded() {
		await this.page.goto(`${config.root}login`);
		await this.waitForDataSpec('username-field');
	}
	async fillInUsername(value) {
		await this.clickDataSpec('username-field');
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
	async getPasswordErrorMessage() {
		const result = await this.getErrorMessageForDataSpec('password-field');
		return result;
	}
	async getServerErrorMessage() {
		await this.waitForDataSpec('login-server-error');
		const message = await this.$evalDataSpec('login-server-error', el => el.innerHTML);
		return message;
	}
	async submit() {
		await this.page.click('.btn-primary');
	}
	async login() {
		const { username, password } = config;
		await this.fillInUsername(username);
		await this.fillInPassword(password);
		await this.submit();
	}
}

export default LoginPage;
