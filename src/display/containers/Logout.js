import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useLogoutMutation } from '~/infrastructure/hooks/mutations';
import cache from '~/infrastructure/cache';
import cacheKeys from '~/infrastructure/constants/cacheKeys';
import { useCacheValue } from '~/infrastructure/hooks';

const Logout = () => {
	const { submitLogout } = useLogoutMutation();
	const [refreshToken] = useCacheValue(cacheKeys.REFRESH_TOKEN);
	useEffect(() => {
		cache.clear();
		if (refreshToken) {
			submitLogout(refreshToken);
		}
	}, []);
	return <Redirect to="/login" />;
};
export default Logout;
