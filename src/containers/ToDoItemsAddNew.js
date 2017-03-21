import React, { PropTypes, Component } from 'react';

import ToDoItemsAddNew from '../components/ToDoItemsAddNew.jsx';


export default class ToDoItems extends Component {
  constructor(props) {
    super(props);

    this.addButtonOnClick = this.addButtonOnClick.bind(this);
  }

  addButtonOnClick(text) {
    this.props.actionsToDoItems.toDoItemsAddNew(text);
  }

  render() {
    return (<ToDoItemsAddNew addButtonOnClick={this.addButtonOnClick} />);
  }
}

ToDoItems.propTypes = {
  actionsToDoItems: PropTypes.shape({ toDoItemsAddNew: React.PropTypes.func }).isRequired,
};
