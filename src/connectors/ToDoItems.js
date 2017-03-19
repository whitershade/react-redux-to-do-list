import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionsToDoItems from '../actions/ToDoItems';
import toDoItems from '../components/ToDoItems';

function mapStateToProps(state) {
  return {
    ToDoItems: state.ToDoItems,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionsToDoItems, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(toDoItems);
