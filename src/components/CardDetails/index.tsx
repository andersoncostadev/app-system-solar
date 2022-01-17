import React from 'react';
import {IDetails} from '../../types/types';

import {
  CardView,
  Container,
  Divider,
  ImageCard,
  TextView,
  Title,
  TitlePlanet,
} from './styles';

const CardDetails: React.FC<IDetails> = ({image, curiosity, name}) => {
  return (
    <Container>
      <CardView>
        <ImageCard uri={image} />
        <TextView>
          <TitlePlanet>{name}</TitlePlanet>
          <Divider />
          <Title>{curiosity}</Title>
        </TextView>
      </CardView>
    </Container>
  );
};

export default CardDetails;
