import Hello from './Example';

// 함수형 컴포넌트: 최근 리액트 선호 방식
function Greet() {
  return (
    <div>
      <a href='https://www.naver.com'>네이버로 이동!</a>
      <Hello />
    </div>
  );
}

export default Greet;
