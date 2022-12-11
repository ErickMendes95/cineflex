import styled from "styled-components"

export default function Footer(){
    return(
        <FooterContainer>
            <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" alt="#"/>
            <h1>Titulo Filme</h1>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
display: flex;
height: 117px;
font-weight: 400;
font-size: 34px;
width: 375px;
gap: 10px;
align-items: center;
color: #E8833A;
position: fixed;
left: 0;
bottom: 0;  
margin-left: 20px;
img {
    width: 48px;
    height: 72px;
}
h1{
    color: #293845;
    font-size: 26px;
}
`