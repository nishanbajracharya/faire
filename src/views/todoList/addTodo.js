import React from 'react';

import ICONS from '../../constants/icons';
import Input from '../../components/input';
import COLORS from '../../constants/colors';
import IconButton from '../../components/iconButton';

class AddTodo extends React.Component {

  render() {
    return <div className="add-todo-container">
      <Input placeholder="Add a task" />
      <IconButton name={ICONS.PLUS} buttonClassName="add-button" color={COLORS.PRIMARY}/>
      <IconButton name={ICONS.OPEN_IN_NEW} buttonClassName="open-button" color={COLORS.GRAY} size={24}/>
    </div>;
  }

}

export default AddTodo;
