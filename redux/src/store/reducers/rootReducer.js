import { userReducer } from './userReducer';

const {combineReducers} = require('redux');
const { default: filterReducer } = require('./filterReducer');
const { default: todosReducer } = require('./todosReducer');

const rootReducer = combineReducers(
    {
        // estado : reducer
        todosState: todosReducer,
        filterState: filterReducer,
        userState: userReducer,
        // ...
    }
);

export default rootReducer;