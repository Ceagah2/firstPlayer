import { useState } from "react";
import Logo from '../../../../assets/images/logo.png';
import { useLoginFormStore } from "../../../validation/LoginSchema";
import { Button, Container, Input } from "../../components";
import * as S from './Login.styles';

export default function Login() {
  const [isSecureEntry, setIsSecureEntry] = useState<boolean>(true)
  const [inputIcon, setInputIcon] = useState<'eye' |'eye-closed' >('eye')
  const { email, password, setEmail, setPassword } = useLoginFormStore()

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
        <Input placeholder={"Email"} value={email} onChangeText={setEmail} />
        <Input
          placeholder={"Password"}
          value={password}
          onChangeText={setPassword}
          icon={inputIcon}
          secureTextEntry={isSecureEntry}
          hasIcon
          onPress={handleSecureEntry}
        />
        <S.ButtonContainer>
          <Button title="Logar" onPress={handleLogin} variant="primary" />
        </S.ButtonContainer>
      </S.LoginForm>
    </Container>
  );
}