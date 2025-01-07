import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Logo from '../../../../../assets/images/logo.png';
import { useLoginFormStore } from "../../../../validation/LoginSchema";
import { Button, Container, Input } from "../../../components";
import * as S from './Login.styles';

export default function Login() {
  const [isSecureEntry, setIsSecureEntry] = useState<boolean>(true)
  const [inputIcon, setInputIcon] = useState<'eye' |'eye-closed' >('eye')
  const { email, password, setEmail, setPassword } = useLoginFormStore()
  const navigation: NavigationProp<any, any> = useNavigation()

  const handleSecureEntry = () => {
    setIsSecureEntry(!isSecureEntry)
    setInputIcon(!isSecureEntry ? 'eye' : 'eye-closed')
  }

  const handleLogin = () => {
    console.log("Email:", email, "Password:", password)
  }
  return (
    <Container>
      <S.LoginForm>
      <S.Logo source={Logo} />
      <S.Hero>
        <S.HeroTitle>Pronto para ser {"\n"}o maior vencedor?</S.HeroTitle>
        <S.LoginText>Acesse sua conta já e inicie sua jornada</S.LoginText>
      </S.Hero>
        <Input placeholder={"Email"} value={email} onChangeText={setEmail} />
        <Input
          placeholder={"Password"}
          value={password}
          onChangeText={setPassword}
          icon={inputIcon}
          secureTextEntry={isSecureEntry}
          onPress={handleSecureEntry}
        />
        <S.PassRecoverButton onPress={() => navigation.navigate('Recover')}>
          <S.ButtonText>Recuperar senha?</S.ButtonText>
        </S.PassRecoverButton>
        <S.ButtonContainer style={{marginTop: 50}}>
          <Button title="Logar" onPress={handleLogin} variant="primary" />
        </S.ButtonContainer>
        <S.ButtonContainer>
          <Button title="Cadastre-se" onPress={() => navigation.navigate('SignUp')} variant="white" />
        </S.ButtonContainer>
      </S.LoginForm>
    </Container>
  );
}