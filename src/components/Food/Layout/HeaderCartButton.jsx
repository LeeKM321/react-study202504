import React, { useContext, useEffect, useState } from 'react';
import styles from './HeaderCartButton.module.scss';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../store/cart-context';

const HeaderCartButton = ({ onShow }) => {
  // bump 애니메이션을 제어하는 상태 변수
  const [isBump, setIsBump] = useState(false);

  // css module에서 가져온 클래스들을 디스트럭쳐링 해서 사용.
  const { button, icon, badge, bump } = styles;

  const { items } = useContext(CartContext);

  const numberOfCart = items.reduce((accu, item) => accu + item.amount, 0);

  useEffect(() => {
    setIsBump(true);

    // 다음 담기 애니메이션을 보여주려면 bump 클래스 이름을 제거해야 된다.
    // 애니메이션 동작 시간이 0.3초이기 때문에 0.3초 이후에 클래스를 제거하자.
    const timer = setTimeout(() => {
      setIsBump(false);
    }, 300);

    return () => {
      // cleanup 함수를 이용해서 0.3초 이내에 새로운 렌더링이 발생하면
      // 기존의 timeout 함수를 취소하겠다. (애니메이션이 버벅거리는 것을 방지)
      clearTimeout(timer);
    };
  }, [items]); // items의 상태가 변경될 때마다 useEffect를 실행하겠다.

  return (
    <button className={`${button} ${isBump ? bump : ''}`} onClick={onShow}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{numberOfCart}</span>
    </button>
  );
};

export default HeaderCartButton;
