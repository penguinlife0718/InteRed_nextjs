const Info = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_INFO_DATA' :{
            return action.InfoData
        }
        default: return state;        
    }
}
export default Info;