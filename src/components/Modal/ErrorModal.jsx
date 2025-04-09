import React from 'react';
import styles from './ErrorModal.module.css';
import Card from '../../UI/Card';
import Button from '../../UI/Button';

// portal 기능을 사용하기 위한 import
import ReactDom from 'react-dom';

// 모달 창을 띄울 때 알림창에 포커스를 주도록 뒷배경을 어둡게 만드는 용도.
const BackDrop = ({ onConfirm }) => {
  return <div onClick={onConfirm} className={styles.backdrop} />;
};

// 알림(메세지) 창
// 모달창의 범용적 사용을 위해, 사용하는 쪽에서 제목, 메세지, 클릭 이벤트 함수를 전달해라.
const ModalOverlay = ({ title, message, onConfirm }) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <>
      {/* React Portal은 기본적으로 div id="root"에 렌더링되는 컴포넌트들과 달리
        특정 위치에 요소를 렌더링 하고 싶을 때 사용합니다.
        컴포넌트가 어느 구조에서 호출 되는지는 신경쓰지 않고,
        createPortal 함수에서 지정한 위치에 무조건 렌더링 되는 것을 보장합니다.  */}

      {ReactDom.createPortal(
        <BackDrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root'),
      )}

      {ReactDom.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById('overlay-root'),
      )}
    </>
  );
};

export default ErrorModal;
