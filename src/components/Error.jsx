import styled from '@emotion/styled'
import React from 'react'

const Texto = styled.div`
    display: block;
    text-align: center;
    color: #F20013;
    padding: 16px 5px;
    border-radius: 8px;
    background-color: #FDD5DD;
    text-transform: uppercase;
    font-weight: 700;
`

const Error = ({mensaje}) => {
    return (
        <Texto>
            {mensaje}
        </Texto>
    )
}

export default Error