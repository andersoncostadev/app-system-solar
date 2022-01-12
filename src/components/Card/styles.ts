import styled from 'styled-components/native';
import {SvgUri} from 'react-native-svg';

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

export const ImageCard = styled(SvgUri).attrs({
  width: '40%',
  height: '100%',
})`
  object-fit: contain;
  margin-right: 15px;
`;

export const TextView = styled.View`
  flex: 1;
`;

export const InfoView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const InfoPlanet = styled.Text`
  font-size: 20px;
  color: #ffffff;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  color: #ffffff;
`;
