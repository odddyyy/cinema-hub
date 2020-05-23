import React from 'react'

//components
import Container from '../components/Container'

export default function Movie() {
    return (
        <div className="container">
            <Container url={'/3/movie/now_playing?api_key='} title={'Now Playing'}/>
            <Container url={'/3/movie/upcoming?api_key='} title={'Coming Soon'}/>
            <Container url={'/3/movie/popular?api_key='} title={'Popular this week'}/>
        </div>
    )
}
