import React from 'react';

import ICONS from '../../constants/icons';
import Input from '../../components/input';
import COLORS from '../../constants/colors';
import IconButton from '../../components/iconButton';

class AddTodo extends React.Component {

  render() {
    return <div className="add-todo-container">
      <Input placeholder="Add a task" onInput={e => this.props.onInput(e.target.value)} setRef={c => this.input = c}/>
      <IconButton name={ICONS.PLUS} buttonClassName="add-button" color={COLORS.PRIMARY} onClick={() => {
        this.props.add();
        console.log(this.input);
        window.input = this.input;
        this.input.value = '';
       }} />
      <IconButton name={ICONS.OPEN_IN_NEW} buttonClassName="open-button" color={COLORS.GRAY} size={24} />
    </div>;
  }
}

AddTodo.defaultProps = {
  add: f => f,
  onInput: f => f,
}

export default AddTodo;
