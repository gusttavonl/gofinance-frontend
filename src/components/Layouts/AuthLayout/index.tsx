import * as S from './styles' 

type AuthLayoutProps = {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <S.Container>
     {children}
    </S.Container>
  )
}

export default AuthLayout