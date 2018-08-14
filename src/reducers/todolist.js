import * as todoActions from '../actions/todolist';

const INITIAL_STATE = {
  list: []
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case todoActions.ADD_TODO:
      return {...state, list: [action.payload, ...state.list]};
    case todoActions.TOGGLE_TODO:
      return {...state, list: state.list.map((item, index) => {
        if (index === action.payload.id) {
          return {
            ...item,
            isCompleted: !item.isCompleted
          };
        }
        return item;
      })}
    default:
      return state;
  }
}

export default todoReducer;
