
const buildPage = (tab) => {
	return Object.assign(tab, {
		waitForDataSpec(value) {
			return this.waitForSelector(`[data-spec="${value}"]`);
		},
		clickDataSpec(value) {
			return this.click(`[data-spec="${value}"]`);
		}
	});
};

export default {
	buildPage
};
