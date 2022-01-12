import styled from 'styled-components/native';
import {Image} from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin: 10px;
`;

export const CardView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: #434273;
  border-radius: 15px;
  padding: 15px;
  width: auto;
  min-height: 150px;
`;

export const ImageCard = styled(Image).attrs({
  source: require('../../assets/bg.jpeg'),
})`
  width: 40%;
  height: 100%;
  object-fit: contain;
  margin-right: 15px;
`;

export const Title = styled.Text`
  flex: 1;
`;
