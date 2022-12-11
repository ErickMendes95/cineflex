import styled from "styled-components"
import Footer from "../components/Footer"

export default function Seats(){
    const numberSeats = []
    for(let i=1;i<51;i++){
        numberSeats.push(i)
    }
    return(
        <Container>
            <Text>
                <h1>Selecione o(s) assento(s)</h1>
            </Text>
            <SeatsContainer>
                {numberSeats.map((s, index) => 
                    <button>{index + 1}</button>
                    )}
            </SeatsContainer>
            <LegendsContainer>
                    <Legend>
                        <GreenCircle></GreenCircle>
                        <p>Selecionado</p>
                    </Legend>
                    <Legend>
                        <GrayCircle></GrayCircle>
                        <p>Disponível</p>
                    </Legend>
                    <Legend>
                        <YellowCircle></YellowCircle>
                        <p>Indisponível</p>
                    </Legend>
            </LegendsContainer>
            <FormsContainer>
                <form>
                    <label>
                        <h1>NOME DO COMPRADOR</h1>
                        <input type="text" name="nome" placeholder="Digite seu nome.."></input>
                    </label>
                    <label>
                        <h1>CPF DO COMPRADOR</h1>
                        <input type="text" name="cpf" placeholder="Digite seu cpf.." pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"></input>
                    </label>
                    <button>Reservar assento(s)</button>
                </form>
            </FormsContainer>
            <Footer/>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
margin-top: 64px;
justify-content: center;
align-items: center;
background: #fff;
`

const Text = styled.div`
h1{
    font-weight: 400;
    font-size: 24px;
    margin: 20px 0;
}
`

const SeatsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width : 90%;
    margin: 10px 0 10px 15px;
    button{
        margin-right: 10px;
        margin-bottom: 20px;
        background: #C3CFD9;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 1px solid #808F9D;
        font-size: 12px;
        cursor: pointer;
    }
`

const LegendsContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-around;
    align-items: center;
`

const Legend = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

const GreenCircle = styled.div`
    background: #1AAE9E;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 1px solid #0E7D71;
`

const GrayCircle = styled.div`
    background: #C3CFD9;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 1px solid #808F9D;
`

const YellowCircle = styled.div`
    background: #FBE192;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 1px solid #F7C52B;
`

const FormsContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    margin-top: 50px;
    h1{
        margin: 10px 0 5px 0;
    }
    input{
        width: 350px;
        height: 51px;
        margin-bottom: 5px;
    }
    button {
        font-size: 18px;
        color: #fff;
        background: #E8833A;
        width: 225px;
        height: 42px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        margin: 50px 5px 0 75px;       
    }
`