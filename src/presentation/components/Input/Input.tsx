import { colors } from "../../theme";
import Icon from "../icons/Icons";
import { IInputProps } from "./Input.interface";
import * as S from './Input.styles';
export const Input: React.FC<IInputProps> = ({ icon, onPress = () => {},...rest }) => {
  return (
    <S.Container>
      <S.Input {...rest} placeholderTextColor={colors.neutrals['01']} />
      {icon && <Icon name={icon} onPress={onPress} size={24} color={"black"} />}
    </S.Container>
  );
};