import { createSelector } from 'reselect';

const getIsRefreshingAuthToken = state => state.isRefreshingAuthToken;
export default getIsRefreshingAuthToken;
