import locale from '../static/languages/languages'

const initialState = {
    ...locale.en,
    localeLanguage: 'en',
}
const Messages = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'onChangeLanguage': {
            return {
                ...locale[action.language],
                localeLanguage: action.language
            }
        }
        default:
            return state;
    }
}
export default Messages;