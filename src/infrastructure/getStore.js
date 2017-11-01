import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { Iterable } from 'immutable'
import createSagaMiddleware from 'redux-saga';
import { getQuery } from '../utility'
import reducers from './reducers';
import { initSagas } from './initSagas'

const stateTransformer = (state) => {
	if (Iterable.isIterable(state)) return state.toJS();
	else return state;
};

const logger = createLogger({
	stateTransformer,
});

export const getStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const middleWares = [sagaMiddleware];
	if (getQuery()['logger']) { middleWares.push(logger) }
	const composables = [applyMiddleware(...middleWares)]
	const enhancer = compose(
		...composables
	);
	const store = createStore(
		reducers,
		undefined,
		enhancer
	);
	initSagas(sagaMiddleware);
	return store;
};
