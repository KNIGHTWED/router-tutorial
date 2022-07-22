// History가 안되는 이유
// 업데이트 되면서 컴포넌트가 받는 props는 불가능
// useHistory -> useNavigate
import React, { Component } from 'react';

class HistorySample extends Component {
  // 뒤로 가기
  handleGoBack = () => {
    this.props.history.goBack();
  };

  // 홈으로 이동
  handleGoHome = () => {
    this.props.history.push('/');
  };

  componentDidMount() {
    this.unblock = this.props.history.block('정말 떠나실 건가요?');
  }

  // 컴포넌트가 언마운트되면 질문을 멈춤
  componentWillUnmount() {
    if(this.unblock){
      this.unblock();
    }
  }


  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로가기</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    );
  }
}

export default HistorySample;