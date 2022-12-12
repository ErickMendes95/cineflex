import styled from "styled-components"

export default function Success(){
    return (
        <Container>
            <Text>
                <h1>Hello</h1>
            </Text>
        </Container>        
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100vh;
    margin-top: 64px;
    justify-content: center;
    align-items: center;
`

const Text = styled.div`
h1{
    font-weight: 400;
    font-size: 24px;
    margin: 20px 0;
}
`