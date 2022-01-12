import {ImageBackground} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export const Image = styled(ImageBackground).attrs({
  resizeMode: 'cover',
  source: require('../../assets/bg.jpeg'),
})`
  flex-grow: 1;
  justify-content: center;
  padding-top: 100px;
`;
