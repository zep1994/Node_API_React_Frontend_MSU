export default (state = [], action) => {
    switch(action.type) {
        case 'GET_DATA':
            return action.guides 
        default:
            return state 
    }
}