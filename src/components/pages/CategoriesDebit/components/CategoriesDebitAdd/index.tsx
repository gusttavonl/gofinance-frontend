import Modal from '@/components/Modal'
import CategoriesDebitForm from '../CategoriesDebitForm'

export type CategoriesDebitAddProps = {
  isOpen: boolean
  getValueOpen: (value: boolean) => void
}


const CategoriesDebitAdd = ({ isOpen, getValueOpen }: CategoriesDebitAddProps) => {
  return (
    <Modal 
      title="Adicionar nova categoria de débito"
      isOpen={isOpen}
      getValueOpen={getValueOpen}
    >
      <CategoriesDebitForm />
    </Modal>
  )
}

export default CategoriesDebitAdd
