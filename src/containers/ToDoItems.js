import React, { PropTypes, Component } from 'react';

import ToDoListItems from '../components/ToDoItems.jsx';


export default class ToDoItems extends Component {
  componentDidMount() {
    this.props.actions.fetchData();
  }

  render() {
    const { ToDoItemsArray } = this.props;
    return (<ToDoListItems ToDoItemsArray={ToDoItemsArray} />);
  }
}

ToDoItems.propTypes = {
  actions: PropTypes.shape({ fetchData: React.PropTypes.string }).isRequired,
  ToDoItemsArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};
