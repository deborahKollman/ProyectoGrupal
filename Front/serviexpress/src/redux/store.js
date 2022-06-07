const applyMiddleware = require ('redux').applyMiddleware;
const configureStore = require ('@reduxjs/toolkit').configureStore;
const composeWithDevTools = require ('redux-devtools-extension').composeWithDevTools;
const thunk = require ('redux-thunk');
const rootReducer = require ('./reducer');



const STORE = configureStore({

    reducer: rootReducer,
    // middleware: applyMiddleware(thunk),
    devTools: composeWithDevTools(applyMiddleware(thunk)),

});

module.exports = STORE;

// const STORE = configureStore (
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );
 