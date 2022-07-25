# SPA

**react-router-dom v6 기준**

Single Page Application
한 개의 페이지로 이루어진 애플리케이션

exact={true} == exact == path="/*"


Link 컴포넌트는 a태그와 비슷한 기능

```javascript
<Link to="URL">title</Link>
```

a태그로 페이지를 전환하면 애플리케이션의 모든 상태를 날려버린다.
Link 컴포넌트는 a태그를 사용하지만 페이지가 전환되지 않고 페이지의 주소만 변경해준다.
애플리케이션의 모든 상태가 보존되어 있어 되돌아갔을 때 다시 렌더링 하지 않아도 된다. 페이지 전환 방지 기능.


```javascript
// App.js
import { Routes, Routes } from "react-router-dom";


<Routes>
  <Route path={["/about", "/info"]} element={<About />} />
</Routes>
```
`<Route />` 를 `<Routes></Routes>` 로 감싸줘야 한다.

## 파라미터와 쿼리

파라미터는 특정 아이디 혹은 이름을 사용하여 조회할 때
쿼리는 키워드를 검색하거나 페이지에 필요한 옵션을 전달할 때
차이점: 수식이 들어가고 안들어가고의 차이?

파라미터 예시: /profiles/velopert

쿼리 예시: /about?details=true

`react-router-dom v6` 부터는 match 대신 useParams을 사용한다.
```javascript
import { useParams } from "react-router-dom";
// v6 로 업데이트 된 후부터  match.params 대신 useParams() 사용한다.
```

path는 `path="/profile/:username"` -> `path=":username"`, 상대경로로 지정.

URL 쿼리

location의 형태
```
{
  "pathname" : "/about",
  "search" : "?detail=true",
  "hash" : " "
}
```

쿼리의 파싱 결과 값은 문자열이다.

boolean 자료형으로 볼때 1과 true는 같은 값이다.

쿼리는 값을 항상 문자열로 받아오기 때문에 '1'과 'true'는 다른값으로 인식한다.

그렇기 때문에 숫자로 값을 받아오고 싶으면 parseInt를 꼭 사용해 숫자로 변환해 줘야 한다.

쿼리 중 detail의 값이 'true'이면 showDetail = true


```javascript
// v5
const query = qs.parse(location.search, {
  ignoreQueryPrefix: true // 이 설정을 통해 문자열 맨 앞의 ?를 생략합니다.
});
const showDetail = query.detail === ‘true‘; // 쿼리의 파싱 결과 값은 문자열입니다.

// v6
const {search} = useLocation();
const query = useMemo(() => new URLSearchParams(search),[search])
const showDetail = query.get('detail') === 'true'
// true는 문자열로!!
```

history 기능 대신 useNavigate 기능 활용 ( `HistorySample.js` 참고 )


withRouter 는 react-router-dom 이 v6 로 업데이트 되면서 사라졌다.
대신 같은 기능은 구현할 수 있다.

`WithRouterSample.js`
```javascript
import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router';

const WithRouterSample = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
    <h4>Location</h4>
    <textarea value={JSON.stringify(location, null,2)} readOnly />
    
    <h4>Params</h4>
    <textarea value={JSON.stringify(params, null, 2)} readOnly />

    <button onClick={() => navigate('/')} >홈으로</button>

    </div>
  );
};

export default WithRouterSample;
```
`stringify(A, B, C)`
A = value
B = replacer(null | undefined)
C = tab수

## NavLink

<Link> 와 비슷하다.
다만 현재 경로와 Link에서 사용하는 경로가 일치하는 경우
스타일 적용이 가능하다.(CSS 클래스도 적용 가능)

### activeStyle

예전 자료에서는 activeStyle 속성을 사용했지만
현재는 style 속성을 사용한다.
style 속성 안에서 함수로 active 상태인지 아닌지 판별한다.

```javascript
const activeStyle = {
  background: 'blue',
  color: 'white'
};

return(
  <div>
    {/* v5 이전? */}
    <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>

    {/* v6 */}
    <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/home" >Home</NavLink>
  </div>
)
```


---
작동 안됨.

/Profiles/:username 접속 안됨.

'홈으로' '뒤로가기' 버튼 안나옴

location, match 등등
변경된점 많음.


v6로 업데이트 되면서 바뀐 문법 설명

참고

https://velog.io/@soryeongk/ReactRouterDomV6

https://velog.io/@sham/react-router-dom-v6%EB%A1%9C-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%9D%B4%EB%8F%99%ED%95%98%EA%B8%B0

