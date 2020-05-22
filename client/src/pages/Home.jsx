import React from 'react'

//components
import Trending from '../components/Trending'
import Banner from '../components/Banner'

export default function Home() {
    return (
        <div className="container">
            <Banner />
            <Trending />
        </div>
    )
}
