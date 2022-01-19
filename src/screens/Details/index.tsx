import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {IRootPlanet} from '../../Store/Modules';
import api from '../../services/api';
import {IDetails} from '../../types/types';
import LottieView from 'lottie-react-native';

import {
  Image,
  Container,
  Load,
  PlanetDetails,
  Title,
  TextBox,
  ImageCard,
  ContainerPlanet,
  Divider,
} from './styles';

const Details: React.FC = () => {
  const [details, setDetails] = useState<IDetails>();
  const [isLoad, setIsLoad] = useState(false);

  const planetID = useSelector(
    (state: IRootPlanet) => state.PlanetDetailsId.planet_id,
  );

  useEffect(() => {
    setIsLoad(true);
    api
      .get<IDetails>(`/planet/${planetID}`)
      .then(response => setDetails(response.data))
      .catch(() => alert('Houve um erro ao consultar a api'))
      .finally(() => {
        setTimeout(() => {
          setIsLoad(false);
        }, 2000);
      });
  }, [planetID]);

  if (isLoad) {
    return (
      <Load>
        <LottieView
          source={require('../../animation/64036-planet.json')}
          autoPlay
          loop
          style={{height: 500, width: 500}}
        />
      </Load>
    );
  }

  const image: any = details?.image;

  return (
    <Image>
      <Container>
        <ImageCard uri={image} />
      </Container>
      <PlanetDetails>
        <Title>{details?.name}</Title>
        <Divider />
        <TextBox>{details?.curiosity}</TextBox>
      </PlanetDetails>
    </Image>
  );
};

export default Details;
