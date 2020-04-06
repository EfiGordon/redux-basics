export const INCREMENT = 'INCREMENT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = (payload) => {
    return {
        type: INCREMENT,
        value: payload
    }
}
export const saveResult = (res) => {
    return {
        type: STORE_RESULT,
        result: res
    }
}
export const storeResult = (res) => {
    return (next) => {
        setTimeout(() => {
            next(saveResult(res));
        }, 1234);
    }


}

export const deleteResult = (payload) => {
    return {
        type: DELETE_RESULT,
        id: payload
    }
}