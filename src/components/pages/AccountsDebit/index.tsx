import * as S from './styles'
import ListAccounts from '@/components/ListAccounts'
import { useState } from 'react'
import AccountsDebitAdd from './components/AccountsDebitAdd'

const AccountsDebit = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const getValueOpen = (value: boolean) => {
    setModalIsOpen(value)
  }
  return (
    <>
      <S.Wrapper>
        <ListAccounts openModal={getValueOpen} />
      </S.Wrapper>
      <S.ModalArea>
        <AccountsDebitAdd getValueOpen={getValueOpen} isOpen={modalIsOpen} />
      </S.ModalArea>
    </>
  )
}

export default AccountsDebit
