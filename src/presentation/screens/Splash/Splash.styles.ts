import styled from 'styled-components/native';
import { colors, fonts, sizes } from '../../theme';
export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 60px;
`

export const Button = styled.Pressable`
  width: 90%;
  height: 50px;
  background: ${colors.alternative['02']};
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

export const ButtonText = styled.Text`
  font-size: ${sizes.button};
  color: ${colors.neutrals['12']};
  font-family: ${fonts.archivo[600]};
`