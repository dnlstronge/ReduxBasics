var redux = require("redux");
var counterReducer = function (state, action) {
    if (state === void 0) { state = { counter: 0 }; }
    if (action.type === "INCREMENT") {
        return {
            counter: state.counter + 1
        };
    }
    if (action.type === "DE-INCREMENT") {
        return {
            counter: state.counter - 1
        };
    }
    return state;
};
var store = redux.createStore(counterReducer);
// console.log(store.getState())
var counterSubscriber = function () {
    var latestState = store.getState();
    console.log(latestState);
};
// the reducer function will produce new state snapshots
store.subscribe(counterSubscriber);
store.dispatch({
    type: "INCREMENT"
});
store.dispatch({
    type: "DE-INCREMENT"
});
