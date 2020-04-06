export const INCREMENT = 'INCREMENT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = (payload) => {
    return {
        type: INCREMENT,
        value: payload
    }
}

export const storeResult = (payload) => {
    return {
        type: STORE_RESULT,
        result: payload
    }
}

export const deleteResult = (payload) => {
    return {
        type: DELETE_RESULT,
        id: payload
    }
}