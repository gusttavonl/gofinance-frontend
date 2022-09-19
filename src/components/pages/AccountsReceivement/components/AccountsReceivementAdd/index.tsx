import Modal from '@/components/Modal'
import AccountsReceivementForm from '../AccountsReceivementForm'

export type AccountsReceivementAddProps = {
  isOpen: boolean
  getValueOpen: (value: boolean) => void
}


const AccountsReceivementAdd = ({ isOpen, getValueOpen }: AccountsReceivementAddProps) => {
  return (
    <Modal 
      title="Adicionar novo recebimento"
      isOpen={isOpen}
      getValueOpen={getValueOpen}
    >
      <AccountsReceivementForm />
    </Modal>
  )
}

export default AccountsReceivementAdd
