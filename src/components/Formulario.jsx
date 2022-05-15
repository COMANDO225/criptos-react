import { useState, useEffect } from 'react';


import styled from '@emotion/styled'
import { monedas } from '../data/monedas'
import useSelectMonedas from '../hooks/useSelectMonedas'
import Error from './Error';


const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color .2s ease;
    margin-top: 30px;

    &:hover{
        background-color: #7A7DFE;
    }
`

const Formulario = ({setMonedas}) => {

    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);
    const [mensaje, setMensaje] = useState('')

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu moneda', monedas)
    const [ criptomoneda, SelectCriptomoneda ] = useSelectMonedas('Elige tu criptomoneda', criptos)

    useEffect(() => {
        const consultarApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const arrayCriptos = resultado.Data.map( cripto => {

                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto
            })
            setCriptos(arrayCriptos)
        }
        consultarApi()
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()

        if(moneda === '' && criptomoneda === ''){
            setError(true)
            setMensaje('todos los campos son obligatorios')
            return
        }
        if(moneda === ''){
            setError(true)
            setMensaje('campo moneda es obligatorio')
            return
        }
        if(criptomoneda === ''){
            setError(true)
            setMensaje('campo criptomoneda es obligatorio')
            return
        }
        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
    }


    return (

        <>
            {error && <Error mensaje = {mensaje}/>}
            <form
                onSubmit = {handleSubmit}
            >

                <SelectMonedas/>

                <SelectCriptomoneda/>

                <InputSubmit 
                    type="submit" 
                    value="Cotizar" 
                />
            </form>
        </>
    )
}

export default Formulario