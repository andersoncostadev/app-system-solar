import React from 'react';

import {
  Background,
  Container,
  TitleContainer,
  Title,
  IconAstronaut,
  AstronautContainer,
} from './styles';

const Home: React.FC = () => {
  return (
    <Background>
      <Container>
        <TitleContainer>
          <Title>Explorer</Title>
        </TitleContainer>
        <AstronautContainer>
          <IconAstronaut />
        </AstronautContainer>
      </Container>
    </Background>
  );
};

export default Home;
