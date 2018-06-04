class BasePage {
	constructor(tab) {
		this.page = tab;
	}
	waitForDataSpec(value) {
		return this.page.waitForSelector(`[data-spec="${value}"]`);
	}
	clickDataSpec(value) {
		return this.page.click(`[data-spec="${value}"]`);
	}
	$evalDataSpec(value, predicate) {
		return this.page.$eval(`[data-spec="${value}"]`, predicate);
	}
	async getErrorMessageForDataSpec(value) {
		await this.page.waitForSelector(`[data-spec="${value}"] .form-control-feedback`);
		const message = await this.page.$eval(`[data-spec="${value}"] .form-control-feedback`, el => el.innerHTML);
		return message;
	}
}
export default BasePage;
