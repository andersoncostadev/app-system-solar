import React from "react";

import {Container, CardView, ImageCard, Title } from './styles';

const Card : React.FC = () => {
  return(
    <Container>
     <CardView>
      <ImageCard/>
      <Title>Texto</Title>
      </CardView>
    </Container>
  );
};

export default Card;