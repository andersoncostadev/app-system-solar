import {Image} from './../Planets/styles';
import {ImageBackground, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Background = styled(ImageBackground).attrs({
  risizeMode: 'cover',
  source: require('../../assets/Images/bghome.jpeg'),
})`
  flex: 1;
  justify-content: center;
  padding-top: 50px;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Image).attrs({
  resizeMode: 'contain',
  source: require('../../assets/Images/icone.png'),
})`
  height: auto;
  width: 300px;
`;
