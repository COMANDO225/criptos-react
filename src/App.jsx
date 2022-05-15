import {useState, useEffect} from 'react';

import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import ImagenCripto from './img/imagen-criptos.png'
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Heading = styled.h1`
  color: #fff;
  text-align: center;
  margin: 80px 0 50px;
  font-size: 34px;

  &::after{
    content: '';
    width: 100px;
    height: 4px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const App = () => {

  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  const {moneda, criptomoneda} = monedas

  useEffect(() => {

    if(Object.keys(monedas).length > 0){


      const cotizarCripto = async () => {
        setCargando(true)
        setResultado({})
        
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setResultado(resultado.DISPLAY[criptomoneda][moneda])

        setCargando(false)
      }
      cotizarCripto()
    }
  }, [monedas]);

  return (
    <Contenedor>
      <Imagen 
        src={ImagenCripto}
        alt = "Imagenes criptomonedas"
      />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>

        <Formulario
          setMonedas = {setMonedas}
        />
        {cargando && <Spinner/>}

        {
          resultado.PRICE && <Resultado resultado = {resultado}/>
        }
      </div>

    </Contenedor>
  )
}

export default App
