import * as S from './styles'
import ListCategories from '@/components/ListCategories'
import { useState } from 'react'
import CategoriesDebitAdd from './components/CategoriesDebitAdd'

const CategoriesDebit = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const getValueOpen = (value: boolean) => {
    setModalIsOpen(value)
  }
  return (
    <>
      <S.Wrapper>
        <ListCategories openModal={getValueOpen} />
      </S.Wrapper>
      <S.ModalArea>
        <CategoriesDebitAdd getValueOpen={getValueOpen} isOpen={modalIsOpen} />
      </S.ModalArea>
    </>
  )
}

export default CategoriesDebit
