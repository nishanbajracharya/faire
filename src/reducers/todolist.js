import * as todoActions from '../actions/todolist';

const INITIAL_STATE = {
  list: []
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case todoActions.ADD_TODO:
      return {...state, list: [action.payload, ...state.list]};
    default:
      return state;
  }
}

export default todoReducer;
