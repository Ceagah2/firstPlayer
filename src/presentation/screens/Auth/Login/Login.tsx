import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Logo from '../../../../../assets/images/logo.png';
import { useLoginFormStore } from "../../../../validation/LoginSchema";
import { Button, Container, Input } from "../../../components";
import * as S from './Login.styles';

export default function Login() {
  const [isSecureEntry, setIsSecureEntry] = useState<boolean>(true);
  const [inputIcon, setInputIcon] = useState<"eye" | "eye-closed">("eye");
  const { email, password, setEmail, setPassword, validateFields, errors } =
    useLoginFormStore();
  const navigation: NavigationProp<any, any> = useNavigation();
  const [submitted, setSubmitted] = useState(false);

  const handleSecureEntry = () => {
    setIsSecureEntry(!isSecureEntry);
    setInputIcon(!isSecureEntry ? "eye" : "eye-closed");
  };

  const handleLogin = () => {
    setSubmitted(true);
    if (validateFields()) {
      console.log("Email:", email, "Password:", password);
    }
  };

  return (
    <Container>
      <S.LoginForm>
        <S.Logo source={Logo} />
        <S.Hero>
          <S.HeroTitle>Pronto para ser {"\n"}o maior vencedor?</S.HeroTitle>
          <S.LoginText>Acesse sua conta já e inicie sua jornada</S.LoginText>
        </S.Hero>
        <Input placeholder="Email" value={email} onChangeText={setEmail} />
        {submitted && errors.email && (
          <S.ErrorContainer>
            <S.ErrorText>{errors.email}</S.ErrorText>
          </S.ErrorContainer>
        )}
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          icon={inputIcon}
          secureTextEntry={isSecureEntry}
          onPress={handleSecureEntry}
          style={{ paddingLeft: 10 }}
        />
        {submitted && errors.password && (
          <S.ErrorContainer>
            <S.ErrorText>{errors.password}</S.ErrorText>
          </S.ErrorContainer>
        )}
        <S.PassRecoverButton onPress={() => navigation.navigate("Recover")}>
          <S.ButtonText>Recuperar senha?</S.ButtonText>
        </S.PassRecoverButton>
        <S.ButtonContainer style={{ marginTop: 60 }}>
          <Button title="Logar" onPress={handleLogin} variant="primary" />
        </S.ButtonContainer>
        <S.ButtonContainer>
          <Button
            title="Cadastre-se"
            onPress={() => navigation.navigate("SignUp")}
            variant="white"
          />
        </S.ButtonContainer>
      </S.LoginForm>
    </Container>
  );
}
