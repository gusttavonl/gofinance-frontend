import * as S from './styles'

export type CardProps = {
  title: string
  count: string
}

export default function Card({ title, count }: CardProps) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>{title}</S.Title>
      </S.Header>
      <S.Content>
        <S.IconDollar size={40} />
        <S.Count>{count}</S.Count>
      </S.Content>
    </S.Wrapper>
  )
}
