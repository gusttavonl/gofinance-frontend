import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children?: string
  disabled?: boolean
  isFilter?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, disabled = false, isFilter = false, ...buttonHtmlProps}: ButtonProps) {
  return (
    <S.ButtonWrapper disabled={disabled} isFilter={isFilter} {...buttonHtmlProps}>
      {children}
    </S.ButtonWrapper>
  )
}
