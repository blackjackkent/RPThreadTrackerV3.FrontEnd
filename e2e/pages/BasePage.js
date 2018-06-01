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
}
export default BasePage;
