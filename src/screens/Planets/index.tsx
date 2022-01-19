import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import Card from '../../components/Card';
import api from '../../services/api';
import {IPlanet} from '../../types/types';
import {IPlanetsDetails} from '../../Store/Modules/PlanetDetails/Types';
import detailsPlanet from '../../Store/Modules/PlanetDetails/Actions';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

import {Container, Image, Load, TouchablePlanet} from './styles';

const Planets: React.FC = () => {
  const [data, setData] = useState<IPlanet[]>([]);
  const [isload, setIsLoad] = useState(false);

  const dispatch = useDispatch();
  const nav = useNavigation();

  const handlePlanetDetails = (val: string, screen: any) => {
    const newDetails: IPlanetsDetails = {
      planet_id: val,
    };
    dispatch(detailsPlanet(newDetails));
    nav.navigate(screen);
  };

  useEffect(() => {
    setIsLoad(true);
    api
      .get('/planets')
      .then(response => {
        setData(response.data);
      })
      .catch(() => alert('Houve um erro ao consultar a api'))
      .finally(() => {
        setTimeout(() => {
          setIsLoad(false);
        }, 2000);
      });
  }, []);

  if (isload) {
    return (
      <Load>
        <LottieView
          source={require('../../animation/17059-galacticons-animated.json')}
          autoPlay
          loop
          style={{height: 500, width: 500}}
        />
      </Load>
    );
  }

  return (
    <Image>
      <Container>
        <FlatList
          data={data}
          style={{flex: 1, width: '100%'}}
          renderItem={({item}) => (
            <TouchablePlanet
              activeOpacity={0.7}
              onPress={() => handlePlanetDetails(item.id, 'Details')}>
              <Card
                name={item.name}
                image={item.image}
                temperature={item.temperature}
                size={item.size}
              />
            </TouchablePlanet>
          )}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </Image>
  );
};

export default Planets;
