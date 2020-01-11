//const API_URL = 'http://localhost:3001/'

export const setData = guides => {
    return {
        type: 'GET_DATA',
        guides
    }
}

export const getData = () => {
    return dispatch => {
        return fetch('http://localhost:3001/')
        .then(res => res.json())
        .then(guides => dispatch(setData(guides)))
        .catch(error => console.log(error))
    }
}