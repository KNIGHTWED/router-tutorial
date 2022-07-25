import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
  let location = useLocation();

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Intro</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<About />} />
        <Route path="/profiles/*" element={<Profiles />} />
        <Route path="/history" element={<HistorySample />}/>
        <Route path={"*"} element={
          <div>
            <h2>이 페이지는 존재하지 않습니다:</h2>
            <p>{location.pathname}</p>
          </div>
        }
        />

        {/* <Route path={["/about", "/info"]} element={<About />} /> */}
      </Routes>
    </div>
  );
};
// exact={true} 없어도 중복되지 않는다...
// Link 컴포넌트는 a태그와 비슷한 기능
// a태그로 페이지를 전환하면 애플리케이션의 모든 상태를 날려버린다.
// Link 컴포넌트는 a태그를 사용하지만 페이지가 전환되지 않고 페이지의 주소만 변경해준다.
// 애플리케이션의 모든 상태가 보존되어 있어 되돌아갔을 때 다시 렌더링 하지 않아도 된다. 페이지 전환 방지 기능.
// <Route path={["/about", "/info"]} element={<About />} /> 구동 안됨...
// 파라미터와 쿼리
// 파라미터는 특정 아이디 혹은 이름을 사용하여 조회할 때
// 쿼리는 키워드를 검색하거나 페이지에 필요한 옵션을 전달할 때
// 차이점: 수식이 들어가고 안들어가고의 차이?
// /Profiles/:username 안됨.
export default App;