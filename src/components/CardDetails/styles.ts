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
  background-color: #873679;
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

export const Title = styled.Text`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
`;

export const TitlePlanet = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 10px;
`;

export const Divider = styled.View`
  border: 1px;
  border-style: solid;
  border-color: #ffffff;
  margin-bottom: 15px;
`;
