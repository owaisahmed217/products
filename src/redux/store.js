import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Correct import for named export
import rootReducer from './reducers'; // Ensure this path is correct

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;


