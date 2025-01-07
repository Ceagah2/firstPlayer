import Icon from "../icons/Icons";
import { IButton } from "./Button.interface";
import * as S from "./Button.styles";

export const Button = ({ title, icon, variant, borderRadius, ...rest }: IButton) => {
  return (
    <S.Container variant={variant} {...rest} style={{borderRadius: borderRadius | 0}}>
      { title && <S.ButtonTitle variant={variant}>{title}</S.ButtonTitle>}
      { icon && <Icon name={icon} size={24} color={"black"} onPress={() => {}} />}
    </S.Container>
  );
};
