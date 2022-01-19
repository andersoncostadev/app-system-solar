import {ImageBackground} from 'react-native';
import {SvgUri} from 'react-native-svg';
import styled from 'styled-components/native';

export const Image = styled(ImageBackground).attrs({
  resizeMode: 'cover',
  source: require('../../assets/Images/bg.jpeg'),
})`
  flex: 1;
  justify-content: center;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const PlanetDetails = styled.View`
  flex: 1.8;
  background-color: #875afd;
  padding: 20px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const Divider = styled.View`
  border: 1px;
  border-style: solid;
  border-color: greenyellow;
  margin-top: 8px;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
`;

export const TextTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  margin-top: 10px;
  text-align: justify;
`;

export const TextBox = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-top: 10px;
  text-align: justify;
`;

export const ImageCard = styled(SvgUri).attrs({
  width: '60%',
  height: '100%',
})`
  object-fit: contain;
  margin-right: 15px;
  margin-top: 20px;
`;

export const Load = styled.View`
  align-items: center;
`;
