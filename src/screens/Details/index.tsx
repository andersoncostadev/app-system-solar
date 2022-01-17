import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import CardDetails from '../../components/CardDetails';
import api from '../../services/api';
import {IDetails} from '../../types/types';
import LottieView from 'lottie-react-native';

import {Image, Container, Load} from './styles';

const Details: React.FC = () => {
  const [details, setDetails] = useState<IDetails[]>([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);
    api
      .get('/planets')
      .then(response => setDetails(response.data))
      .catch(() => alert('Houve um erro ao consultar a api'))
      .finally(() => {
        setTimeout(() => {
          setIsLoad(false);
        }, 2000);
      });
  }, []);

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

  return (
    <Image>
      <Container>
        <FlatList
          data={details}
          style={{flex: 1, width: '100%'}}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <CardDetails
              id={item.id}
              image={item.image}
              name={item.name}
              curiosity={item.curiosity}
            />
          )}
        />
      </Container>
    </Image>
  );
};

export default Details;
