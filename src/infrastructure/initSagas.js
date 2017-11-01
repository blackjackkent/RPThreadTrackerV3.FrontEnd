import * as sagas from './sagas';

const initSagas = (sagaMiddleware) => {
	Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};
export default initSagas;
