import { combineReducers } from 'redux';

import modal from './modal';
import todo from './todolist';

export default combineReducers({
  todo,
  modal,
});
