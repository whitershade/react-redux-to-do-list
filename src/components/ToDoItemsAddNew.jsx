/* eslint-disable no-underscore-dangle */

import React, { PropTypes } from 'react';

function ToDoItemsAddNew({ addButtonOnClick }) {
  // console.log(addButtonOnClick);
  let textInput = null;

  return (
    <div>
      Add New
      <br />
      <input
        type="text"
        ref={(input) => { textInput = input; }}
      />

      <button onClick={() => addButtonOnClick(textInput.value)}>Add</button>
    </div>
  );
}

ToDoItemsAddNew.propTypes = {
  addButtonOnClick: PropTypes.func.isRequired,
};

export default ToDoItemsAddNew;
