
export const USER_LOGIN_SUCCESS = 'user_login_success'
export const USER_LOGIN_REQUEST = 'user_login_request'
export const USER_LOGIN_FAIL = 'user_login_fail'
export const USER_CREATE_SUCCESS = 'user_create_success'
export const USER_RESET = 'user_reset'


const INITIAL_STATE = {
    user: {}
};



export default function users(state = INITIAL_STATE, action) {

    const actionTypes = {
        user_login_success() { return { ...state, user: action.payload.user } },
        user_reset() { return { ...state, user: {} } },
    }

    return actionTypes?.[action.type]?.() ?? state
}