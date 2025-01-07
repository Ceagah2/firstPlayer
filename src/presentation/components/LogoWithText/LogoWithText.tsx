import Logo from '../../../../assets/images/logo.png'
import * as S from './LogoWithText.styles'
export const LogoWithText = ({subtitle}: {subtitle: string}) => {
  return(
    <S.Container>
      <S.TextContainer>
        <S.Title>Pronto para ser o{"\n"}maior vencedor?</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.TextContainer>
      <S.Logo source={Logo}/>
    </S.Container>
  )
}