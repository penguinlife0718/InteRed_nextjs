const initialState = {
    auth: '',
    plan: '',
    isActive: false,
    token: '',
    condition: 'signIn',
    email: '',
    password: '',
    // isEmailExsit: '',
    // isPasswordMatch: '',
}
const User = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'setAuth': {
            return {
                ...state,
                auth: action.auth,
            }
        }
        case 'setPlan': {
            return {
                ...state,
                plan: action.plan,
            }
        }
        case 'toggleUserField': {
            return {
                ...state,
                isActive: !state.isActive,
                condition: action.condition || '',
            }
        }
        case 'changeUserCondition': {
            return {
                ...state,
                condition: action.condition
            }
        }
        case 'setToken': {
            return {
                ...state,
                token: action.token
            }
        }
        case 'emailInput': {
            return {
                ...state,
                email: action.email,
            }
        }
        case 'passwordInput': {
            return {
                ...state,
                password: action.password,
            }
        }
        // case 'checkEmailExsit': {
        //     return {
        //         ...state,
        //         isEmailExsit: action.isEmailExsit,
        //     }
        // }
        default:
            return state;
    }
}
export default User;