import React from 'react'

//components
import Container from '../components/Container'

export default function Serie() {
    return (
        <div className="container">
            <Container url={'/3/tv/on_the_air?api_key='} title={'On Air'}/>
            <Container url={'/3/tv/popular?api_key='} title={'Popular Shows'}/>
            <Container url={'/3/tv/top_rated?api_key='} title={'Top Rated'}/>
        </div>
    )
}
