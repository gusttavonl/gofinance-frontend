import { useState, useEffect } from 'react'
import * as S from './styles'

export type ModalProps = {
  title: string
  children?: React.ReactNode
  isOpen: boolean
  getValueOpen: (value: boolean) => void
}

export default function Modal({ title, children, isOpen, getValueOpen }: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)
  useEffect(() => {
    if (isOpen) {
      setIsModalOpen(true)
      getValueOpen(true)
    } else {
      setIsModalOpen(false)
      getValueOpen(false)
    }
  }, [isOpen])
  return (
    <>
      {isModalOpen && (
        <S.Wrapper>
          <S.Header>
            <S.Title>{title}</S.Title>
            <S.CloseIcon onClick={() => {
              setIsModalOpen(!isModalOpen)
              getValueOpen(!isModalOpen)
            }}/>
          </S.Header>
          <S.Content>
            {children}
          </S.Content>
        </S.Wrapper>
      )}
    </>
  )
}
