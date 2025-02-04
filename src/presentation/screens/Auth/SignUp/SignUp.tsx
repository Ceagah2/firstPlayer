import { NavigationProp, useNavigation } from "@react-navigation/native";

import { useState } from "react";
import { useLoginFormStore } from "../../../../validation/LoginSchema";
import { Button, Container, Input, LogoWithText } from "../../../components";
import * as S from './SignUp.styles';

export default function SignUp(){
  const { email, password, setEmail, setPassword, validateFields, errors } =
    useLoginFormStore();
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')
  const [isSecureEntry, setIsSecureEntry] = useState<boolean>(true);

  const [inputIcon, setInputIcon] = useState<"eye" | "eye-closed">("eye");
   
  const navigation: NavigationProp<any,any> = useNavigation()
  const handleSecureEntry = () => {
    setIsSecureEntry(!isSecureEntry);
    setInputIcon(!isSecureEntry ? "eye" : "eye-closed");
  };

  const handleSignUp = () => {
    if (validateFields() && password === passwordConfirm) {
      console.log('Data :', password, email, passwordConfirm)
    }
  };
    
  return (
    <Container>
      <S.Content>
        <LogoWithText subtitle="Recupere sua senha e volte a jogar com os melhores" />
        <S.Form>
          <S.Title>Cadastre-se</S.Title>
          <Input placeholder={"Email"} value={email} onChangeText={setEmail} />
          <Input
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            icon={inputIcon}
            secureTextEntry={isSecureEntry}
            onPress={handleSecureEntry}
            style={{ paddingLeft: 10 }}
          />
          <Input
            placeholder="Confirmar senha"
            value={password}
            onChangeText={setPassword}
            icon={inputIcon}
            secureTextEntry={isSecureEntry}
            onPress={handleSecureEntry}
            style={{ paddingLeft: 10 }}
          />
        </S.Form>
          <S.Buttons>
            <S.ButtonContainer>
              <Button
                variant="primary"
                title={"Cadastrar"}
                borderRadius={8}
                onPress={() => handleSignUp()}
              />
            </S.ButtonContainer>
            <S.TextContainer onPress={() => navigation.navigate('Login')}>
              <S.BackText>Ja possui conta?</S.BackText>
              <S.HighlightText>Logar</S.HighlightText>
            </S.TextContainer>
          </S.Buttons>
      </S.Content>
    </Container>
  );
}