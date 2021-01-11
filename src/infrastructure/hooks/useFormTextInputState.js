import { useState } from 'react';

function useFormTextInputState(defaultValue = '') {
	const [value, setValue] = useState(defaultValue);
	const handleChange = (e) => {
		setValue(e.target.value);
	};
	return [value, handleChange, setValue];
}
export default useFormTextInputState;
