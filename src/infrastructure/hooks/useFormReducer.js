import { useReducer } from 'react';

const reducer = (state, action) => {
	if (!action) {
		return state;
	}
	if (action.type === 'set') {
		return action.data;
	}
	return {
		...state,
		[action.name]: action.data
	};
};
const useFormReducer = (defaultState = {}) => {
	const [formData, dispatch] = useReducer(reducer, defaultState);
	const onInputChange = (e) => {
		const action = {
			type: 'input',
			name: e.target.name,
			data: e.target.value
		};
		dispatch(action);
	};
	const setFormData = (data) => {
		const action = {
			type: 'set',
			data
		};
		dispatch(action);
	};
	return [formData, onInputChange, setFormData, dispatch];
};
export default useFormReducer;
