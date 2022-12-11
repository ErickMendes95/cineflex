import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Footer from "../components/Footer"

export default function Sessions(){
    return (
        <Container>
            <Text>
                <h1>Selecione a Sessão</h1>
            </Text>
            <Session>
                <Text>
                <p>Quinta-Feira</p>
                </Text>
                <Buttons>
                    <button>15:00</button>
                    <button>16:00</button>
                </Buttons>

            </Session>
            <Session>
            <Text>
                <p>Sexta-Feira</p>
                </Text>
                <Buttons>
                    <button>15:00</button>
                    <button>16:00</button>
                </Buttons>
            </Session>
            <Footer/>
        </Container>)
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
p{
    font-size: 20px;
    margin: 20px 0;
}
`

const Session = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 50px;

`

const Buttons = styled.div`
    button {
        font-size: 18px;
        color: #fff;
        background: #E8833A;
        width: 83px;
        height: 43px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        margin-right: 5px;
    } 
`