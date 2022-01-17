import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Card from '../../components/Card';
import api from '../../services/api';
import {IPlanet} from '../../types/types';
import {useNavigation} from '@react-navigation/native';

import {Container, Image, TouchablePlanet} from './styles';

const Planets: React.FC = () => {
  const [data, setData] = useState<IPlanet[]>([]);

  const nav = useNavigation();

  const handlePlanetDetails = (screen: any) => {
    nav.navigate(screen);
  };

  useEffect(() => {
    api
      .get('/planets')
      .then(response => {
        setData(response.data);
      })
      .catch(() => alert('Houve um erro ao consultar a api'));
  }, []);

  return (
    <Image>
      <Container>
        <FlatList
          data={data}
          style={{flex: 1, width: '100%'}}
          renderItem={({item}) => (
            <TouchablePlanet
              activeOpacity={0.7}
              onPress={() => handlePlanetDetails('Details')}>
              <Card
                id={item.id}
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