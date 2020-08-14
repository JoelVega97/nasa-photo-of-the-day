import React from 'react'
import styled from 'styled-components'


const StyledHeader = styled.div`

 background-color: ${props => props.theme.mainColor};
 color: ${props => props.theme.thirdColor};

`


export default function Header({title, date}){
    return (
        <StyledHeader className = 'Head'>
            <h1>{title}</h1>
            <p> {date} </p>
        </StyledHeader>
    )
}