import Button from '@/components/Button'
import Input from '@/components/Input'
import * as S from './styles' 

export default function Login() {
  return (
    <S.Container>
      <S.ImgLogin src='/img/logo-finance.svg' />
      <Input name='login' label='Login' placeholder='Digite seu nome'/>
      <Input name='password' label='Senha' placeholder='Digite sua senha'/>
      <Button>
        Entrar
      </Button>
    </S.Container>
  )
}
