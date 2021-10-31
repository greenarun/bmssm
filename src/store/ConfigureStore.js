// // @flow
// import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
// import { reducer as reduxFormReducer } from "redux-form";

// import reducers from "./Reducers";
// import sagas from "./sagas";

// export default function configureStore(
//   reactotroneStoreActions,
//   INITIAL_STATE = {}
// ) {
//   const middleware = [];
//   const sagaMiddleware = createSagaMiddleware();

//   middleware.push(sagaMiddleware);
//   const store = (window.devToolsExtension
//     ? window.devToolsExtension()(createStore)
//     : createStore)(reducers, INITIAL_STATE, applyMiddleware(...middleware));

//   // const store = (reactotroneStoreActions || createStore)(
//   //   reducers,
//   //   INITIAL_STATE,
//   //   applyMiddleware(...middleware)
//   // );
//   sagaMiddleware.run(sagas);

//   return store;
// }

// @flow
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './Reducers';
import sagas from './sagas';
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore(composeWithDevTools, INITIAL_STATE = {}) {
    const middleware = [];
    const sagaMiddleware = createSagaMiddleware();

    middleware.push(sagaMiddleware);

    const store = (composeWithDevTools || createStore)(reducers, INITIAL_STATE, applyMiddleware(...middleware));
    sagaMiddleware.run(sagas);

    return store;
}
