import { InputHTMLAttributes } from 'react'
import * as S from './styles'

export type InputProps = {
  label?: string
  placeholder?: string
  isFilter?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export default function Input({ name, label, placeholder, type, isFilter }: InputProps) {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.InputWrapper>
        <S.Input 
          placeholder={placeholder} 
          name={name} 
          type={type} 
          isFilter={isFilter}
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}
