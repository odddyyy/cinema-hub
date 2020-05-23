import React from 'react'

//components
import Banner from '../components/Banner'
import Container from '../components/Container'

export default function Home() {
    return (
        <div className="container">
            <Banner />
            <Container url={'/3/trending/all/week?api_key='} title={'Trending this week'}/>
        </div>
    )
}
