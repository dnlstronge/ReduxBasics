const redux = require("redux")


const counterReducer = (state = {counter: 0}, action) =>  {
    return {
        counter: state.counter + 1
    }
}


const store = redux.createStore(counterReducer)
// console.log(store.getState())
const counterSubscriber = () => {
    const latestState = store.getState()
    console.log(latestState)
}
// the reducer function will produce new state snapshots
store.subscribe(counterSubscriber)
store.dispatch({
    type: "INCREMENT",
})