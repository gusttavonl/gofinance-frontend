import * as S from './styles'
import ListAccounts from '@/components/ListAccounts'
import { useState } from 'react'
import AccountsReceivementAdd from './components/AccountsReceivementAdd'

const AccountsReceivement = () => {
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
        <AccountsReceivementAdd getValueOpen={getValueOpen} isOpen={modalIsOpen} />
      </S.ModalArea>
    </>
  )
}

export default AccountsReceivement
