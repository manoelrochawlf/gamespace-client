import * as S from "./styles";
const logo =  require('assets/imgs/logo.png') as string;

const BoxLogin = () => {
	return (
        <S.BoxLogin>
            <S.BoxLoginLogo>
                <S.BoxLoginLogoText>
                    <span>GameSpace</span>
                </S.BoxLoginLogoText>
            </S.BoxLoginLogo>
            <S.BoxLoginForm>
                <input type="text" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />
            </S.BoxLoginForm>
        </S.BoxLogin>
  );
};

export default BoxLogin;