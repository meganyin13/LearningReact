import { createStore, combineReducers } from 'redux';
import { colors, sort } from './reducers';

const store = createStore(
    combineReducers({ colors, sort }),
    (localStorage['redux-store']) ?
        JSON.parse(localStorage['redux-store']) :
        {}
);

store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(store.getState())
});

export default store;
