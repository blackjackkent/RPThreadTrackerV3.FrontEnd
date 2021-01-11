import { useReducer } from 'react';

const reducer = (state, action) => {
	if (!action) {
		return state;
	}
	return {
		...state,
		[action.type]: action.data
	};
};
const useFormReducer = () => {
	const [state, dispatch] = useReducer(reducer, {});
	const onInputChange = (e) => {
		const action = {
			type: e.target.name,
			data: e.target.value
		};
		dispatch(action);
	};
	return [state, onInputChange, dispatch];
};
export default useFormReducer;
