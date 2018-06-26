class BasePage {
	constructor(tab) {
		this.page = tab;
		this.toastrSelector = '.redux-toastr .top-right .toastr .rrt-middle-container';
	}
	waitForToast() {
		return this.page.waitForSelector(this.toastrSelector);
	}
	async getToastTitle() {
		await this.waitForToast();
		return this.page.$eval(`${this.toastrSelector} .rrt-title`, el => el.innerHTML);
	}
	waitForDataSpec(value) {
		console.log('waiting for data spec');
		return this.page.waitForSelector(`[data-spec="${value}"]`);
	}
	waitForDataSpecRemoved(value) {
		return this.page.waitForFunction(`!document.querySelector('[data-spec="${value}"]')`, { polling: 'mutation' });
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
