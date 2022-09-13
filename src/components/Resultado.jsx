import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #f8f8f8;

`
const ConteFlex = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`
const Texto = styled.p`
    font-size: 20px;
    span{
        font-weight: 700;
        color: #fff;
    }
`
const ImgContainer = styled.div`
    width: 120px;
    height: 120px;
    display: flex;
`

const Imagen = styled.img`
    display: block;
`

const Precio = styled.p`
    font-size: 32px;
    span{
        font-weight: 800;
        color: #fff;
    }
`

const Resultado = ({resultado}) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado

    console.log(resultado);
    return (
        <Contenedor>
            <Precio>El precio es de:<span> {PRICE}</span></Precio>

            <ConteFlex>
                
                <div>
                    <Texto>Precio más alto del día:<span> {HIGHDAY}</span></Texto>
                    <Texto>Precio más bajo del día:<span> {LOWDAY}</span></Texto>
                    <Texto>Variación últimas 24 horas:<span> {CHANGEPCT24HOUR}</span></Texto>
                    <Texto>Última Actualización:<span> {LASTUPDATE}</span></Texto>
                </div>
                <ImgContainer>
                    <Imagen src={`https://www.cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
                </ImgContainer>
            </ConteFlex>

        </Contenedor>
    )
}

export default Resultado