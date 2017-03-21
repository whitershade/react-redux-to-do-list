import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionsToDoItems from '../../actions/ToDoItems';
import toDoItems from '../../containers/ToDoItemsAddNew';


function mapDispatchToProps(dispatch) {
  return {
    actionsToDoItems: bindActionCreators(actionsToDoItems, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(toDoItems);
