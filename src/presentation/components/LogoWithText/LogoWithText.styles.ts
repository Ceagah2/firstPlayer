import styled from 'styled-components/native';
import { fonts, sizes } from '../../theme';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 16px;
`
export const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;
export const TextContainer = styled.View`
  width: 60%;
  gap: 8px;
  padding: 8px;
`
export const Title = styled.Text`
  font-family: ${fonts.archivo[600]};
  font-size: ${sizes.h3};
`
export const Subtitle = styled.Text`
  font-family: ${fonts.archivo[200]};
  font-size: ${sizes.body1};
`