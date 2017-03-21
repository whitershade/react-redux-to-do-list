import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionsToDoItems from '../../actions/ToDoItems';
import toDoItems from '../../containers/ToDoItemsShow';

function mapStateToProps(state) {
  return {
    ToDoItemsArray: state.ToDoItems.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionsToDoItems: bindActionCreators(actionsToDoItems, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(toDoItems);
