import styled from 'styled-components/native';
import { colors, fonts, sizes } from '../../../theme';

export const Content = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 24px 0;
`
export const Title = styled.Text`
  font-family: ${fonts.archivo[600]};
  font-size: ${sizes.h3};
  color: ${colors.neutrals['01']};
  align-self: start;
`

export const Form = styled.View`
  width: 100%;
  flex: 1;
  justify-content: space-around;
`;

export const InputContainer = styled.View`
  width: 100%;
`
export const Buttons = styled.View`
  gap: 8px;
`
export const ButtonContainer = styled.View`
  width: 100%;
`