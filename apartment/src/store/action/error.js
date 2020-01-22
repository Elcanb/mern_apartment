import { GET_ERRORS, CLEAR_ERRORS } from "./types";

export const returnError = (msg, status) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status }
    };
};

export const clearError = () => {
    return {
        type: CLEAR_ERRORS
    };
};