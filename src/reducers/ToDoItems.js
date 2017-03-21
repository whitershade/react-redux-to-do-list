import * as types from '../constants/ToDoItems';

const initialState = {
  isLoading: false,
  data: [],
  error: false,
};

export default function ToDoItems(state = initialState, action = null) {
  switch (action.type) {
    case types.FETCH_TO_DO_ITEMS_LOADING:
      return Object.assign({}, state, { isLoading: true, error: false });
    case types.FETCH_TO_DO_ITEMS_LOADED:
      return Object.assign({}, state, { isLoading: false, data: action.data, error: false });
    case types.FETCH_TO_DO_ITEMS_ERROR:
      return Object.assign({}, state, { isLoading: false, data: action.data, error: true });
    default:
      return state;
  }
}
