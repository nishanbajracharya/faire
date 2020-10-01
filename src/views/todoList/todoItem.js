import React from 'react';

import ICONS from '../../constants/icons';
import IconButton from '../../components/iconButton';

const TodoItem = ({
  name = '',
  desc = '',
  onClick = (f) => f,
  isCompleted = false,
}) => (
  <li className={`todo-item ${isCompleted ? 'completed' : ''}`}>
    <p>
      {name}
      <span className="todo-desc">{desc}</span>
    </p>
    <IconButton
      iconClassName="todo-checkbox"
      name={isCompleted ? ICONS.CHECKED : ICONS.UNCHECKED}
      size={24}
      onClick={onClick}
    />
  </li>
);

export default TodoItem;
