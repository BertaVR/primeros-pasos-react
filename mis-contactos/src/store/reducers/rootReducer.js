const {combineReducers} = require('redux');
const { default: contactosReducer } = require('./contactosReducer');

const rootReducer = combineReducers(
    {
        // estado : reducer
        contactosState: contactosReducer,
        // ...
    }
);

export default rootReducer;