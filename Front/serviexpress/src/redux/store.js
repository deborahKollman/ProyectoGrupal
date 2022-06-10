import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer.js';
 
import { composeWithDevTools } from 'redux-devtools-extension';

const STORE = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default STORE;

// const STORE = configureStore (
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );
 