import * as types from '../constants/ToDoItems';

const initialState = {
  isLoading: false,
  data: [],
  error: false,
};

export default function ToDoItems(state = initialState, action = null) {
  switch (action.type) {
    case types.TO_DO_ITEMS_FETCH_LOADING:
      return Object.assign({}, state, { isLoading: true, error: false });
    case types.TO_DO_ITEMS_FETCH_LOADED:
      return Object.assign({}, state, { isLoading: false, data: action.data, error: false });
    case types.TO_DO_ITEMS_FETCH_ERROR:
      return Object.assign({}, state, { isLoading: false, data: action.data, error: true });
    case types.TO_DO_ITEMS_ADD_NEW_SENDED:
      return Object.assign({}, state, {
        isLoading: false,
        data: [...state.data, action.data],
        error: false,
      });
    default:
      return state;
  }
}
