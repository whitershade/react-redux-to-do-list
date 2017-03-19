import React, { PropTypes, Component } from 'react';


export default class ToDoItems extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.actions.fetchData();
  }

  render() {
    return (
      <div>
        ToDoItems
        <ul>
          { this.props.ToDoItems.data.map(item => (
            <li key={item._id}>{item.text}</li>))
          }
        </ul>
      </div>
    );
  }
}

ToDoItems.PropTypes = {
  stateFilter: PropTypes.object.isRequired,
};
