import { css } from 'styled-components';
import { constants } from './constants';
import { colors } from './colors';
import 'assets/imgs/logo.png';
// Não importei o icone como na documentação


// Onde de vai ficar a configuração para a minha logo:

const logoStyle = () => css`

  background-image: url(${'assets/imgs/logo.png'});
`;

// Onde vou configurar o titulo:

const headingStyle = () => css`
  font-family: ${constants.headingFontFamily};
  font-size: ${constants.headingFontSize};
  line-height: ${constants.headingLineHeight};
`;

// Onde vou configurar o estilo do corpo da aplicação:

const bodyStyle = () => css`
  font-family: ${constants.bodyFontFamily};
  font-size: ${constants.bodyFontSize};
  line-height: ${constants.bodyLineHeight};
`;

// Basicamente onde configurarei o estilo do overlay:
const overlay = () => css`
  background: rgb(0, 0, 0, 0.6);
`;

// Estilo de diversos tipos de botões que vou tirar, mudar e alterar conforme minha necessidade:

const buttonOutlineModifiers = {
    square: () => css`
          width: 48px;
    `,
  };

const buttonOutline = (color = colors.primaryColor, square = false) => css`
  height: 48px;
  background: transparent;
  border-radius: 8px;
  padding: 14px;
  cursor: pointer;
  border: 1px solid ${color};
  color: ${color};
  ${square && buttonOutlineModifiers.square() }
`;

const buttonFilled = (color = colors.primaryColor) => css`
  background: ${color};
  border: none;
  border-radius: 8px;
  color: ${colors.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  cursor: pointer;
  ${bodyStyle()};
  font-weight: 600;
  box-shadow: 0px 8px 24px 0px ${colors.shadowColor};
`;

const buttonIconModifiers = {
  active: () => css`
		box-shadow: 0px 8px 24px 0px ${colors.shadowColor};
  `,
};

const buttonIcon = (active = false) => css`
  height: 56px;
  width: 56px;
  border-radius: 8px;
  padding: 16px;
  border: none;
  cursor: pointer;
  background-color: ${active ? colors.primaryColor : "transparent"};
  color: ${active ? colors.textColor : colors.primaryColor};
  ${active && buttonIconModifiers.active()}
`;

const buttonToggle = (active = false) => css`
  border-radius: 8px;
  padding: 7px 12px;
  border: ${active ? "none" : "1px solid " + colors.baseLine};
  height: 35px;
  cursor: pointer;
  background-color: ${active ? colors.primaryColor : "transparent"};
  color: ${active ? colors.textColor : colors.primaryColor};
`;

// Configurações para inputs de forms e campos de seleção

const input = () => css`
  height: 48px;
  border-radius: 8px;
  padding: 14px;
  background: ${colors.baseForm};
  border: 1px solid ${colors.baseLine};
  box-sizing: border-box;
`;

const select = (important = true) => css`
  ${input()};
  ${bodyStyle()};
  appearance: none;
  background: ${important ? colors.secondaryColor : "transparent"};
  border: ${important ? "none" : "1px solid " + colors.baseLine};
  color: ${colors.textColor}; 
  background-repeat: no-repeat;
  padding-right: 50px;
  background-position: 85%;
`;

// Adicionar icone no background  dessa const select posteriormente 

export const mixins = {
    bodyStyle,
    buttonFilled,
    buttonIcon,
    buttonOutline,
    buttonToggle,
    headingStyle,
    input,
    logoStyle,
    overlay,
    select,
}

