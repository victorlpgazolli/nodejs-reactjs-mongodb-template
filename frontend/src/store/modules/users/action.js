
import {
    USER_CREATE_SUCCESS,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_RESET
} from './reducer';
import api from '../../../services/api.js'
import storage from 'redux-persist/lib/storage';
export function fetchLoginSuccess(user) {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: {
            user
        }
    };
}
export function fetchUserCreateSuccess(user) {
    return {
        type: USER_CREATE_SUCCESS,
        payload: {
            user
        }
    };
}

export const createUser = (data) => async dispatch => {
    const { username, password } = data;
    /* API REQUEST  */
    await storage.setItem("@token", JSON.stringify({ token: "TOKEN FROM API" }));
    dispatch(fetchUserCreateSuccess({
        username,
        password,
    }));
};


export const login = data => async dispatch => {

    await api.post("/user/login", data)
        .then(result => {
            const user = result?.data ?? false
            if (user) {
                dispatch(fetchLoginSuccess(
                    user
                ));
            }
        })
        .catch(err => {
            console.log("error:" + err);
        })
};

export function logout() {
    return {
        type: USER_RESET
    };
}