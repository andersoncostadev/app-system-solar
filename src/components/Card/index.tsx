import React from "react";
import { IPlanet } from "../../types/types";

import {
  Container, 
  CardView, 
  ImageCard, 
  Title, 
  InfoView, 
  InfoPlanet, 
  TextView
 } from './styles';

 

const Card : React.FC<IPlanet> = ({
  name,
  image,
  temperature,
  size
}) => {
  return(
    <Container>
     <CardView>
      <ImageCard uri={image}/>
      <TextView>
       <Title>{name}</Title>
        <InfoView>
          <InfoPlanet>{temperature}</InfoPlanet>
          <InfoPlanet>{size}</InfoPlanet>
        </InfoView>
      </TextView>
      </CardView>
    </Container>
  );
};

export default Card;