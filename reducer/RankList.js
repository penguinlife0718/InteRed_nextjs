const { REACT_APP_URI = '/' } = process.env
const RankList = (state = `${REACT_APP_URI}/Rank/`, action = {}) => {
    switch (action.type) {
        case 'CHANGE_URL': {
            return action.url
        }
        default:
            return state;
    }
}
export default RankList;