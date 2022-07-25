import React from "react";
import { Link, Route, Routes, NavLink } from "react-router-dom";
import Profile from "./Profile";
// import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  const activeStyle = {
    background: 'blue',
    color: 'white'
  };

  return (
    <div>
      <h3>사용자 목록: </h3>
      <ul>
        <li>
          <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/profiles/velopert" >velopert</NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/profiles/gildong">gildong</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<div>사용자를 선택해 주세요.</div>} />
        <Route path=":username" element={<Profile />} />
      </Routes>
      {/* <WithRouterSample /> */}
    </div>
  );
};

export default Profiles;
