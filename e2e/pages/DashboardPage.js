import BasePage from './BasePage';
import config from '../../config/config.test.json';

class DashboardPage extends BasePage {
	async getLoggedInUsername() {
		await this.waitForDataSpec('header-dropdown-username');
		const loggedInUsername = await this.$evalDataSpec('header-dropdown-username', e => e.innerHTML);
		return loggedInUsername;
	}
	async navigateAndWaitUntilThreadsLoaded() {
		await this.page.goto(`${config.root}dashboard`);
		await this.waitForDataSpec('header-loading-indicator');
		await this.waitForDataSpecRemoved('header-loading-indicator');
	}

	async getAtAGlanceWidgetCount(tag) {
		var text = await page.evaluate(() => document.querySelector(`[data-spec="at-a-glance-${tag}-widget"] [data-spec="dashboard-summary-widget-header"]`).innerText);
		return text;
	}
}

export default DashboardPage;
