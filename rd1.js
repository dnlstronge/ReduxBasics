var redux = require("redux");
var counterReducer = function (state, action) {
    if (state === void 0) { state = { counter: 0 }; }
    return {
        counter: state.counter + 1
    };
};
var store = redux.createStore(counterReducer);
var counterSubscriber = function () {
    var latestState = store.getState();
    console.log(latestState);
};
// the reducer function will produce new state snapshots
store.subscribe(counterSubscriber);
