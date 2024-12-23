import Icon from "../icons/Icons";
import { IButton } from "./Button.interface";
import * as S from "./Button.styles";

export const Button = ({ title, icon, variant, ...rest }: IButton) => {
  return (
    <S.Container variant={variant} {...rest}>
      { title && <S.ButtonTitle variant={variant}>{title}</S.ButtonTitle>}
      { icon && <Icon name={icon} />}
    </S.Container>
  );
};
