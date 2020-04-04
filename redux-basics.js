const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}
// Reducer - Updates the store.
const rootReducer = (currentState = initialState, action) => {
    if(action.type === 'INC_COUNTER') {
        return {
            ...currentState,
            counter: currentState.counter + 1
        }
    }

    if(action.type === 'ADD_COUNTER') {
        return {
            ...currentState,
            counter: currentState.counter + action.value
        }
    }
    return currentState;
}

// Store - The state of ur whole application is stored in an object tree within a single store.
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => { 
    console.log('[Subscription]', store.getState());
})

// Dispatching Action
store.dispatch({ type: 'INC_COUNTER'});
store.dispatch({ type: 'ADD_COUNTER', value: 10});
//console.log(store.getState());

