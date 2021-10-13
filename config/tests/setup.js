import { setLogger } from 'react-query';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom/extend-expect';

setLogger({
	log: () => {},
	warn: () => {},
	error: () => {}
});
