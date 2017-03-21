/* eslint-disable no-underscore-dangle */

import React, { PropTypes } from 'react';

function ToDoItems({ ToDoItemsArray }) {
  return (
    <div>
      ToDoItems
      <ul>
        { ToDoItemsArray.map(item => (
          <li key={item._id}>{item.text}</li>))
        }
      </ul>
    </div>
  );
}

ToDoItems.propTypes = {
  ToDoItemsArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ToDoItems;
