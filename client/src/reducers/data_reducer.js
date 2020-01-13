export default (state ={}, action) => {
    switch(action.type) {
        case 'GET_DATA':
            return {
                ...state,
                items: action.payload
            }
            default:
                return state
    }
}
