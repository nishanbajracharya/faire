import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './todoItem';
import EmptyList from './emptyList';

const TodoList = ({
  list = [],
  sticky = false,
  onClick = f => f
}) => <ul className={`todolist ${sticky ? 'sticky' : ''}`}>
  {
    list && list.length > 0 ? list.map((item, key) => <TodoItem key={key} {...item} onClick={() => onClick(item)}/>) : <EmptyList />
  }
</ul>;

TodoList.propTypes = {
  list: PropTypes.array
}

export default TodoList;
