import styled from 'styled-components/native';
import { colors, fonts, sizes } from '../../../theme';

export const Logo = styled.Image``

export const Hero = styled.View`
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 150px;
  gap: 16px;
  align-self: start;
`;
export const HeroTitle = styled.Text`
  font-family: ${fonts.archivo[600]};
  font-size: ${sizes.h3};
  color: ${colors.neutrals['01']};
`;
export const LoginText = styled.Text`
  font-family: ${fonts.archivo[400]};
  font-size: ${sizes.body1};
  color: ${colors.neutrals['01']};
`;

export const LoginForm = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const PassRecoverButton = styled.TouchableOpacity`
  height: 30px;
  justify-content: center;
  align-items: flex-end;
  margin-top: 16px;
  background-color: transparent;
  align-self: end;
`;
export const ButtonText = styled.Text`
  font-family: ${fonts.archivo[200]};
  color: ${colors.neutrals["01"]};
  font-size: ${sizes.body3};
`;
export const ButtonContainer = styled.View`
  width: 350px;
  margin-top: 16px;
`