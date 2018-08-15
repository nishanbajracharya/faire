import React from 'react';
import { connect } from 'react-redux';

import ICONS from '../../constants/icons';
import Input from '../../components/input';
import Button from '../../components/button';
import IconButton from '../../components/iconButton';
import * as todoActions from '../../actions/todolist';

class AddTodoExpanded extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      desc: ''
    };
  }

  setName = value => this.setState({
    name: value
  })

  setDesc = value => this.setState({
    desc: value
  })

  addTodo = () => {
    this.props.createTodo({
      name: this.state.name,
      desc: this.state.desc
    });

    this.props.onClose();
  }

  render() {
    return <div className="add-todo-expanded-modal">
      <div className="modal-header">
        Create a new task
        <IconButton name={ICONS.CLOSE} onClick={this.props.onClose} />
      </div>
      <Input onInput={e => this.setName(e.target.value)} placeholder="Task name"/>
      <Input onInput={e => this.setDesc(e.target.value)} placeholder="Task description" multiline/>
      <div className="modal-footer">
        <Button label="Cancel" onClick={this.props.onClose}/>
        <Button label="Add Task" primary onClick={() => this.addTodo()}/>
      </div>
    </div>;
  }
}

AddTodoExpanded.defaultProps = {
  onClose: f => f
}

export default connect(null, dispatch => ({
  createTodo: todo => dispatch(todoActions.addTodo(todo))
}))(AddTodoExpanded);
