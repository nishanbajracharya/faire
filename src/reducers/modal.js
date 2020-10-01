import * as modalActions from '@/actions/modal';

const INITIAL_STATE = {
  open: false
};

const openModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case modalActions.OPEN_MODAL:
      return { ...state, open: action.payload.open };
    default:
      return state;
  }
};

export default openModalReducer;
