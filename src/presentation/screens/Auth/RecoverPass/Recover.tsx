import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useLoginFormStore } from "../../../../validation/LoginSchema";
import { Button, Container, Input, LogoWithText } from "../../../components";
import * as S from './Recover.styles';

export default function RecoverPassword() {
  const {email, setEmail} = useLoginFormStore()
  const navigation: NavigationProp<any,any> = useNavigation()
  const handleRecover = () => {

  }

  return (
    <Container>
      <S.Content>
        <LogoWithText subtitle="Recupere sua senha e volte a jogar com os melhores" />
        <S.Form>
          <S.InputContainer>
            <S.Title>Recuperar Senha</S.Title>
          <Input placeholder={"Email"} value={email} onChangeText={setEmail} />
          </S.InputContainer>
          <S.Buttons>
            <S.ButtonContainer>
              <Button
                variant="primary"
                title={"Recuperar Senha"}
                borderRadius={8}
              />
            </S.ButtonContainer>
            <S.ButtonContainer>
              <Button
                variant="red"
                title={"Cancelar"}
                borderRadius={8}
                onPress={() => navigation.goBack()}
              />
            </S.ButtonContainer>
          </S.Buttons>
        </S.Form>
      </S.Content>
    </Container>
  );
}
