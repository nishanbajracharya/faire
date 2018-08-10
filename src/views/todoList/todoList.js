import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './todoItem';

const TodoList = ({
  list = [],
  onClick = f => f
}) => <ul className="todolist">
  {
    list.map((item, key) => <TodoItem key={key} {...item} onClick={() => onClick(item)}/>)
  }
</ul>;

TodoList.propTypes = {
  list: PropTypes.array
}

export default TodoList;
