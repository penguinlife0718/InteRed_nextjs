const { REACT_APP_URI = '/' } = process.env
const initialState = {
    channelUrl: `${REACT_APP_URI}/Info/?keyword=&country=&category=&page=0&subscriberCountFrom=1000&subscriberCountTo=2000000&recentAvgViewCountFrom=0&recentAvgViewCountTo=2000000&recentAvgEngageRateFrom=0&recentAvgEngageRateTo=7&monthSubscriberCountFrom=0&monthSubscriberCountTo=30000&monthSubscriberRateFrom=0&monthSubscriberRateTo=30&monthViewCountFrom=0&monthViewCountTo=35000000&monthViewRateFrom=0&monthViewRateTo=15`,
    videoUrl: `${REACT_APP_URI}/Video/?keyword=&country=&category=&subscriberCountFrom=1000&subscriberCountTo=2000000&viewCountFrom=5000&viewCountTo=2000000&engageRateFrom=0&engageRateTo=7`,
    channelSortCategory: '',
    channelSortRule: '',
    videoSortCategory: '',
    videoSortRule:'',
    page: '',
    channelKeyword: '',
    videoKeyword: '',
}
const InfoList = (state = initialState, action={}) => {  
    switch (action.type) {
        case 'CHANGE_CHANNELURL': {
            return {
                ...state,
                channelUrl: action.channelUrl,
                page: 0,
            }
        }
        case 'CHANGE_VIDEOLURL': {
            return {
                ...state,
                videoUrl: action.videoUrl
            }
        }
        case 'CHANGE_PAGE': {
            return {
                ...state,
                page: `page=${action.page}`
            }
        }
        case 'CHANGE_SORT': {
            return {
                ...state,
                channelSortCategory: action.channelSortCategory,
                channelSortRule: action.channelSortRule,
                videoSortCategory: action.videoSortCategory,
                videoSortRule: action.videoSortRule,
                page: 0,
            }
        }
        case 'CHANGE_CHANNELKEYWORD': {
            return {
                ...state,
                channelKeyword: action.channelKeyword,
            }
        }
        case 'CHANGE_VIDEOLKEYWORD': {
            return {
                ...state,
                videoKeyword: action.videoKeyword,
            }
        }
        default: 
            return state;
    } 
}
export default InfoList;