import Link from 'next/link'
import Navegador from '../components/Navegador'

export default function Inicio () {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh'
    }}>
      <Navegador texto="Estiloso" destino="/estiloso"/>
      <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3"/>
      <Navegador texto="Jsx" destino="/jsx" cor="crimson"/>
      <Navegador texto="Navegação #01" destino="/navegacao" cor="green"/>
      <Navegador texto="Navegação #02" destino="/cliente/sp-2/321" cor="blue"/>
    </div>
  )
}