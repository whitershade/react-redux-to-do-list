/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';

// import ToDoFilters          from '../connectors/ToDoConnectors/ToDoFilters'
// import ToDoAddNew           from '../connectors/ToDoConnectors/ToDoAddNew'
import ToDoItemsShow from '../connectors/ToDoItems/ToDoItemsShow';
import ToDoItemsAddNew from '../connectors/ToDoItems/ToDoItemsAddNew';
// // import ToDoProgressBar      from '../connectors/ToDoConnectors/ToDoProgressBar'


export default class ToDo extends Component {
  render() {
    return (
      <div className="todo">
        Main
        <ToDoItemsShow />
        <ToDoItemsAddNew />
      </div>

    );
  }
}
