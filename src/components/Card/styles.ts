import styled, { css } from 'styled-components'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'

export const Wrapper = styled.div.attrs({
  'data-testid': 'WrapperCard'
})`
  height: 120px;
  width: 300px;

  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 10px;
  
  border-radius: 7px;
`

export const Header = styled.div`
  
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    color: ${theme.colors.black};
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`

export const IconDollar = styled(RiMoneyDollarCircleLine)`
  ${({ theme }) => css`
    color: ${theme.colors.baseColorYellow};
  `}
`

export const Count = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    color: ${theme.colors.black};
    margin: 5px 0 0 5px;
  `}
`