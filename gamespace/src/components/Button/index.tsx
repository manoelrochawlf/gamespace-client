import * as S from './styles'

const Button = () => {

    return ( 
        <S.ButtonContainer>
            <S.LinkText to={"/login"}>
                <S.ButtonStyle>
                    Log In
                </S.ButtonStyle>        
                <S.ButtonStyle>
                    Sign In
                </S.ButtonStyle>
            </S.LinkText>
            
        </S.ButtonContainer>   
     );
}
 
export default Button;