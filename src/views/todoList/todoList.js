import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './todoItem';

const TodoList = ({
  list = []
}) => <ul className="todolist">
  {
    list.map((item, key) => <TodoItem key={key} {...item} />)
  }
</ul>;

TodoList.propTypes = {
  list: PropTypes.array
}

export default TodoList;
