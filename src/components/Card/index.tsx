import React from 'react';
import {IPlanet} from '../../types/types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  CardView,
  ImageCard,
  Title,
  InfoView,
  InfoPlanet,
  TextView,
} from './styles';

const Card: React.FC<IPlanet> = ({name, image, temperature, size}) => {
  return (
    <Container>
      <CardView>
        <ImageCard uri={image} />
        <TextView>
          <Title>{name}</Title>
          <InfoView>
            <MaterialCommunityIcons
              name="thermometer-lines"
              color="#FFF"
              size={15}
            />
            <InfoPlanet>{temperature}</InfoPlanet>
            <MaterialCommunityIcons
              name="tape-measure"
              color="#FFF"
              size={15}
            />
            <InfoPlanet>{size}</InfoPlanet>
          </InfoView>
        </TextView>
      </CardView>
    </Container>
  );
};

export default Card;
