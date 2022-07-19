import { useRouter } from 'next/dist/client/router'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { GrMoney } from 'react-icons/gr'
import { MdAttachMoney, MdMoneyOff } from 'react-icons/md'
import * as S from './styles' 

type DefaultLayoutProps = {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const router = useRouter()
  return (
    <S.Container>
      <S.Header>
        <S.Link>
          <S.Logo src='/img/logo-finance.svg' />
        </S.Link>
        <S.Links>
          <S.Link onClick={() => router.replace('/auth')}><RiMoneyDollarCircleLine size={30} /></S.Link>
          <S.Link onClick={() => router.replace('/auth')}><GrMoney size={30} /></S.Link>
          <S.Link onClick={() => router.replace('/auth')}><MdAttachMoney size={30} /></S.Link>
          <S.Link onClick={() => router.replace('/auth')}><MdMoneyOff size={30} /></S.Link>
        </S.Links>
      </S.Header>
     {children}
    </S.Container>
  )
}

export default DefaultLayout