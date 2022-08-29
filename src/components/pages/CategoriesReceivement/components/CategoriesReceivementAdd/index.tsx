import Modal from '@/components/Modal'
import CategoriesReceivementForm from '../CategoriesReceivementForm'

export type CategoriesReceivementAddProps = {
  isOpen: boolean
  getValueOpen: (value: boolean) => void
}


const CategoriesReceivementAdd = ({ isOpen, getValueOpen }: CategoriesReceivementAddProps) => {
  return (
    <Modal 
      title="Adicionar novo recebimento"
      isOpen={isOpen}
      getValueOpen={getValueOpen}
    >
      <CategoriesReceivementForm />
    </Modal>
  )
}

export default CategoriesReceivementAdd
