// useHistory -> useNavigate
import React from 'react';
import { useNavigate } from 'react-router-dom';


// useConfirm 을 사용하는 이유
// componentDidMount를 이용해 페이지에 변화가 생길 때마다
// 페이지를 나갈 것인지 물어보려고 했지만 함수형 컴포넌트에서는 사용 불가
// 클래스형 컴포넌트에서 사용하면 되지만 더이상 클래스형 컴포넌트에서 props를 이용한 history는 활용할 수 없다.
// react-router-dom 이 v5 에서 v6로 업데이트 되면서 history 대신 useNavigate 사용

const useConfirm = (message = "", onConfirm, onCancel) => {
  if(!onConfirm || typeof onConfirm !== "function"){
    return;
  }
  if(onCancel && typeof onCancel !== "function"){
    return;
  }
  const confirmAction = () => {
    if(window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

const HistorySample = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }
  const goHome = () => {
    navigate('/');
  }

  const stayHere = () => {
    console.log('I will stay here.')
  }

  // 뒤로 가기
  const handleGoBack = useConfirm("정말 나가시겠습니까?", goBack, stayHere);

  // 홈으로 이동
  const handleGoHome = useConfirm("정말 나가시겠습니까?", goHome, stayHere);

  // 컴포넌트가 언마운트되면 질문을 멈춤
  // componentWillUnmount() {
  //   if(this.unblock){
  //     this.unblock();
  //   }
  // }

  return (
    <div>
      <button onClick={handleGoBack}>뒤로가기</button>
      <button onClick={handleGoHome}>홈으로</button>
    </div>
  );
};

export default HistorySample;