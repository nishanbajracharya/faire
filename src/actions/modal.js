export const OPEN_MODAL = 'OPEN_MODAL';

export const openModal = (open = true) => ({
  type: OPEN_MODAL,
  payload: {
    open,
  },
});
