import { colors } from "../../theme";
import Icon from "../icons/Icons";
import { IInputProps } from "./Input.interface";
import * as S from './Input.styles';
export const Input: React.FC<IInputProps> = ({ hasIcon, icon, onPress,...rest }) => {
  return (
    <S.Container>
      <S.Input {...rest} placeholderTextColor={colors.neutrals['01']} />
      {hasIcon && <Icon name={icon} onPress={onPress} />}
    </S.Container>
  );
};