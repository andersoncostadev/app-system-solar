import {Image} from './../Planets/styles';
import {ImageBackground} from 'react-native';
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

export const AstronautContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

export const IconAstronaut = styled(Image).attrs({
  resizeMode: 'contain',
  source: require('../../assets/Images/astronauta.png'),
})`
  height: auto;
  width: 300px;
`;

export const TitleContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 50px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  margin-top: 100px;
`;
