import styled from "styled-components"

export default function Footer({title, sessionTime, image, weekday, hifen}){

    return(
        <FooterContainer data-test="footer">
            <img src={image} alt="#"/>
            <Text>
            <h1>{title}</h1>
            <h1>{weekday} {hifen} {sessionTime}</h1>
            </Text>

        </FooterContainer>
    )
}

const FooterContainer = styled.div`
display: flex;
margin-top: 20px;
height: 117px;
font-weight: 400;
font-size: 34px;
width: 375px;
gap: 10px;
align-items: center;
color: #E8833A;
background: #DFE6ED;
border: 1px solid #9EADBA
position: fixed;
left: 0;
bottom: 0;
padding: 10px;  
img {
    width: 48px;
    height: 72px;
    margin-right: 10px;
}
h1{
    color: #293845;
    font-size: 26px;
}
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`