import React, { useMemo } from 'react';
// react-router-dom v6 이후
import { useLocation } from 'react-router';

const About = () => {
  // react-router-dom v6 이후
  const {search} = useLocation();
  const query = useMemo(() => new URLSearchParams(search),[search])
  const showDetail = query.get('detail') === 'true'
  console.log(search);

  return (
    <div>
      <h1>Intro</h1>
      <p>This project is practice for basic of react-router</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요</p>}
    </div>
  );
};

export default About;
