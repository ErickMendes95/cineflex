import styled from "styled-components"

export default function NavBar(){
    return(
        <Container>
            <h1>CINEFLEX</h1>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    background: #C3CFD9;
    width: 100%;
    height: 67px;
    font-weight: 400;
    font-size: 34px;
    justify-content: center;
    align-items: center;
    color: #E8833A;
    position: fixed;
    top: 0;
`