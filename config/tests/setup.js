import { setLogger } from 'react-query';
import '@testing-library/jest-dom/extend-expect';

setLogger({
	error: () => {}
});
