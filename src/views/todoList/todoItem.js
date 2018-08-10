import React from 'react';

import ICONS from '../../constants/icons';
import IconButton from '../../components/iconButton';

const TodoItem = ({
  name = '',
  onClick = f => f,
  description = '',
  isCompleted = false
}) => <li className={`todo-item ${isCompleted ? 'completed' : ''}`}>
  <span>{name}</span>
  <IconButton iconClassName="todo-checkbox" name={isCompleted ? ICONS.CHECKED :ICONS.UNCHECKED} size={24} onClick={onClick}/>
</li>;

export default TodoItem;
