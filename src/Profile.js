import React from "react";
import { useParams } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";

// 데이터 객체 생성
const data = {
  velopert: {
    name: "김민준",
    description: "리액트를 좋아하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "고전 소설 홍길동전의 주인공",
  },
};

// 입력된 인자의 이름은 match로 사용
// username은 match.params
// profile은 data의 username
// profile이 없다면 존재하지 않는 사용자 알림
const Profile = () => {
  const params = useParams();
  const profile = data[params.username];
  console.log(params);
  console.log(profile);

  if (!profile) return <div>프로필이 없습니다.</div>;

  return (
    <div>
      <h3>
        {params.username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profile;
