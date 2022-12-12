import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import Footer from "../components/Footer"

export default function Sessions(){

    const [filmSessions, setFilmSessions] = useState(undefined)
    const { idFilm } = useParams()
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilm}/showtimes`)
        promise.then(res => setFilmSessions(res.data))
    }, [])

    if(filmSessions === undefined){
        return <div>Carregando...</div>
    }
    
    return (
        <Container>
            <Text>
                <h1>Selecione a Sessão</h1>
            </Text>
            {filmSessions.days.map((d, index) => 
                <Session>
                    <Text>
                        <p>{d.weekday} - {d.date}</p>
                    </Text>
                    <Buttons>
                        {d.showtimes.map((ds) => 
                            <Link to={`/seats/${ds.id}`}>
                                 <button id={ds.id} value={ds.name}>{ds.name}</button>
                            </Link>
                        )}
                    </Buttons>
                 </Session>
            )}
            <Footer image={filmSessions.posterURL} title={filmSessions.title}/>
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
    margin: 10px 0;
}
p{
    font-size: 20px;
    margin: 10px 0;
}
`

const Session = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 50px;
`

const Buttons = styled.div`
    margin-bottom: 5px;
    button {
        font-size: 18px;
        color: #fff;
        background: #E8833A;
        width: 70px;
        height: 33px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        margin-right: 20px;
    } 
`