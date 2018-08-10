import React from 'react';

import ICONS from '../../constants/icons';
import IconButton from '../../components/iconButton';

const TodoItem = ({
  name = '',
  description = '',
  isCompleted = false
}) => <li className={`todo-item ${isCompleted ? 'completed' : ''}`}>
  <span>{name}</span>
  <IconButton iconClassName="todo-checkbox" name={isCompleted ? ICONS.CHECKED :ICONS.UNCHECKED} size={24} />
</li>;

export default TodoItem;
