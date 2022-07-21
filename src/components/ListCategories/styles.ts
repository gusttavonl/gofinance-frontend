import styled, { css } from 'styled-components'
import { AiOutlineDelete } from 'react-icons/ai'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
`

export const FiltersAndDataTable = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: 15px;
    border-radius: 7px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  `}
`

export const Filters = styled.div`
  display: flex;
  flex-direction: row;
`

export const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

export const Filter = styled.div`
  margin-left: 5px;
`

export const IconDelete = styled(AiOutlineDelete)`
  ${({ theme }) => css`
    color: ${theme.colors.tomato};
  `}
  cursor: pointer;
`