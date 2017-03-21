import axios from 'axios';
import * as types from '../constants/ToDoItems';


function toDoItemsLoading() {
  return {
    type: types.TO_DO_ITEMS_FETCH_LOADING,
  };
}

function toDoItemsLoaded(json) {
  return {
    type: types.TO_DO_ITEMS_FETCH_LOADED,
    data: json,
  };
}

function toDoItemsError(json) {
  return {
    type: types.TO_DO_ITEMS_FETCH_ERROR,
    data: json,
  };
}

export function toDoItemsFetchData() {
  return (dispatch) => {
    dispatch(toDoItemsLoading());
    return axios({
      url: 'http://localhost:3012/todolist',
      timeout: 20000,
      method: 'get',
      responseType: 'json',
    }).then((response) => {
      dispatch(toDoItemsLoaded(response.data));
    }).catch((response) => {
      dispatch(toDoItemsError(response.data));
      // dispatch(pushState(null, '/error'));
    });
  };
}

function toDoItemsAddNewSending() {
  return {
    type: types.TO_DO_ITEMS_ADD_NEW_SENDING,
  };
}

function toDoItemsAddNewSended(json) {
  return {
    type: types.TO_DO_ITEMS_ADD_NEW_SENDED,
    data: json,
  };
}

function toDoItemsAddNewError(json) {
  return {
    type: types.TO_DO_ITEMS_ADD_NEW_ERROR,
    data: json,
  };
}

export function toDoItemsAddNew(text) {
  return (dispatch) => {
    dispatch(toDoItemsAddNewSending());
    return axios({
      url: 'http://localhost:3012/todolist',
      timeout: 20000,
      method: 'post',
      responseType: 'json',
      data: {
        text,
      },
    }).then((response) => {
      dispatch(toDoItemsAddNewSended(response.data));
    }).catch((response) => {
      dispatch(toDoItemsAddNewError(response.data));
      // dispatch(pushState(null, '/error'));
    });
  };
}
