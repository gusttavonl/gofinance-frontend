import Button from '@/components/Button'
import Input from '@/components/Input'
import * as S from './styles' 

export default function CategoriesReceivementForm() {
  return (
    <S.Container>
      <S.Inputs>
        <Input name='title' label='Titulo' placeholder='Digite o titulo'/>
        <Input name='description' label='Descricao' placeholder='Digite a descricao'/>
      </S.Inputs>
      <S.ButtonArea>
        <Button>
          Salvar
        </Button>
      </S.ButtonArea>
    </S.Container>
  )
}
