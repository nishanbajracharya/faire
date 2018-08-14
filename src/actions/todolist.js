export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = ({
  name,
  desc,
  isCompleted = false,
}) => ({
  type: ADD_TODO,
  payload: {
    name, desc, isCompleted
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {
    id
  }
});
