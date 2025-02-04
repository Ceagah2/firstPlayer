import styled from "styled-components/native";
import { colors, fonts, sizes } from "../../../theme";

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 24px 0;

`;
export const Title = styled.Text`
  font-family: ${fonts.archivo[600]};
  font-size: ${sizes.h3};
  color: ${colors.neutrals["01"]};
  align-self: start;
`;

export const Form = styled.View`
  width: 100%;
  height: 60%;
  justify-content: center;
  gap: 16px;
`;

export const InputContainer = styled.View`
  width: 100%;
`;
export const Buttons = styled.View`
  width: 400px;
  flex-direction: column;
  gap: 8px;
`;
export const ButtonContainer = styled.View`
  width: 100%;
`;

export const TextContainer = styled.TouchableOpacity`
  width: 100%;
  gap: 8px;
  padding: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const BackText = styled.Text`
  font-family: ${fonts.archivo[200]};
  font-size: ${sizes.body1};
  color: ${colors.neutrals["01"]};
`

export const HighlightText = styled.Text`
  font-family: ${fonts.archivo[700]};
  font-size: ${sizes.body1};
  color: ${colors.neutrals["01"]};
`;