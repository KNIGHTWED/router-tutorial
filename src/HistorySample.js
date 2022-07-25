// useHistory -> useNavigate
import React from 'react';
import { useNavigate } from 'react-router-dom';

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