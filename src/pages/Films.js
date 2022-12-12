import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Films(){

    const [films, setFilms] = useState([])
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
        promise.then(res => setFilms(res.data))
        promise.catch(err => console.log(err.response.data))

    }, [])
    
    if(films === undefined) {
        return <div>Carregando...</div>
    }
    return (
        <Container>
            <Text>
            <h1>Selecione o Filme</h1>
            </Text>
            <Image>
                {films.map(f => 
                <Link to={`/sessions/${f.id}`}>
                    <img src={f.posterURL} alt={f.title}/>
                </Link>
                    )}
            </Image>
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

const Image = styled.div`

    img{
        width: 129px;
        height: 193px;
        margin-left: 55px;
        margin-bottom: 25px;
        cursor: pointer;
    }
`