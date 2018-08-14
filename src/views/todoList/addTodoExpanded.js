import React from 'react';

import AddTodo from './addTodo';
import ICONS from '../../constants/icons';
import IconButton from '../../components/iconButton';

class AddTodoExpanded extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      desc: ''
    };
  }

  render() {
    return <div className="add-todo-expanded-modal">
      <div className="modal-header">
        Create a new task
        <IconButton name={ICONS.CLOSE} onClick={this.props.onClose} />
      </div>
    </div>;
  }
}

AddTodoExpanded.defaultProps = {
  onClose: f => f
}

export default AddTodoExpanded;
