import * as actionTypes from '../actions';
const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.STORE_RESULT) {
        return {
            ...state,
            results: state.results.concat({
                value: action.result,
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
