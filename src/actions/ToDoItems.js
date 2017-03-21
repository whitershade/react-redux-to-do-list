import axios from 'axios';
import * as types from '../constants/ToDoItems';


function requestData() {
  return {
    type: types.FETCH_TO_DO_ITEMS_LOADING,
  };
}

function receiveData(json) {
  return {
    type: types.FETCH_TO_DO_ITEMS_LOADED,
    data: json,
  };
}

function receiveError(json) {
  return {
    type: types.FETCH_TO_DO_ITEMS_ERROR,
    data: json,
  };
}

export function fetchData() {
  return (dispatch) => {
    dispatch(requestData());
    return axios({
      url: 'http://localhost:3012/todolist',
      timeout: 20000,
      method: 'get',
      responseType: 'json',
    }).then((response) => {
      dispatch(receiveData(response.data));
    }).catch((response) => {
      dispatch(receiveError(response.data));
      // dispatch(pushState(null, '/error'));
    });
  };
}
