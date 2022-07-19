const {combineReducers} = require('redux');
const { default: filterReducer } = require('./filterReducer');
const { default: todosReducer } = require('./todosReducer');

const rootReducer = combineReducers(
    {
        // estado : reducer
        todosState: todosReducer,
        filterState: filterReducer
        // ...
    }
);

export default rootReducer;