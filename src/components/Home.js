import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
`;

function Home() {
  return (
    <HomeContainer>
      <Title>Welcome to My Portfolio</Title>
      <Subtitle>Software Developer, Front-end Developer & UI/UX Enthusiast</Subtitle>
      <p>Explore my recent work at Experian and see what I can bring to your team!</p>
    </HomeContainer>
  );
}

export default Home;