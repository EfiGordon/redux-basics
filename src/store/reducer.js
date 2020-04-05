import * as actionTypes from './actions';
const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    console.log(action);
    if (action.type === actionTypes.INCREMENT) {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }

    if (action.type === actionTypes.STORE_RESULT) {
        return {
            ...state,
            results: state.results.concat({
                value: state.counter,
                id: new Date()
            }) // We not use results.push() because it is mutates the original object and we dont want to do this - everything should be immutable! concat returns a new array :)
        }
    }

    if (action.type === actionTypes.DELETE_RESULT) {
        const deletedId = action.id;
        const newResultsArray = state.results.filter((item) => {
            return item.id !== deletedId;
        })
        return {
            ...state,
            results: newResultsArray
        }
    }
    return state;
}

export default reducer;
