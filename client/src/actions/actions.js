import axios from 'axios'

function setArticleDetails(items) {
    return {
      type: 'GET_DATA',
      payload: items
    };
  }

export function getData() {
    return function(dispatch) {
      return axios.get("https://localhost:3001/guides")
        .then(({ items }) => {
        dispatch(setArticleDetails(items));
      });
    };
  }

export const addGuide = item => {
    return {
        type: 'CREATE_GAME',
        item
    }
}

export const createGuide = (item, routerHistory) => {
    return dispatch => {
        return axios.get('http://localhost:3000/guides', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({item: item})
        })
        .then(res => res.json())
        .then(item => {
            dispatch(addGuide(item))
        })
        .catch(error => {
            console.log(error)
        })
    }
}
