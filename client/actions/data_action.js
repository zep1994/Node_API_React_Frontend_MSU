const API_URL = 'https://lgapi-us.libapps.com/1.1/guides/577970?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6'

export const setData = games => {
    return {
        type: 'GET_DATA',
        data
    }
}

export const getData = () => {
    return dispatch => {
        return fetch(`$API_URL}/data`)
        .then(res => res.json())
        .then(data => dispatch(setData(data)))
        .catch(error => console.log(error))
    }
}