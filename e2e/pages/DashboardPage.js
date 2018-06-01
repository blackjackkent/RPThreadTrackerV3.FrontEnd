import BasePage from './BasePage';
import config from '../../config/config.test.json';

class DashboardPage extends BasePage {
	async getLoggedInUsername() {
		await this.waitForDataSpec('header-dropdown-username');
		const loggedInUsername = await this.$evalDataSpec('header-dropdown-username', e => e.innerHTML);
		return loggedInUsername;
	}
}

export default DashboardPage;
