import React from 'react';
import styles from './CartModal.module.scss';
import ReactDOM from 'react-dom';

const BackDrop = () => {
  return <div className={styles.backdrop} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const CartModal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop />,
        document.getElementById('backdrop-root'),
      )}

      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById('overlay-root'),
      )}
    </>
  );
};

export default CartModal;
