import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 70px;
    
`;

export const ButtonStyle = styled.button`

    background-color: transparent;
    width: 125px;
    height: 50px;
    padding: 0 10px;
    font-size: 16px;
    color: #ffff;
    font-weight: bold;
    cursor: pointer;
    border:3.5px solid #1a4a15;
    margin: 5px;
    border-radius: 10%;
    margin-top: 25px;
    &:hover{
        background-color: #1a4a15;
    }
`;

export const LinkText = styled(Link)`
        

`;

