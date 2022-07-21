import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

export const ButtonWrapper = styled.button.attrs({
  'data-testid': 'ButtonWrapper'
})<ButtonProps>`
  ${({ theme, disabled, isFilter }) => css`
    background-color: ${theme.colors.tomato};
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    padding: 15px 110px;

    border-radius: 5px;
    cursor: pointer;
    letter-spacing: 0;
    border: none;
    margin: 10px 0;

    display: flex;
    align-items: center;
    justify-content: center

    &:hover {
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2)
    }

    ${disabled && css`
      cursor: not-allowed;
      opacity: 0.7;   
    `}

    ${isFilter && css`
      padding: 10px 70px;
    `}
  `}
`

export const Content = styled.div``