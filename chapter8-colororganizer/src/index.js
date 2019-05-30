import { color, colors, sort } from './reducers';
import C from './constants'
import store from './store'
import uuid from 'uuid'
import { removeColor, rateColor, sortColors, addColor } from "./actions";
import storeFactory from './storefactory';

const action = {
    type: "ADD_COLOR",
    id: "4243e1p0-9abl-4e90-95p4-8001l8yf3036",
    color: "#0000FF",
    title: "Big Blue",
    timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800(PST)"
};

console.log( color({}, action) );

const existingColor = {
    id: "128e1p5-3abl-0e52-33p0-8401l8yf3036",
    title: "Big Blue",
    color: "#0000FF",
    timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)",
    rating: 0
};
const existing_action = {
    type: "RATE_COLOR",
    id: "4243e1p0-9abl-4e90-95p4-8001l8yf3036",
    rating: 4
};

console.log( color(existingColor, existing_action) );

const currentColors = [
    {
        id: "9813e2p4-3abl-2e44-95p4-8001l8yf3036",
        title: "Berry Blue",
        color: "#000066",
        rating: 0,
        timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
    }
];
const current_action = {
    type: "ADD_COLOR",
    id: "5523e7p8-3ab2-1e35-95p4-8001l8yf3036",
    title: "Party Pink",
    color: "#F142FF",
    timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
};

console.log( colors(currentColors, current_action) );

const state = "SORTED_BY_DATE";
const sort_action = {
    type: C.SORT_COLORS,
    sortBy: "SORTED_BY_TITLE"
};
console.log( sort(state, sort_action) );

console.log( store.getState().colors.length );
console.log( store.getState().sort );

console.log(
    "Length of colors array before ADD_COLOR",
    store.getState().colors.length
);

store.dispatch({
    type: "ADD_COLOR",
    id: "2222e1p5-3abl-0p523-30e4-8001l8yf2222",
    title: "Party Pink",
    color: "#F142FF",
    timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
});

console.log(
    "Length of colors array after ADD_COLOR",
    store.getState().colors.length
);

console.log(
    "Color rating before RATE_COLOR",
    store.getState().colors[3].rating
);

store.dispatch({
    type: "RATE_COLOR",
    id: "2222e1p5-3abl-0p523-30e4-8001l8yf2222",
    rating: 5
});

console.log(
    "Color rating after RATE_COLOR",
    store.getState().colors[3].rating
);

store.subscribe(() =>
    console.log('color count:', store.getState().colors.length)
);

store.dispatch({
    type: "ADD_COLOR",
    id: "2222e1p5-3abl-0p523-30e4-8001l8yf2222",
    title: "Party Pink",
    color: "#F142FF",
    timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
});
store.dispatch({
    type: "ADD_COLOR",
    id: "3315e1p5-3abl-0p523-30e4-8001l8yf2412",
    title: "Big Blue",
    color: "#0000FF",
    timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
});
store.dispatch({
    type: "RATE_COLOR",
    id: "2222e1p5-3abl-0p523-30e4-8001l8yf2222",
    rating: 5
});
store.dispatch({
    type: "REMOVE_COLOR",
    id: "3315e1p5-3abl-0p523-30e4-8001l8yf2412"
});

const logState = () => console.log('next state', store.getState());

const unsubscribeLogger = store.subscribe(logState);

unsubscribeLogger();

console.log('current color count', store.getState().colors.length);
console.log('current state', store.getState());
store.dispatch({
    type: "ADD_COLOR",
    id: uuid.v4(),
    title: "Party Pink",
    color: "#F142FF",
    timestamp: new Date().toString()
});
console.log('current color count', store.getState().colors.length);

store.dispatch( removeColor("3315e1p5-3abl-0p523-30e4-8001l8yf2412") );
store.dispatch( rateColor("441e0p2-9ab4-0p523-30e4-8001l8yf2412", 5) );

store.dispatch( sortColors("title") );

store.dispatch( addColor("#F142FF", "Party Pink") );

const store_factory = storeFactory(true);

console.log(store_factory);
store_factory.dispatch( addColor("#FFFFFF","Bright White") );
store_factory.dispatch( addColor("#00FF00","Lawn") );
store_factory.dispatch( addColor("#0000FF","Big Blue") );
