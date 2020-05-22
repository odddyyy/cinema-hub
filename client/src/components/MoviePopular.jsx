import React, { useEffect, useState } from 'react'
import axios from 'axios'

//components
import Card from './Card'

//API Information
const SERVER = 'https://api.themoviedb.org'
const API_KEY = '8113712620f0ddff1922d028c6920b17'


export default function MoviePopular() {

    const [list, setList] = useState([])

    const getPopular = async () => {
        const response = await axios(`${SERVER}/3/movie/popular?api_key=${API_KEY}`)
        setList(response.data.results)
    
    }

    useEffect(() => {
        console.log('EFFECT CALLED IN Trending')
        getPopular()
    },[])

    return (
        <>
        <h1 className="title-page mt-5">Popular This Week</h1>
        <div className="row flex-row flex-nowrap" style={styles.rowList}>
            {list.map(i => (
                <Card key={i.id} list={i}/>
            ))}
        </div>
        </>
    )
}

const styles = {
    rowList: {overflowX: 'scroll', whiteSpace: 'nowrap', marginTop:'-15px'}
}