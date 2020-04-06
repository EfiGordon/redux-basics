import * as actionTypes from '../actions/actions';
const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    console.log(action);
    if (action.type === actionTypes.INCREMENT) {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}

export default reducer;
