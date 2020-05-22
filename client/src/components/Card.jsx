import React from 'react'
import { Card } from 'react-bootstrap'

const IMG_URL = 'https://image.tmdb.org/t/p/w440_and_h660_face'

export default function Cards({ list }) {
    return (
        <div className="pl-2 pb-3 pt-3 card-container">
            <Card style={styles.card}>
                <Card.Img variant="top" style={styles.image} src={`${IMG_URL}/${list.poster_path}`} />
            </Card>
        </div>
    )
}

const styles = {
    card: { width: '10rem', boxShadow:'1px 1px 5px black', borderRadius:'3%', backgroundColor:'black'},
    image: {borderRadius:'5%'}
}