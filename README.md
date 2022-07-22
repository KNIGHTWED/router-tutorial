# SPA

Single Page Application
한 개의 페이지로 이루어진 애플리케이션

exact={true} 와 exact는 같은 의미로 쓰인다.


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

---
작동 안됨.

/Profiles/:username 접속 안됨.

v6로 업데이트 되면서 바뀐 문법 설명

참고: (https://velog.io/@soryeongk/ReactRouterDomV6)
