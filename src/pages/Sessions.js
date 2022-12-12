import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import Footer from "../components/Footer"

export default function Sessions({setImage, setTitle, setWeekday, setSessionTime}){

    const [filmSessions, setFilmSessions] = useState(undefined)
    const { idFilm } = useParams()
    console.log(filmSessions)
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilm}/showtimes`)
        promise.then(res => setFilmSessions(res.data))
    }, [])

    if(filmSessions === undefined){
        return <div>Carregando...</div>
    }

    function setParams(e){
        setImage(filmSessions.posterURL)
        setTitle(filmSessions.title)
        setSessionTime(e.target.value)
        console.log(e.target.id)
        if(e.target.id === "1" || e.target.id === "9"){
            setWeekday("Domingo");
        } else if(e.target.id === "2" || e.target.id === "10"){
            setWeekday("Segunda-Feira")
        } else if(e.target.id === "3" || e.target.id === "11"){
            setWeekday("Terça-Feira")
        } else if(e.target.id === "4" || e.target.id === "12"){
            setWeekday("Quarta-Feira")
        } else if(e.target.id === "5" || e.target.id === "13"){
            setWeekday("Quinta-Feira")
        } else if(e.target.id === "6" || e.target.id === "14"){
            setWeekday("Sexta-Feira")
        } else if(e.target.id === "7" || e.target.id === "15"){
            setWeekday("Sábado")
        } else if(e.target.id === "8" || e.target.id === "16"){
            setWeekday("Domingo")
        }
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
                            <Link to={`/seats/${d.id}`}>
                                 <button id={index + 1} value={ds.name} onClick={(event) => setParams(event)}>{ds.name}</button>
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