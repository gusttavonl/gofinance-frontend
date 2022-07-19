import Button from '@/components/Button'
import Card from '@/components/Card'
import * as S from './styles'
import { VictoryPie } from 'victory'

const Main = () => (
  <S.Wrapper>
    <S.Main>
      <S.Graph>
        <VictoryPie
          padAngle={4}
          animate={{
            duration: 2000
          }}
          data={[
            { x: "A Pagar", y: 20 },
            { x: "A Receber", y: 80 },
          ]}
          innerRadius={100}
          colorScale={["tomato", "orange"]}
          style={{
            data: {
              fillOpacity: 0.9, stroke: "#fff", strokeWidth: 3
            },
            labels: {
              fill: "#000",
            }
          }}
        />
      </S.Graph>
      <S.Cards>
        <Card title='Saldo a pagar' count='120.55'/>
        <Card title='Saldo a receber' count='100.55'/>
        <Card title='Saldo total' count='-20.55'/>
        <Button>
          Download
        </Button>
      </S.Cards>
    </S.Main>
  </S.Wrapper>
)

export default Main
