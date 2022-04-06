import { useCallback, useReducer } from 'react';

const reducer = (state, action) => {
	if (!action) {
		return state;
	}
	if (action.type === 'set') {
		return action.data;
	}
	const newState = {
		...state,
		[action.name]: action.data
	};
	console.log(newState);
	return newState;
};
const useFormReducer = (defaultState = {}) => {
	const [formData, dispatch] = useReducer(reducer, defaultState);
	const onInputChange = useCallback((e) => {
		const action = {
			type: 'input',
			name: e.target.name,
			data: e.target.value
		};
		dispatch(action);
	}, []);
	const setFormData = useCallback((data) => {
		const action = {
			type: 'set',
			data
		};
		dispatch(action);
	}, []);
	return [formData, onInputChange, setFormData, dispatch];
};
export default useFormReducer;
