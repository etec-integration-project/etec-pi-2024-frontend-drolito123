import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #287233;
  color: white;
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Bienvenido a RemerasCo</h1>
      <p>Explora nuestra amplia selección de remeras de calidad.</p>
    </HomeContainer>
  );
}

export default Home;
