/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';

// import ToDoFilters          from '../connectors/ToDoConnectors/ToDoFilters'
// import ToDoAddNew           from '../connectors/ToDoConnectors/ToDoAddNew'
import ToDoItems from '../connectors/ToDoItems';
// // import ToDoProgressBar      from '../connectors/ToDoConnectors/ToDoProgressBar'


export default class ToDo extends Component {
  render() {
    return (
      <div className="todo">
        Main
        <ToDoItems />
      </div>

    );
  }
}
