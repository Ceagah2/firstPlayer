import { NavigationProp, useNavigation } from '@react-navigation/native';
import BGImage from '../../../../assets/images/splash.png';
import * as S from './Splash.styles';

export default function Splash() {
  const navigation: NavigationProp<any, any> = useNavigation()
  return(
    <S.Container source={BGImage}>
      <S.Button onPress={()=> navigation.navigate('Login')}>
        <S.ButtonText>Entrar</S.ButtonText>
      </S.Button>
    </S.Container>
  )
}