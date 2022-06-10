import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "../redux/reducer";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});



/* const store = configureStore({

    reducer: rootReducer,
     middleware: applyMiddleware(thunk),
    //devTools: composeWithDevTools(applyMiddleware(thunk)),

}); */

export default store;

// const STORE = configureStore (
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );
 