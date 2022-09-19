import Button from '@/components/Button'
import Input from '@/components/Input'
import * as S from './styles' 

export default function AccountsReceivementForm() {
  return (
    <S.Container>
      <S.Inputs>
        <Input name='title' label='Titulo' placeholder='Digite o titulo'/>
        <Input name='description' label='Descricao' placeholder='Digite a descricao'/>
        <Input name='category' label='Categoria' placeholder='Selecione a categoria' />
        <Input name='value' label='Valor' placeholder='Digite o valor' type='number' />
        <Input name='date' label='Data' placeholder='Digite a data' type='date' />
      </S.Inputs>
      <S.ButtonArea>
        <Button>
          Salvar
        </Button>
      </S.ButtonArea>
    </S.Container>
  )
}
