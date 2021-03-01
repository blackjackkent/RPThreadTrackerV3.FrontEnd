import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useLogoutMutation } from '~/infrastructure/hooks/mutations';
import LoadingIndicator from '~/display/shared/loading/LoadingIndicator';
import cache from '~/infrastructure/cache';
import cacheKeys from '~/infrastructure/constants/cacheKeys';
import { useCacheValue } from '~/infrastructure/hooks';

const Logout = () => {
	const [shouldRedirect, setShouldRedirect] = useState(false);
	const { mutate, isError, isSuccess } = useLogoutMutation();
	const [refreshToken] = useCacheValue(cacheKeys.REFRESH_TOKEN);
	useEffect(() => {
		cache.clear();
		if (refreshToken) {
			mutate(refreshToken);
		}
	}, []);
	useEffect(() => {
		if (isError || isSuccess || !refreshToken) {
			setShouldRedirect(true);
		}
	}, [isError, isSuccess, refreshToken]);

	if (shouldRedirect) {
		return <Redirect to="/login" />;
	}
	return (
		<LoadingIndicator
			data-spec="layout-loader"
			style={{
				width: 50,
				height: 50,
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)'
			}}
		/>
	);
};
export default Logout;
