import React from 'react'

//components
import NowPlaying from '../components/MovieNowPlaying'
import Upcoming from '../components/MovieUpcoming'
import Popular from '../components/MoviePopular'

export default function Movie() {
    return (
        <div className="container">
            <NowPlaying />
            <Upcoming />
            <Popular />
        </div>
    )
}
