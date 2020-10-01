import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const getModalStyle = style => ({
  overlay: {
    backgroundColor: null,
    ...style.overlay
  },
  content: {
    top: null,
    left: null,
    right: null,
    bottom: null,
    border: null,
    padding: null,
    position: null,
    background: null,
    borderRadius: null,
    ...style.content
  }
});

const AppModal = ({
  children,
  isOpen = false,
  contentLabel = '',
  onAfterOpen = f => f,
  onRequestClose = f => f,
  styles = { overlay: {}, content: {} },
}) => <Modal
  isOpen={isOpen}
  closeTimeoutMS={250}
  onAfterOpen={onAfterOpen}
  contentLabel={contentLabel}
  style={getModalStyle(styles)}
  onRequestClose={onRequestClose}
  bodyOpenClassName="ReactModal__Body--open"
>
  {children}
</Modal>;

export default AppModal;
