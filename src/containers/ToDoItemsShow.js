import React, { PropTypes, Component } from 'react';

import ToDoListItems from '../components/ToDoItemsShow.jsx';


export default class ToDoItems extends Component {
  componentDidMount() {
    this.props.actionsToDoItems.toDoItemsFetchData();
  }

  render() {
    const { ToDoItemsArray } = this.props;
    return (<ToDoListItems ToDoItemsArray={ToDoItemsArray} />);
  }
}

ToDoItems.propTypes = {
  actionsToDoItems: PropTypes.shape({ toDoItemsFetchData: React.PropTypes.func }).isRequired,
  ToDoItemsArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};
