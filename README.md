# SPA

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
<Route path={["/about", "/info"]} element={<About />} />
// 동작 안함...
```

## 파라미터와 쿼리

파라미터는 특정 아이디 혹은 이름을 사용하여 조회할 때
쿼리는 키워드를 검색하거나 페이지에 필요한 옵션을 전달할 때
차이점: 수식이 들어가고 안들어가고의 차이?

파라미터 예시: /profiles/velopert
쿼리 예시: /about?details=true

v6 부터는 match 대신 useParams을 사용한다.
```javascript
import { useParams } from "react-router-dom";
// v6 로 업데이트 된 후부터  match.params 대신 useParams() 사용한다.
```

path는 기존의 path="/profile/:username"








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

