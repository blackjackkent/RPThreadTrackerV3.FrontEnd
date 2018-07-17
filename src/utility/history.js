import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();
export default browserHistory;
export const navigation = {
	navigateTo: path => browserHistory.push(path)
};
