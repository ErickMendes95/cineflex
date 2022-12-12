import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"


export default function Success({route, navigate}){

     const params = useLocation()
     console.log(params.state)
     const info = params.state;
     const info2 = params.state.infoSession
    
    return (
        <Container>
            <Confirmation>
                <h1>Pedido feito<br/> com sucesso!</h1>
            </Confirmation>
            <Text>
                <h1>Filme e sessão</h1>
                <p>{info2.movie.title}</p>
                <p>{info2.day.date} {info2.name}</p>
            </Text>
            <Text>
                <h1>Ingressos</h1>
                {info.seats.map((s) => <p>Assento {s}</p>)}
            </Text>
            <Text>
                <h1>Comprador</h1>
                <p>Nome: {info.name}</p>
                <p>CPF: {info.cpf}</p>
            </Text>
            <Link to="/">
                <Button>
                    <button>Voltar pra Home</button>
                </Button>
            </Link>
        </Container>        
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    height: 100vh;
    margin-top: 100px;
    `
    
const Confirmation = styled.div`
    color: #247A6B;
    font-size: 24px;
    font-weight: 700px;
    text-align: center;
    margin-bottom: 25px;
`

const Text = styled.div`
    margin-left: 25px;
    margin-bottom: 20px;
h1{
    font-weight: 700;
    font-size: 24px;
    margin: 10px 0;
}
p{
    font-size: 22px;
    margin-top: 10px;
}
`


const Button = styled.div`
    button {
        font-size: 18px;
        color: #fff;
        background: #E8833A;
        width: 225px;
        height: 42px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        margin-top: 25px;
        margin-left: 74px;
    } 
`