const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    console.log(action);
    if (action.type === 'INCREMENT') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}

export default reducer;
