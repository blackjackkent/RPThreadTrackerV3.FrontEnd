import BasePage from './BasePage';
import config from '../../config/config.test.json';

class RegisterPage extends BasePage {
	async navigateAndWaitUntilLoaded() {
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
	async fillInExistingEmail() {
		await this.fillInEmail(config.email);
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
	async getServerErrorMessage() {
		await this.waitForDataSpec('register-server-error');
		const message = await this.$evalDataSpec('register-server-error', el => el.innerHTML);
		return message;
	}
	async submit() {
		await this.page.click('.btn-primary');
	}
	async register(ticks) {
		const username = `demouser-${ticks}`;
		const email = `demouser+${ticks}@gmail.com`;
		const password = 'Test123a!';

		await this.fillInUsername(username);
		await this.fillInEmail(email);
		await this.fillInPassword(password);
		await this.fillInConfirmPassword(password);
		await this.submit();
	}
}

export default RegisterPage;
