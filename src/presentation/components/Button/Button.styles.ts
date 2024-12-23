import styled from 'styled-components/native';
import { colors, sizes } from '../../theme';

interface ContainerProps {
  variant: "primary" | "yellow" | "red" | "white";
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 16px;
  background-color: ${({ variant }) =>
    variant === "primary"
      ? colors.alternative["02"]
      : variant === "yellow"
      ? colors.secondary["01"]
      : variant === "red"
      ? colors.alternative["01"]
      : "transparent"};
`;

export const ButtonTitle = styled.Text<ContainerProps>`
  color: ${({ variant }) =>
    variant === "primary" || variant === "red"
      ? colors.neutrals["12"]
      : colors.neutrals["01"]};
  font-size: ${sizes.button};
`;