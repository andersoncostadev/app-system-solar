import {ImageBackground} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Image = styled(ImageBackground).attrs({
  resizeMode: 'cover',
  source: require('../../assets/Images/bg.jpeg'),
})`
  flex: 1;
  justify-content: center;
  padding-top: 50px;
`;

export const TouchablePlanet = styled.TouchableOpacity`
  flex: 1;
`;

export const Load = styled.View`
  align-items: center;
`;
