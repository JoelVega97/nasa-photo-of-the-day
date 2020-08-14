import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`

 background-color: ${props => props.theme.mainColor};
 color: ${props => props.theme.thirdColor};

 img{
     margin-top: 1em;
     border: solid 5px ${props => props.theme.secondColor};
     width: 75%;
 }

`

export default function MidContainer ({url, text, cc}){
    return (
    <div>
        <StyledContainer>
            <img src = {url} alt = {'suns path along ecliptic'} height = {500}></img>
            <p className = 'explain'>{text}</p>
            <p className = 'copyright'>{cc}</p>
        </StyledContainer>
    </div>
    )
}