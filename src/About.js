import React from 'react';
// react-router-dom v6 이전
// import qs from 'qs';
// react-router-dom v6 이후
import { useSearchParams } from 'react-router-dom';

const About = ({location}) => {
  // react-router-dom v6 이전
  // const query = qs.parse(location.search, {
  //   // 문자열 맨 앞의 ?를 생략합니다.
  //   ignoreQueryPrefix: true
  // });
  // // 쿼리의 파싱 결과 값은 문자열입니다.
  // // boolean 자료형으로 볼때 1과 true는 같은 값이다.
  // // 쿼리는 값을 항상 문자열로 받아오기 때문에 '1'과 'true'는 다른값으로 인식한다.
  // // 그렇기 때문에 숫자로 값을 받아오고 싶으면 parseInt를 꼭 사용해 숫자로 변환해 줘야 한다.
  // // 쿼리 중 detail의 값이 'true'이면 showDetail = true
  // const showDetail = query.detail === 'true';

  // react-router-dom v6 이후
  const [searchParams] = useSearchParams();
  const showDetail = searchParams.get('detail') === 'true'

  return (
    <div>
      <h1>Intro</h1>
      <p>This project is practice for basic of react-router</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요</p>}
    </div>
  );
};

export default About;